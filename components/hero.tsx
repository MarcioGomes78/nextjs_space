
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronRight, Play, Users, Award, Clock } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleScheduleClick = () => {
    const contactSection = document.getElementById('contato')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://static.abacusaicdn.net/images/dab7047f-2a29-4eb8-8ed2-6d0c18bae6d2.png"
            alt="Ambiente de fisioterapia profissional"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <div className="space-y-4">
              {/* Logo */}
              <div className="mb-8">
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src="https://static.abacusaicdn.net/images/7cde214d-3e14-42b4-b193-31273418c6a9.png"
                    alt="Vitta Fisio & Movimento Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-petrol-blue font-montserrat leading-tight">
                  Vitta Fisio &<br />
                  <span className="text-lime-green">Movimento</span>
                </h1>
              </div>

              <h2 className="text-2xl lg:text-3xl font-semibold text-graphite mb-4">
                Volte a se mover <span className="text-lime-green">sem dor</span>
              </h2>

              <p className="text-lg text-gray-600 max-w-xl font-source-sans">
                Fisioterapia especializada para ajudar você a recuperar sua qualidade de vida. 
                Nossa equipe de profissionais qualificados oferece tratamentos personalizados 
                para que você possa voltar às suas atividades com confiança e sem limitações.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleScheduleClick}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Agendar Avaliação
                <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => {
                  const benefitsSection = document.querySelector('[data-section="benefits"]')
                  benefitsSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Play size={18} />
                Conhecer Tratamentos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-lime-green" />
                </div>
                <div className="text-2xl font-bold text-petrol-blue">500+</div>
                <div className="text-sm text-gray-600">Pacientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-lime-green" />
                </div>
                <div className="text-2xl font-bold text-petrol-blue">95%</div>
                <div className="text-sm text-gray-600">Taxa de melhoria</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="w-8 h-8 text-lime-green" />
                </div>
                <div className="text-2xl font-bold text-petrol-blue">5+</div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`hidden lg:block ${isVisible ? 'animate-fade-in' : ''}`}>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative aspect-square bg-gradient-to-br from-lime-green/20 to-petrol-blue/20 rounded-full">
                  <div className="absolute inset-8">
                    <div className="relative w-full h-full">
                      <Image
                        src="https://static.abacusaicdn.net/images/fa31b8b3-9960-4de4-a1c2-11807cf91e60.png"
                        alt="Vitta Logo Icon"
                        fill
                        className="object-contain opacity-80"
                      />
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-lime-green rounded-full flex items-center justify-center animate-pulse">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-petrol-blue rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

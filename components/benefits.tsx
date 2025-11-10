
'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Heart, Zap, Shield, Target } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Alívio Definitivo da Dor',
    description: 'Tratamentos especializados que atacam a causa raiz do problema, proporcionando alívio duradouro.',
    features: ['Avaliação completa da causa', 'Técnicas comprovadas', 'Resultados mensuráveis']
  },
  {
    icon: Zap,
    title: 'Recuperação da Mobilidade',
    description: 'Programas personalizados para restaurar sua amplitude de movimento e flexibilidade.',
    features: ['Exercícios direcionados', 'Fortalecimento muscular', 'Melhoria da postura']
  },
  {
    icon: Shield,
    title: 'Prevenção de Recidivas',
    description: 'Educação e estratégias para prevenir o retorno dos problemas no futuro.',
    features: ['Orientação postural', 'Exercícios para casa', 'Cuidados preventivos']
  },
  {
    icon: Target,
    title: 'Retorno às Atividades',
    description: 'Preparação completa para voltar às suas atividades favoritas com confiança.',
    features: ['Condicionamento específico', 'Treino funcional', 'Acompanhamento contínuo']
  }
]

export default function Benefits() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(benefits.length).fill(false))
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.1 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <section data-section="benefits" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6 text-lime-green" />
            <span className="text-lime-green font-semibold uppercase tracking-wide">Benefícios</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-petrol-blue mb-4 font-montserrat">
            Como a fisioterapia pode <span className="text-lime-green">transformar sua vida</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra os benefícios reais que nossos tratamentos especializados podem oferecer 
            para sua recuperação e qualidade de vida.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={el => { itemRefs.current[index] = el }}
              className={`group transform transition-all duration-700 ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="card-custom p-8 h-full relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-lime-green/10 to-petrol-blue/10 rounded-bl-full"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-green to-lime-green/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-petrol-blue mb-3 font-montserrat">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-lime-green rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-petrol-blue to-petrol-blue/90 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-montserrat">
              Nosso processo em <span className="text-lime-green">3 etapas</span>
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Uma abordagem sistemática para garantir sua recuperação completa e duradoura.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Avaliação Completa',
                description: 'Análise detalhada do seu histórico médico, exame físico e identificação das causas do problema.'
              },
              {
                step: '02',
                title: 'Plano Personalizado',
                description: 'Desenvolvimento de um protocolo de tratamento específico para suas necessidades e objetivos.'
              },
              {
                step: '03',
                title: 'Acompanhamento Contínuo',
                description: 'Monitoramento da evolução, ajustes no tratamento e orientações para manter os resultados.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-lime-green/30 mb-2 font-montserrat">
                  {process.step}
                </div>
                <h4 className="text-xl font-bold mb-3 font-montserrat text-lime-green">
                  {process.title}
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

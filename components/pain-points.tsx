
'use client'

import { useEffect, useRef, useState } from 'react'
import { AlertCircle, ArrowRight } from 'lucide-react'

const painPoints = [
  {
    icon: '🔥',
    title: 'Dor nas Costas',
    description: 'Dores constantes que limitam suas atividades diárias e afetam sua qualidade de vida.',
    symptoms: ['Rigidez matinal', 'Dificuldade para se levantar', 'Dor que irradia para as pernas']
  },
  {
    icon: '🦴',
    title: 'Problemas Articulares',
    description: 'Articulações doloridas que reduzem sua mobilidade e independência.',
    symptoms: ['Inchaço nas articulações', 'Diminuição da amplitude de movimento', 'Dor ao se movimentar']
  },
  {
    icon: '🏃‍♂️',
    title: 'Limitação de Movimento',
    description: 'Dificuldades para realizar movimentos básicos do dia a dia.',
    symptoms: ['Dificuldade para subir escadas', 'Problemas para se abaixar', 'Limitação para atividades esportivas']
  },
  {
    icon: '⚡',
    title: 'Recuperação Pós-Lesão',
    description: 'Processo de recuperação lento após acidentes ou cirurgias.',
    symptoms: ['Perda de força muscular', 'Medo de se movimentar', 'Cicatrização inadequada']
  }
]

export default function PainPoints() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(painPoints.length).fill(false))
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
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-lime-green" />
            <span className="text-lime-green font-semibold uppercase tracking-wide">Problemas Comuns</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-petrol-blue mb-4 font-montserrat">
            Você está enfrentando algum destes problemas?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Identificamos os principais desafios que nossos pacientes enfrentam antes de encontrar 
            o tratamento adequado na nossa clínica.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              ref={el => { itemRefs.current[index] = el }}
              className={`card-custom p-8 transform transition-all duration-700 ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl flex-shrink-0">{point.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-petrol-blue mb-2 font-montserrat">
                    {point.title}
                  </h3>
                  <p className="text-gray-600">
                    {point.description}
                  </p>
                </div>
              </div>

              {/* Symptoms */}
              <div className="space-y-2">
                <h4 className="font-semibold text-graphite text-sm uppercase tracking-wide">
                  Sintomas comuns:
                </h4>
                <ul className="space-y-1">
                  {point.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-lime-green rounded-full flex-shrink-0"></div>
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-petrol-blue mb-4 font-montserrat">
              Não deixe a dor limitar sua vida
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe especializada pode ajudar você a superar estes desafios com 
              tratamentos personalizados e eficazes.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contato')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Quero uma Avaliação Gratuita
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

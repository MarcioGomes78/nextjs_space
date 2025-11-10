
'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Silva',
    age: 45,
    condition: 'Dor nas costas crônica',
    rating: 5,
    testimonial: 'Depois de anos sofrendo com dores nas costas, finalmente encontrei alívio na Vitta Fisio & Movimento. A equipe é extremamente profissional e o tratamento realmente funciona. Hoje posso brincar com meus filhos sem limitações!',
    results: 'Redução de 90% da dor em 8 semanas',
    image: '👩‍💼'
  },
  {
    name: 'João Santos',
    age: 38,
    condition: 'Recuperação pós-cirurgia de joelho',
    rating: 5,
    testimonial: 'Após minha cirurgia no joelho, estava preocupado se voltaria a correr. A fisioterapia na Vitta foi fundamental para minha recuperação total. Hoje corro maratonas novamente!',
    results: 'Retorno completo às atividades em 12 semanas',
    image: '🏃‍♂️'
  },
  {
    name: 'Ana Paula Costa',
    age: 52,
    condition: 'Problemas de postura e cervical',
    rating: 5,
    testimonial: 'Trabalho muito tempo no computador e desenvolvi sérios problemas cervicais. O tratamento na Vitta não só aliviou minhas dores, mas me ensinou a manter uma postura saudável no trabalho.',
    results: 'Melhoria de 95% na postura e fim das dores',
    image: '👩‍💻'
  },
  {
    name: 'Carlos Oliveira',
    age: 29,
    condition: 'Lesão esportiva no ombro',
    rating: 5,
    testimonial: 'Como atleta, precisava de uma recuperação rápida e eficaz. A equipe da Vitta entendeu minhas necessidades e criou um protocolo específico. Voltei ao esporte mais forte que antes!',
    results: 'Retorno ao esporte em 6 semanas com melhora de performance',
    image: '⚽'
  }
]

export default function Testimonials() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(testimonials.length).fill(false))
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
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

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Quote className="w-6 h-6 text-lime-green" />
            <span className="text-lime-green font-semibold uppercase tracking-wide">Depoimentos</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-petrol-blue mb-4 font-montserrat">
            Histórias de <span className="text-lime-green">sucesso reais</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como nossos pacientes superaram suas limitações e voltaram a viver 
            sem dor com nossos tratamentos especializados.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-lime-green/10 to-petrol-blue/10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-lime-green/10 to-petrol-blue/10 rounded-full translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10">
              {/* Quote icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-green to-lime-green/80 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial content */}
              <div className="text-center mb-8">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].testimonial}"
                </p>
                
                {/* Patient info */}
                <div className="space-y-3">
                  <div className="flex justify-center items-center gap-3">
                    <span className="text-3xl">{testimonials[currentTestimonial].image}</span>
                    <div className="text-left">
                      <div className="font-bold text-petrol-blue text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[currentTestimonial].age} anos • {testimonials[currentTestimonial].condition}
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center items-center gap-1">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  
                  {/* Results */}
                  <div className="inline-block bg-lime-green/10 text-lime-green px-4 py-2 rounded-full text-sm font-semibold">
                    ✨ {testimonials[currentTestimonial].results}
                  </div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-lime-green w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={el => { itemRefs.current[index] = el }}
              className={`card-custom p-6 transform transition-all duration-700 ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl flex-shrink-0">{testimonial.image}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-petrol-blue">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600">{testimonial.age} anos</p>
                    </div>
                    <div className="flex gap-0.5">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{testimonial.condition}</p>
                </div>
              </div>

              {/* Testimonial text */}
              <p className="text-sm text-gray-700 leading-relaxed mb-3 italic">
                "{testimonial.testimonial.length > 150 
                  ? testimonial.testimonial.substring(0, 150) + '...' 
                  : testimonial.testimonial}"
              </p>

              {/* Results badge */}
              <div className="text-xs bg-lime-green/10 text-lime-green px-3 py-1 rounded-full inline-block">
                {testimonial.results}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div 
            className="rounded-2xl p-8 text-white max-w-2xl mx-auto"
            style={{ background: 'linear-gradient(to right, #1E3A5F, rgba(30, 58, 95, 0.9))' }}
          >
            <h3 className="text-2xl font-bold mb-4 font-montserrat text-white">
              Pronto para ser nossa próxima história de sucesso?
            </h3>
            <p className="mb-6 text-white opacity-90">
              Junte-se a centenas de pacientes que já recuperaram sua qualidade de vida conosco.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contato')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
              style={{ backgroundColor: '#97D700' }}
            >
              Iniciar Meu Tratamento Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

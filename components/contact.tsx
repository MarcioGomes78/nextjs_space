
'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      })
    }, 3000)
  }

  const whatsappNumber = "5511999999999" // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma avaliação na Vitta Fisio & Movimento.")

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Phone className="w-6 h-6 text-lime-green" />
            <span className="text-lime-green font-semibold uppercase tracking-wide">Contato</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-petrol-blue mb-4 font-montserrat">
            Comece sua <span className="text-lime-green">jornada de recuperação</span> hoje
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco e agende sua avaliação gratuita. Nossa equipe está pronta 
            para ajudar você a voltar a se mover sem dor.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-lime-green to-lime-green/80 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8" />
                <h3 className="text-xl font-bold font-montserrat">Agendamento Rápido</h3>
              </div>
              <p className="mb-4 text-white/90">
                Agende sua avaliação gratuita direto pelo WhatsApp em menos de 1 minuto!
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-lime-green font-bold px-6 py-3 rounded-lg hover:bg-white/95 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Agora
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-petrol-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-petrol-blue mb-1">Telefone</h4>
                  <p className="text-gray-600">(11) 99999-9999</p>
                  <p className="text-sm text-gray-500">Seg-Sex: 7h às 19h | Sáb: 8h às 14h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-petrol-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-petrol-blue mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@vittafisio.com.br</p>
                  <p className="text-sm text-gray-500">Respondemos em até 2 horas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-petrol-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-petrol-blue mb-1">Endereço</h4>
                  <p className="text-gray-600">Rua das Flores, 123<br />Vila Madalena - São Paulo/SP</p>
                  <p className="text-sm text-gray-500">Estacionamento próprio disponível</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-petrol-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-petrol-blue mb-1">Horário de Funcionamento</h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>Segunda a Sexta: 7h às 19h</p>
                    <p>Sábado: 8h às 14h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-petrol-blue mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-lime-green rounded-lg flex items-center justify-center text-white hover:bg-lime-green/80 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-lime-green rounded-lg flex items-center justify-center text-white hover:bg-lime-green/80 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-light-gray rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-petrol-blue mb-6 font-montserrat">
                Agende sua Avaliação Gratuita
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-petrol-blue mb-2">Mensagem Enviada!</h4>
                  <p className="text-gray-600">
                    Obrigado pelo interesse! Nossa equipe entrará em contato em breve para agendar sua avaliação.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-graphite mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-graphite mb-2">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-graphite mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-graphite mb-2">
                      Qual tipo de tratamento você precisa?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="dor-costas">Dor nas costas</option>
                      <option value="problemas-articulares">Problemas articulares</option>
                      <option value="pos-cirurgico">Pós-cirúrgico</option>
                      <option value="lesao-esportiva">Lesão esportiva</option>
                      <option value="reabilitacao">Reabilitação geral</option>
                      <option value="avaliacao">Apenas avaliação</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-graphite mb-2">
                      Descreva seu problema ou dúvida
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="form-input resize-vertical"
                      placeholder="Conte-nos mais sobre sua situação atual, sintomas ou objetivos..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Enviar Mensagem
                        </>
                      )}
                    </button>
                    
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Direto
                    </a>
                  </div>

                  <p className="text-xs text-gray-500">
                    * Campos obrigatórios. Seus dados estão seguros e não serão compartilhados com terceiros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <img
                  src="https://static.abacusaicdn.net/images/fa31b8b3-9960-4de4-a1c2-11807cf91e60.png"
                  alt="Vitta Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-petrol-blue">Vitta Fisio & Movimento</div>
                <div className="text-sm text-gray-600">Volte a se mover sem dor</div>
              </div>
            </div>
            <div className="text-sm text-gray-500 text-center">
              © 2024 Vitta Fisio & Movimento. Todos os direitos reservados.
              <br />
              CNPJ: 00.000.000/0001-00 | CREFITO: 00000-F
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

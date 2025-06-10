import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Instagram, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    eventDate: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('form-name', 'kennismakingsgesprek');
      formDataToSubmit.append('Naam', formData.name);
      formDataToSubmit.append('E-mail', formData.email);
      formDataToSubmit.append('Telefoon', formData.phone);
      formDataToSubmit.append('Type service', formData.serviceType);
      formDataToSubmit.append('Gewenste datum', formData.eventDate);
      formDataToSubmit.append('Budget indicatie', formData.budget);
      formDataToSubmit.append('Vertel over jouw project', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          eventDate: '',
          budget: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Laten we <span className="bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">kennismaken</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Klaar om jouw verhaal te laten vertellen? Plan een kennismakingsgesprek 
            en ontdek hoe we samen jouw visie tot leven kunnen brengen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-green-800 font-medium">
                  Bedankt voor je bericht! Ik neem binnen 24 uur contact met je op.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-800 font-medium">
                  Er is iets misgegaan. Probeer het opnieuw of neem direct contact op via e-mail.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" name="kennismakingsgesprek" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="kennismakingsgesprek" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Jouw naam"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="jouw@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Type service
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  >
                    <option value="">Kies een optie</option>
                    <option value="portrait">Portretfotografie</option>
                    <option value="wedding">Bruiloft</option>
                    <option value="business-video">Bedrijfsvideo</option>
                    <option value="events">Evenementen</option>
                    <option value="family">Gezinsfoto's</option>
                    <option value="graduation">Graduatie/Jubileum</option>
                    <option value="product">Productfotografie</option>
                    <option value="business">Zakelijke fotografie</option>
                    <option value="other">Anders</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Gewenste datum
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget indicatie
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  >
                    <option value="">Selecteer budget</option>
                    <option value="500-1000">€500 - €1.000</option>
                    <option value="1000-2500">€1.000 - €2.500</option>
                    <option value="2500-5000">€2.500 - €5.000</option>
                    <option value="5000+">€5.000+</option>
                    <option value="discuss">Bespreek ik graag</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Vertel over jouw project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
                  placeholder="Beschrijf jouw project, wensen en ideeën. Hoe meer details, hoe beter ik je kan helpen!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-amber-600 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Versturen...' : 'Plan een kennismakingsgesprek'}</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact informatie</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">E-mail</div>
                    <div className="text-gray-600">irynakushnir82@hotmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telefoon</div>
                    <div className="text-gray-600">+31 629351774</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Locatie</div>
                    <div className="text-gray-600">Limburg, Nederland</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Volg mijn werk</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/irynatranslate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-purple-50 to-amber-50 rounded-2xl p-6 border border-purple-100">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
                <h4 className="font-semibold text-gray-900">Beschikbaarheid</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Ik boek momenteel voor 2024 en 2025. Neem snel contact op 
                om jouw gewenste datum vast te leggen!
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Reactietijd: binnen 24 uur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
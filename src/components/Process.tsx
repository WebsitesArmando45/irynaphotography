import React from 'react';
import { MessageCircle, Calendar, Camera, Sparkles, Clock, Eye, CheckCircle, Heart } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Kennismaken',
      description: 'We beginnen met een persoonlijk gesprek om jouw wensen, visie en doelen te bespreken. Samen bepalen we wat het beste bij jouw project past.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      number: '02',
      icon: Calendar,
      title: 'Plannen',
      description: 'Samen stellen we een gedetailleerd plan op: datum, locatie, stijl en alle praktische zaken. Alles wordt tot in de puntjes voorbereid.',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      number: '03',
      icon: Camera,
      title: 'Shooten',
      description: 'Op de dag zelf zorg ik voor een professionele en ontspannen sfeer. Of het nu foto of video is - ik leg alles vast zoals jij het voor ogen hebt.',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      number: '04',
      icon: Sparkles,
      title: 'Opleveren',
      description: 'Binnen afgesproken tijd ontvang je het eindresultaat: professioneel bewerkte foto\'s en/of video\'s die jouw verhaal perfect vertellen.',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const stats = [
    {
      icon: Clock,
      value: '24h',
      label: 'Reactietijd',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Eye,
      value: '48h',
      label: 'Sneak peek',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: CheckCircle,
      value: '2-3w',
      label: 'Eindresultaat',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: Heart,
      value: '100%',
      label: 'Tevredenheid',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hoe we <span className="bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">samenwerken</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kennismaken, plannen, shooten, opleveren, simpel, helder, professioneel. 
            Van eerste contact tot eindresultaat begeleid ik je door het hele proces.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 transform translate-x-4 -translate-y-1/2 z-0" />
                )}
                
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-gray-100 absolute top-4 right-6 select-none">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors relative z-10">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-purple-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-purple-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
import React from 'react';
import { Camera, Video, Users, Building, Heart, GraduationCap, Package, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'Portretfotografie',
      description: 'Professionele portretten die jouw persoonlijkheid perfect vastleggen',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Bruiloften',
      description: 'Jullie mooiste dag vastgelegd in tijdloze foto\'s en video\'s',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: Video,
      title: 'Bedrijfsvideo\'s',
      description: 'Krachtige video content die jouw bedrijf laat stralen',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Evenementen',
      description: 'Van intieme bijeenkomsten tot grote events - alles wordt vastgelegd',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Gezinsfoto\'s',
      description: 'Warme familiemomenten die generaties lang gekoesterd worden',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: GraduationCap,
      title: 'Graduatie & Jubileum',
      description: 'Mijlpalen en achievements die voor altijd herinnerd worden',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Package,
      title: 'Productfotografie',
      description: 'Jouw producten in het beste licht voor maximale impact',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Zakelijke fotografie',
      description: 'Professionele bedrijfsfotografie voor alle zakelijke doeleinden',
      gradient: 'from-slate-500 to-gray-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Wat Iryna <span className="bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">doet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van intiem tot groots Iryna legt het vast zoals het voelt. 
            Professionele foto en videodiensten voor elke gelegenheid.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { Award, Heart, Camera, Users, Star, MapPin } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: '5+ Jaar Ervaring',
      description: 'Professionele fotografie en videografie',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: '500+ Tevreden Klanten',
      description: 'Van particulieren tot bedrijven',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Star,
      title: '100% Tevredenheid',
      description: 'Kwaliteit staat altijd voorop',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Passie voor Perfectie',
      description: 'Elk project krijgt volledige aandacht',
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
                alt="Iryna Photography"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Iryna Kushnir</div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Limburg, Nederland
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Over <span className="bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">Iryna</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Hallo! Ik ben Iryna, een gepassioneerde fotograaf en videograaf uit Limburg. 
                Met meer dan 5 jaar ervaring help ik mensen en bedrijven hun verhalen te vertellen 
                door middel van krachtige beelden.
              </p>
              
              <p>
                Wat mij drijft is de magie van het moment - die ene perfecte seconde waarin 
                emotie, licht en compositie samenkomen tot iets bijzonders. Of het nu gaat om 
                een intiem portret, een bruidsreportage of een bedrijfsvideo, ik geloof dat 
                elk verhaal uniek is en een unieke benadering verdient.
              </p>
              
              <p>
                Mijn werkwijze is persoonlijk en professioneel. Ik neem de tijd om jou en 
                jouw visie te begrijpen, zodat het eindresultaat niet alleen technisch perfect 
                is, maar ook echt jouw verhaal vertelt.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${achievement.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          {achievement.title}
                        </div>
                        <div className="text-xs text-gray-600">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
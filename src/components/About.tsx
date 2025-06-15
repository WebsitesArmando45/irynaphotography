import { MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Over <span className="bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">Iryna</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Hallo! Ik ben Iryna, een gepassioneerde fotograaf en videograaf uit Limburg. 
                Met meer dan 5 jaar ervaring help ik mensen en bedrijven hun verhalen te vertellen 
                door middel van krachtige beelden.
              </p>
              
              <p>
                Wat mij drijft is de magie van het moment - die ene perfecte seconde waarin 
                emotie, licht en compositie samenkomen tot iets bijzonders. Of het nu gaat om 
                een intiem portret, een bruidsreportage of een bedrijfsvideo, ik leg altijd 
                de essentie vast van wat jouw verhaal uniek maakt.
              </p>
              
              <p>
                Mijn aanpak is persoonlijk en professioneel. Ik neem de tijd om je te leren 
                kennen, zodat ik precies kan vastleggen wat jij voor ogen hebt. Het resultaat? 
                Beelden die niet alleen mooi zijn, maar ook echt iets betekenen.
              </p>
            </div>

            {/* Location & Availability */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Gevestigd in Limburg</div>
                  <div className="text-gray-600">Werkzaam door heel Nederland</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Nu boeken voor 2024 & 2025</div>
                  <div className="text-gray-600">Beperkte beschikbaarheid</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/Scherm_afbeelding 2025-06-09 om 15.22.05.png"
                  alt="Iryna - Professional Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Foto&apos;s</div>
                  <div className="text-sm text-gray-600">met passie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
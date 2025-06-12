import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      category: 'portrait',
      image: 'public/assets/Scherm_afbeelding 2025-06-09 om 15.22.05.png',
      title: 'Professioneel Portret',
      description: 'Foto van iryna'
    },
    {
      id: 2,
      category: 'business',
      image: 'public/assets/Scherm_afbeelding 2025-06-09 om 15.19.45.png',
      title: 'Foto van tempel',
      description: 'Levensmoment'
    },
    {
      id: 3,
      category: 'events',
      image: 'public/assets/Scherm_afbeelding 2025-06-09 om 15.20.18.png',
      title: 'Foto op evenement',
      description: 'Levensmoment'
    },
    {
      id: 4,
      category: 'portrait',
      image: 'public/assets/Scherm_afbeelding 2025-06-09 om 15.20.49.png',
      title: 'Portret van klassiek gebouw',
      description: 'Geschiedenis'
    },
    {
      id: 5,
      category: 'events',
      image: 'public/assets/Scherm_afbeelding 2025-06-09 om 15.21.37.png',
      title: 'Casual lunch foto',
      description: 'Levensmoment'
    },
    {
      id: 6,
      category: 'portrait',
      image: 'public/assets/7D2AE995-FE1D-475B-A96A-2DB75C3AD620 (1).JPG',
      title: 'Foto van zee',
      description: 'Natuur foto'
    },
    {
      id: 7,
      category: 'family',
      image: 'public/assets/A578FC92-58EB-4BAD-8D97-39FA1148FB8C (1).JPG',
      title: 'Familie Moment',
      description: 'Zonsondergang'
    },
    {
      id: 8,
      category: 'events',
      image: 'public/assets/IMG_0612 (1).JPG',
      title: 'Speciale Gelegenheid',
      description: 'Portret van kind'
    },
    {
      id: 9,
      category: 'family',
      image: 'public/assets/IMG_9409 (1).JPG',
      title: 'Foto iryna',
      description: 'Spontane foto'
    },
    {
      id: 10,
      category: 'portrait',
      image: 'public/assets/IMG_5904 (1).heic',
      title: 'Natuurlijk Portret',
      description: 'Authentieke portretfotografie'
    },
    {
      id: 11,
      category: 'lifestyle',
      image: '/assets/Scherm_afbeelding 2025-06-10 om 17.41.34.png',
      title: 'Lifestyle Fotografie',
      description: 'Natuur foto'
    },
    {
      id: 12,
      category: 'portrait',
      image: '/assets/Scherm_afbeelding 2025-06-10 om 17.41.50.png',
      title: 'Liefde voor bloemen',
      description: 'Natuur foto'
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallback?: string) => {
    const target = e.target as HTMLImageElement;
    if (fallback) {
      target.src = fallback;
    } else {
      // Default fallback for professional photography
      target.src = 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mijn <span className="bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van intiem tot groots Iryna legt het vast zoals het voelt. 
            Bekijk een selectie van mijn werk en laat je inspireren.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => handleImageError(e, item.fallback)}
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  {item.description}
                </p>
                <button className="text-white/80 hover:text-white transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
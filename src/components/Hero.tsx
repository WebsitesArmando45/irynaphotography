import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/1093662/1093662-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video fails to load */}
          <img
            src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Ocean Sunset"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-amber-400 fill-current" />
            <span className="text-white font-medium">Professionele Foto & Video Services</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Jouw verhaal
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
              perfect vastgelegd
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Van intiem tot groots - Iryna legt het vast zoals het voelt. 
            Professionele foto en videodiensten voor elke gelegenheid.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-purple-600 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-amber-600 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Plan een kennismakingsgesprek</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#portfolio"
              className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-3 border border-white/20"
            >
              <Play className="w-5 h-5" />
              <span>Bekijk mijn werk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
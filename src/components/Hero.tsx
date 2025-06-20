
import { Button } from '@/components/ui/button';
import PriceCalculator from './PriceCalculator';
import { Flame, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-500 via-red-500 to-red-600 py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in text-white">
            {/* Fioul Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 hover:bg-white/30 transition-colors cursor-pointer">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <Flame size={14} className="text-white" />
              </div>
              <span className="text-sm font-medium">Fioul Domestique</span>
              <ChevronRight size={16} />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                Fioul domestique de qualité
              </span>
              <span className="block text-white mt-2">
                Livraison partout en France
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Commandez en ligne votre fioul Standard ou Premium avec livraison rapide et prix transparents
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Livraison gratuite dès 2000L</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Prix transparents</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">Qualité certifiée</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-xl"
              >
                Obtenir un devis détaillé
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg"
              >
                Contacter un conseiller
              </Button>
            </div>
          </div>

          {/* Right Content - Price Calculator */}
          <div className="animate-fade-in">
            <PriceCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

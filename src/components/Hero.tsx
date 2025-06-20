
import { Button } from '@/components/ui/button';
import PriceCalculator from './PriceCalculator';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Commandez votre fioul en ligne
              <span className="text-total-blue block">Livraison rapide en France</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Prix transparents, qualité garantie, livraison fiable
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-total-red hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              >
                Calculer mon prix
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-total-blue text-total-blue hover:bg-total-blue hover:text-white px-8 py-4 text-lg"
              >
                En savoir plus
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success-green rounded-full"></div>
                <span className="text-gray-600">Livraison gratuite dès 2000L</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success-green rounded-full"></div>
                <span className="text-gray-600">Prix transparents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success-green rounded-full"></div>
                <span className="text-gray-600">Qualité certifiée</span>
              </div>
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

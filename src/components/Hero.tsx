
import { Button } from '@/components/ui/button';
import HorizontalPriceCalculator from './HorizontalPriceCalculator';
import { Flame, ChevronRight, Shield, Truck, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Modern geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-red-100/20 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Modern Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/50 rounded-full px-6 py-3 mb-8 hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-sm">
              <Flame size={16} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700">Fioul Domestique Premium</span>
            <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Modern Headlines */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Fioul de qualité
            </span>
            <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mt-2">
              livré chez vous
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            Commandez votre fioul Standard ou Premium en ligne avec des prix transparents 
            et une livraison rapide partout en France
          </p>

          {/* Modern Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Truck size={20} className="text-green-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">Livraison gratuite</div>
                <div className="text-xs text-gray-500">dès 2000L</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Shield size={20} className="text-blue-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">Prix transparents</div>
                <div className="text-xs text-gray-500">sans surprise</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <Star size={20} className="text-amber-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">Qualité certifiée</div>
                <div className="text-xs text-gray-500">garantie</div>
              </div>
            </div>
          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all rounded-xl group"
            >
              Obtenir un devis détaillé
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-4 text-lg rounded-xl font-semibold transition-all"
            >
              Contacter un conseiller
            </Button>
          </div>
        </div>

        {/* Horizontal Price Calculator with modern styling */}
        <div className="animate-fade-in max-w-6xl mx-auto">
          <HorizontalPriceCalculator />
        </div>
      </div>
    </section>
  );
};

export default Hero;

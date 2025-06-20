
import { Calculator, ShoppingCart, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Calculator,
      title: "Calculez",
      description: "Utilisez notre calculateur pour estimer votre commande",
      step: "1"
    },
    {
      icon: ShoppingCart,
      title: "Commandez",
      description: "Finalisez votre achat en ligne en toute sécurité",
      step: "2"
    },
    {
      icon: Truck,
      title: "Recevez",
      description: "Livraison rapide directement chez vous",
      step: "3"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-bl from-red-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-red-600/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl opacity-90">
            Commander votre fioul en 3 étapes simples
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="mx-auto mb-6 w-20 h-20 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-500/20">
                  <IconComponent size={40} />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-lg opacity-90">
                  {step.description}
                </p>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-red-400 bg-opacity-50"></div>
                    <div className="absolute -right-1 -top-1 w-0 h-0 border-l-4 border-l-red-400 border-l-opacity-50 border-y-2 border-y-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

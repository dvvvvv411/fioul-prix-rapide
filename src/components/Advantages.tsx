
import { Check, Truck, Shield, Award, Phone, CreditCard } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Truck,
      title: "Livraison gratuite dès 2000L",
      description: "Économisez sur les frais de transport"
    },
    {
      icon: Check,
      title: "Prix transparents sans surprise",
      description: "Pas de frais cachés, tout est affiché"
    },
    {
      icon: Award,
      title: "Livraison rapide partout en France",
      description: "Service national de qualité"
    },
    {
      icon: Phone,
      title: "Service client réactif",
      description: "Support disponible et professionnel"
    },
    {
      icon: CreditCard,
      title: "Paiement sécurisé",
      description: "Transactions protégées et fiables"
    },
    {
      icon: Shield,
      title: "Qualité certifiée",
      description: "Fioul conforme aux normes françaises"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50/40 via-white to-blue-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-gradient-to-br from-orange-200/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Garanties
          </h2>
          <p className="text-xl text-gray-600">
            Votre satisfaction est notre priorité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-transform duration-200">
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-total-blue group-hover:text-white transition-colors">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

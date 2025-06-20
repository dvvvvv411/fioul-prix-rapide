
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Lyon",
      text: "Livraison ponctuelle et service impeccable. Je recommande vivement Total Fioul France !",
      rating: 5
    },
    {
      name: "Pierre Martin",
      location: "Marseille", 
      text: "Prix compétitifs et fioul de qualité. La commande en ligne est très simple.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      location: "Toulouse",
      text: "Commande simple et livraison rapide. Service client très réactif en cas de question.",
      rating: 5
    },
    {
      name: "Jean-Michel Bernard",
      location: "Nantes",
      text: "Excellent service ! Le calculateur de prix est très pratique et transparent.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50/50 via-gray-50/60 to-red-50/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-red-200/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-gray-100/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ils nous font confiance pour leur fioul
          </p>
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-white/40">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
            <span className="font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">sur 1,247 avis</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm border-white/40">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

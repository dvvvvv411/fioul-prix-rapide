
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Flame, Star, Zap } from 'lucide-react';

const ProductComparison = () => {
  const comparisonFeatures = [
    { feature: "Prix au litre", standard: "0,70€", premium: "0,73€", superieur: "0,76€" },
    { feature: "Conformité normes", standard: true, premium: true, superieur: true },
    { feature: "Additifs anticorrosion", standard: false, premium: true, superieur: true },
    { feature: "Additifs nettoyants", standard: false, premium: true, superieur: true },
    { feature: "Performance optimisée", standard: false, premium: true, superieur: true },
    { feature: "Durée de stockage prolongée", standard: false, premium: true, superieur: true },
    { feature: "Protection installation", standard: false, premium: true, superieur: true },
    { feature: "Combustion extra-propre", standard: false, premium: false, superieur: true },
    { feature: "Rendement énergétique maximal", standard: false, premium: false, superieur: true },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200/15 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comparaison Détaillée
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le fioul qui correspond parfaitement à vos besoins et à votre budget
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Standard Product */}
          <Card className="relative hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm border-white/40">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Flame className="text-total-blue" size={32} />
              </div>
              <CardTitle className="text-2xl text-gray-900">Fioul Standard</CardTitle>
              <div className="text-3xl font-bold text-total-blue mt-2">
                0,70€<span className="text-lg text-gray-600">/litre</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">Solution économique et fiable</p>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-total-blue hover:bg-blue-800 text-white mb-6">
                Choisir Standard
              </Button>
            </CardContent>
          </Card>

          {/* Premium Product */}
          <Card className="relative hover:shadow-lg transition-shadow border-total-red border-2 bg-white/90 backdrop-blur-sm">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-total-red text-white px-4 py-1">
                Recommandé
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-6 pt-8">
              <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <Star className="text-total-red" size={32} />
              </div>
              <CardTitle className="text-2xl text-gray-900">Fioul Premium</CardTitle>
              <div className="text-3xl font-bold text-total-red mt-2">
                0,73€<span className="text-lg text-gray-600">/litre</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">Enrichi avec additifs premium</p>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-total-red hover:bg-red-700 text-white mb-6">
                Choisir Premium
              </Button>
            </CardContent>
          </Card>

          {/* Superior Product */}
          <Card className="relative hover:shadow-lg transition-shadow border-amber-500 border-2 bg-white/90 backdrop-blur-sm">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-amber-500 text-white px-4 py-1">
                Haute Performance
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-6 pt-8">
              <div className="mx-auto mb-4 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <Zap className="text-amber-600" size={32} />
              </div>
              <CardTitle className="text-2xl text-gray-900">Fioul Supérieur</CardTitle>
              <div className="text-3xl font-bold text-amber-600 mt-2">
                0,76€<span className="text-lg text-gray-600">/litre</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">Performance maximale garantie</p>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mb-6">
                Choisir Supérieur
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Caractéristiques</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-total-blue">Standard</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-total-red">Premium</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-amber-600">Supérieur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50">
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof item.standard === 'boolean' ? (
                        item.standard ? (
                          <Check className="mx-auto text-success-green" size={20} />
                        ) : (
                          <X className="mx-auto text-gray-400" size={20} />
                        )
                      ) : (
                        <span className="font-semibold text-total-blue">{item.standard}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof item.premium === 'boolean' ? (
                        item.premium ? (
                          <Check className="mx-auto text-success-green" size={20} />
                        ) : (
                          <X className="mx-auto text-gray-400" size={20} />
                        )
                      ) : (
                        <span className="font-semibold text-total-red">{item.premium}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof item.superieur === 'boolean' ? (
                        item.superieur ? (
                          <Check className="mx-auto text-success-green" size={20} />
                        ) : (
                          <X className="mx-auto text-gray-400" size={20} />
                        )
                      ) : (
                        <span className="font-semibold text-amber-600">{item.superieur}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;

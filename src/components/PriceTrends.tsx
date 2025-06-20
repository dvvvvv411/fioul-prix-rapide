
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const PriceTrends = () => {
  const trends = [
    {
      period: "Prix actuel",
      value: "70-73 ct/L",
      change: null,
      description: "Fourchette de prix"
    },
    {
      period: "1 semaine",
      value: "+2,5 ct/L",
      change: "up",
      description: "Hausse modérée"
    },
    {
      period: "1 mois", 
      value: "+1,8 ct/L",
      change: "up",
      description: "Tendance haussière"
    },
    {
      period: "1 an",
      value: "+0,1 ct/L",
      change: "stable",
      description: "Quasi-stable"
    }
  ];

  const getTrendIcon = (change: string | null) => {
    switch(change) {
      case 'up':
        return <TrendingUp className="text-red-500" size={20} />;
      case 'down':
        return <TrendingDown className="text-green-600" size={20} />;
      case 'stable':
        return <Minus className="text-gray-500" size={20} />;
      default:
        return null;
    }
  };

  const getTrendColor = (change: string | null) => {
    switch(change) {
      case 'up':
        return 'text-red-600';
      case 'down':
        return 'text-green-600';
      case 'stable':
        return 'text-gray-600';
      default:
        return 'text-total-blue';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tendances des Prix du Fioul
          </h2>
          <p className="text-xl text-gray-600">
            Suivez l'évolution du marché en temps réel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {trends.map((trend, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-total-blue text-sm font-medium">
                  {trend.period}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {getTrendIcon(trend.change)}
                  <span className={`text-2xl font-bold ${getTrendColor(trend.change)}`}>
                    {trend.value}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {trend.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Analyse du marché
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Prix indicatifs pour une livraison de 3000L. Tarifs hors livraison, sous réserve de disponibilité.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                <span>• Dernière mise à jour : aujourd'hui</span>
                <span>• Source : Marché français du fioul domestique</span>
                <span>• Variation moyenne mensuelle : +1,2%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PriceTrends;


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PriceTrends = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tendances des Prix du Fioul
          </h2>
          <p className="text-xl text-gray-600">
            Suivez l'évolution du marché en temps réel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Current Price */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-total-blue">Prix Moyen Actuel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                70-73
              </div>
              <div className="text-lg text-gray-600">centimes/litre</div>
              <div className="text-sm text-gray-500 mt-2">
                Hors frais de livraison
              </div>
            </CardContent>
          </Card>

          {/* Weekly Trend */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-total-blue">Cette Semaine</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingDown className="text-success-green" size={24} />
                <span className="text-2xl font-bold text-success-green">-2,3%</span>
              </div>
              <div className="text-lg text-gray-600">En baisse</div>
              <div className="text-sm text-gray-500 mt-2">
                Tendance favorable
              </div>
            </CardContent>
          </Card>

          {/* Monthly Trend */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-total-blue">Ce Mois</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="text-total-red" size={24} />
                <span className="text-2xl font-bold text-total-red">+1,8%</span>
              </div>
              <div className="text-lg text-gray-600">En hausse</div>
              <div className="text-sm text-gray-500 mt-2">
                Variation modérée
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Prix indicatifs basés sur les tendances du marché français. 
            Dernière mise à jour : aujourd'hui
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceTrends;

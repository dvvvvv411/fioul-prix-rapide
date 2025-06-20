
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { heizölConfig } from '@/config/heizol';
import { Truck, Calculator, Gift } from 'lucide-react';

const PriceCalculator = () => {
  const [selectedProduct, setSelectedProduct] = useState('premium');
  const [quantity, setQuantity] = useState('2000');
  const [zipCode, setZipCode] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    calculatePrice();
  }, [selectedProduct, quantity]);

  const calculatePrice = () => {
    const liters = parseInt(quantity) || 0;
    
    if (liters < heizölConfig.limits.minLiters) {
      setTotalPrice(0);
      setDeliveryFee(0);
      setFinalPrice(0);
      return;
    }

    const productPrice = heizölConfig.products[selectedProduct as keyof typeof heizölConfig.products].pricePerLiter;
    const subtotal = liters * productPrice;
    
    const delivery = liters >= heizölConfig.delivery.freeDeliveryThreshold ? 0 : heizölConfig.delivery.deliveryFee;
    const total = subtotal + delivery;

    setTotalPrice(subtotal);
    setDeliveryFee(delivery);
    setFinalPrice(total);
  };

  const getDeliveryMessage = () => {
    const liters = parseInt(quantity) || 0;
    if (liters >= heizölConfig.delivery.freeDeliveryThreshold) {
      return "🎉 Livraison gratuite incluse !";
    } else if (liters >= 1800) {
      return `Plus que ${heizölConfig.delivery.freeDeliveryThreshold - liters}L pour la livraison gratuite`;
    } else {
      return "Frais de livraison : 39€";
    }
  };

  const handleCheckout = () => {
    if (parseInt(quantity) < heizölConfig.limits.minLiters) {
      alert(`Quantité minimum : ${heizölConfig.limits.minLiters}L`);
      return;
    }

    setIsCalculating(true);
    
    const params = new URLSearchParams({
      product: selectedProduct,
      quantity: quantity,
      zipCode: zipCode || '',
      shopId: heizölConfig.shopId
    });
    
    setTimeout(() => {
      window.open(`${heizölConfig.checkoutUrl}?${params.toString()}`, '_blank');
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm sticky top-4">
      <CardHeader className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-t-lg">
        <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
          <Calculator size={24} />
          Calculateur de Prix Fioul
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Product Selection */}
        <div className="mb-6">
          <Label className="text-base font-semibold mb-3 block">
            Choisissez votre fioul
          </Label>
          <RadioGroup value={selectedProduct} onValueChange={setSelectedProduct}>
            <div className="flex items-center space-x-2 p-4 border-2 rounded-lg hover:bg-gray-50 hover:border-orange-200 transition-colors">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard" className="flex-1 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium text-gray-900">Fioul Standard</div>
                    <div className="text-sm text-gray-500">Fioul de qualité pour usage quotidien</div>
                  </div>
                  <div className="text-xl font-bold text-red-600">
                    0,70€/L
                  </div>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-4 border-2 rounded-lg hover:bg-gray-50 hover:border-orange-200 transition-colors border-orange-300 bg-orange-50">
              <RadioGroupItem value="premium" id="premium" />
              <Label htmlFor="premium" className="flex-1 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium flex items-center gap-2 text-gray-900">
                      Fioul Premium
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Recommandé
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">Fioul haut de gamme avec additifs</div>
                  </div>
                  <div className="text-xl font-bold text-red-600">
                    0,73€/L
                  </div>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* ZIP Code */}
        <div className="mb-4">
          <Label htmlFor="zipCode" className="text-base font-semibold mb-2 block">
            Code postal
          </Label>
          <Input
            id="zipCode"
            type="text"
            placeholder="ex: 75001"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            pattern="[0-9]{5}"
            maxLength={5}
            className="text-lg"
          />
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <Label htmlFor="quantity" className="text-base font-semibold mb-2 block">
            Quantité en litres
          </Label>
          <Input
            id="quantity"
            type="number"
            placeholder="min. 1000L"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min={heizölConfig.limits.minLiters}
            max={heizölConfig.limits.maxLiters}
            step="100"
            className="text-lg"
          />
          <div className="text-sm text-gray-500 mt-1">
            Quantité minimum : {heizölConfig.limits.minLiters.toLocaleString()}L
          </div>
        </div>

        {/* Price Breakdown */}
        {parseInt(quantity) >= heizölConfig.limits.minLiters && (
          <div className="bg-gradient-to-r from-gray-50 to-orange-50 p-4 rounded-lg mb-6 border border-orange-100">
            <div className="flex justify-between items-center mb-3">
              <span className="font-medium">Prix du fioul</span>
              <span className="font-bold text-lg">{totalPrice.toFixed(2)}€</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="flex items-center gap-2 font-medium">
                <Truck size={16} />
                Livraison
              </span>
              <span className={`font-bold text-lg ${deliveryFee === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                {deliveryFee === 0 ? 'Gratuite !' : `${deliveryFee}€`}
              </span>
            </div>
            
            {parseInt(quantity) >= heizölConfig.delivery.freeDeliveryThreshold && (
              <div className="flex items-center gap-2 text-green-600 text-sm font-medium mb-3 bg-green-50 px-3 py-2 rounded-lg">
                <Gift size={16} />
                {getDeliveryMessage()}
              </div>
            )}
            
            <div className="border-t border-orange-200 pt-3 flex justify-between items-center text-xl font-bold">
              <span>Total TTC</span>
              <span className="text-red-600 text-2xl">{finalPrice.toFixed(2)}€</span>
            </div>
            
            {parseInt(quantity) < heizölConfig.delivery.freeDeliveryThreshold && (
              <div className="text-orange-600 text-sm font-medium mt-2">
                {getDeliveryMessage()}
              </div>
            )}
          </div>
        )}

        {/* CTA Button */}
        <Button 
          onClick={handleCheckout}
          disabled={parseInt(quantity) < heizölConfig.limits.minLiters || isCalculating}
          className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-4 text-lg shadow-xl disabled:opacity-50"
          size="lg"
        >
          {isCalculating ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Préparation...
            </div>
          ) : (
            `Commander maintenant - ${finalPrice.toFixed(2)}€`
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center mt-3">
          Prix indicatifs TTC • Commande minimum : {heizölConfig.limits.minLiters.toLocaleString()}L
        </p>
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;

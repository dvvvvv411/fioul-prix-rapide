
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { heizölConfig } from '@/config/heizol';
import { Truck } from 'lucide-react';

const PriceCalculator = () => {
  const [selectedProduct, setSelectedProduct] = useState('standard');
  const [quantity, setQuantity] = useState([2000]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    const liters = quantity[0];
    const productPrice = heizölConfig.products[selectedProduct as keyof typeof heizölConfig.products].pricePerLiter;
    const subtotal = liters * productPrice;
    
    const delivery = liters >= heizölConfig.delivery.freeDeliveryThreshold ? 0 : heizölConfig.delivery.deliveryFee;
    const total = subtotal + delivery;

    setTotalPrice(subtotal);
    setDeliveryFee(delivery);
    setFinalPrice(total);
  }, [selectedProduct, quantity]);

  const handleCheckout = () => {
    const params = new URLSearchParams({
      product: selectedProduct,
      quantity: quantity[0].toString(),
      shopId: heizölConfig.shopId
    });
    
    window.open(`${heizölConfig.checkoutUrl}?${params.toString()}`, '_blank');
  };

  return (
    <Card className="shadow-2xl border-0 bg-white">
      <CardHeader className="bg-total-blue text-white rounded-t-lg">
        <CardTitle className="text-2xl text-center">
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
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard" className="flex-1 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Fioul Standard</div>
                    <div className="text-sm text-gray-500">Qualité quotidienne</div>
                  </div>
                  <div className="text-lg font-bold text-total-blue">
                    0,70€/L
                  </div>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 relative">
              <RadioGroupItem value="premium" id="premium" />
              <Label htmlFor="premium" className="flex-1 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      Fioul Premium
                      <span className="bg-total-red text-white text-xs px-2 py-1 rounded">
                        Recommandé
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">Haut de gamme + additifs</div>
                  </div>
                  <div className="text-lg font-bold text-total-blue">
                    0,73€/L
                  </div>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Quantity Selection */}
        <div className="mb-6">
          <Label className="text-base font-semibold mb-3 block">
            Quantité : {quantity[0].toLocaleString()} L
          </Label>
          <Slider
            value={quantity}
            onValueChange={setQuantity}
            max={heizölConfig.limits.maxLiters}
            min={heizölConfig.limits.minLiters}
            step={100}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>1 000L</span>
            <span>20 000L</span>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-2">
            <span>Prix du fioul</span>
            <span className="font-medium">{totalPrice.toFixed(2)}€</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="flex items-center gap-1">
              <Truck size={16} />
              Livraison
            </span>
            <span className={`font-medium ${deliveryFee === 0 ? 'text-success-green' : ''}`}>
              {deliveryFee === 0 ? 'Gratuite !' : `${deliveryFee}€`}
            </span>
          </div>
          {quantity[0] >= heizölConfig.delivery.freeDeliveryThreshold && (
            <div className="text-success-green text-sm font-medium mb-2">
              ✓ Livraison gratuite appliquée
            </div>
          )}
          <div className="border-t pt-2 flex justify-between items-center text-lg font-bold">
            <span>Total TTC</span>
            <span className="text-total-blue">{finalPrice.toFixed(2)}€</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={handleCheckout}
          className="w-full bg-total-red hover:bg-red-700 text-white font-bold py-3 text-lg"
          size="lg"
        >
          Commander maintenant
        </Button>

        <p className="text-xs text-gray-500 text-center mt-3">
          Prix indicatifs TTC. Commande minimum : 1000L
        </p>
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;

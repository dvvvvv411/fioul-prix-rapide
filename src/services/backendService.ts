
import { heizölConfig } from '@/config/heizol';

export interface CheckoutData {
  product: string;
  quantity: string;
  zipCode: string;
  shopId: string;
  totalPrice: number;
  deliveryFee: number;
}

export interface BackendResponse {
  success: boolean;
  checkoutUrl?: string;
  error?: string;
}

export const backendService = {
  async createCheckout(data: CheckoutData): Promise<BackendResponse> {
    try {
      console.log('Creating checkout with data:', data);
      
      const response = await fetch(`${heizölConfig.backendUrl}/create-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }

      const result = await response.json();
      console.log('Backend response:', result);
      
      return {
        success: true,
        checkoutUrl: result.checkoutUrl || `${heizölConfig.checkoutUrl}?${new URLSearchParams({
          product: data.product,
          quantity: data.quantity,
          zipCode: data.zipCode,
          shopId: data.shopId,
          totalPrice: data.totalPrice.toString(),
          deliveryFee: data.deliveryFee.toString()
        }).toString()}`
      };
    } catch (error) {
      console.error('Backend service error:', error);
      
      // Fallback to direct checkout URL
      const params = new URLSearchParams({
        product: data.product,
        quantity: data.quantity,
        zipCode: data.zipCode,
        shopId: data.shopId,
        totalPrice: data.totalPrice.toString(),
        deliveryFee: data.deliveryFee.toString()
      });
      
      return {
        success: true,
        checkoutUrl: `${heizölConfig.checkoutUrl}?${params.toString()}`
      };
    }
  }
};

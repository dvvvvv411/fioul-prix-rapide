
import { heizölConfig } from '@/config/heizol';

export interface CheckoutData {
  product: string;
  quantity: string;
  zipCode: string;
  shopId: string;
  totalPrice: number;
  deliveryFee: number;
}

export interface TokenResponse {
  success: boolean;
  token?: string;
  error?: string;
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
      
      // First, try to get a token from the backend
      const tokenResponse = await fetch(`${heizölConfig.backendUrl}/create-order-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (tokenResponse.ok) {
        const tokenResult: TokenResponse = await tokenResponse.json();
        console.log('Token response:', tokenResult);
        
        if (tokenResult.success && tokenResult.token) {
          const checkoutUrl = `${heizölConfig.checkoutUrl}?token=${tokenResult.token}`;
          console.log('Using token-based checkout URL:', checkoutUrl);
          
          return {
            success: true,
            checkoutUrl: checkoutUrl
          };
        } else {
          console.warn('Token creation failed:', tokenResult.error);
          throw new Error(tokenResult.error || 'Failed to create order token');
        }
      } else {
        console.warn('Token endpoint failed with status:', tokenResponse.status);
        throw new Error(`Token creation failed: ${tokenResponse.status}`);
      }
    } catch (error) {
      console.error('Backend service error:', error);
      
      // Enhanced fallback with better error handling
      console.log('Falling back to direct parameter checkout');
      const params = new URLSearchParams({
        product: data.product,
        quantity: data.quantity,
        zipCode: data.zipCode,
        shopId: data.shopId,
        totalPrice: data.totalPrice.toString(),
        deliveryFee: data.deliveryFee.toString()
      });
      
      const fallbackUrl = `${heizölConfig.checkoutUrl}?${params.toString()}`;
      console.log('Fallback checkout URL:', fallbackUrl);
      
      return {
        success: true,
        checkoutUrl: fallbackUrl,
        error: `Using fallback checkout (${error instanceof Error ? error.message : 'Unknown error'})`
      };
    }
  }
};

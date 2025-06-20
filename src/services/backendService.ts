
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
      
      const tokenResponse = await fetch(`${heizölConfig.backendUrl}/create-order-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!tokenResponse.ok) {
        throw new Error(`Token creation failed: ${tokenResponse.status} ${tokenResponse.statusText}`);
      }

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
        throw new Error(tokenResult.error || 'Failed to create order token');
      }
    } catch (error) {
      console.error('Backend service error:', error);
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
};

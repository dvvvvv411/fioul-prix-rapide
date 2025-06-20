
import { heizölConfig } from '@/config/heizol';

export interface CheckoutData {
  product: string;
  quantity: string;
  zipCode: string;
  shopId: string;
  totalPrice: number;
  deliveryFee: number;
}

export interface BackendCheckoutData {
  product: string;
  liters: number;
  shop_id: string;
  total_amount: number;
  delivery_fee: number;
  price_per_liter: number;
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
      
      // Transform data to match backend expectations
      const liters = parseInt(data.quantity);
      
      // Validate to prevent division by zero or invalid calculations
      if (liters <= 0) {
        throw new Error('Invalid quantity: must be greater than 0');
      }
      
      // Calculate price per liter from product cost only (excluding delivery)
      const pricePerLiter = data.totalPrice / liters;
      
      // Total amount should include delivery fee
      const totalAmount = data.totalPrice + data.deliveryFee;
      
      const backendData: BackendCheckoutData = {
        product: data.product,
        liters: liters,
        shop_id: data.shopId,
        total_amount: totalAmount, // Fixed: now includes delivery fee
        delivery_fee: data.deliveryFee,
        price_per_liter: parseFloat(pricePerLiter.toFixed(4)) // Fixed: calculated from product cost only
      };
      
      console.log('Transformed data for backend:', backendData);
      
      const tokenResponse = await fetch(`${heizölConfig.backendUrl}/create-order-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(backendData),
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

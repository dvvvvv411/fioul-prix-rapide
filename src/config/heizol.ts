
export const heizölConfig = {
  shopId: "acefaf14-6b4c-41bd-b172-133b27b9983f",
  backendUrl: "https://luhhnsvwtnmxztcmdxyq.supabase.co/functions/v1",
  checkoutUrl: "https://checkout.total-fioul.fr/checkout",
  products: {
    standard: {
      name: "standard_heizoel",
      displayName: "Fioul Standard",
      pricePerLiter: 0.70,
    },
    premium: {
      name: "premium_heizoel", 
      displayName: "Fioul Premium",
      pricePerLiter: 0.73,
    }
  },
  delivery: {
    freeDeliveryThreshold: 3000,
    deliveryFee: 39
  },
  limits: {
    minLiters: 1000,
    maxLiters: 20000
  }
};

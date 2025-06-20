
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PriceTrends from '@/components/PriceTrends';
import ProductsSection from '@/components/ProductsSection';
import Benefits from '@/components/Benefits';
import Advantages from '@/components/Advantages';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PriceTrends />
      <ProductsSection />
      <Benefits />
      <Advantages />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;

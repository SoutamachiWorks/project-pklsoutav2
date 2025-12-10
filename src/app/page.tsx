import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NewsSection from '@/components/NewsSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import GallerySection from '@/components/GallerySection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <NewsSection />
      <ServicesSection />
      <StatsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}

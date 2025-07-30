import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Business from '@/components/sections/Business';
import BrandStrip from '@/components/sections/BrandStrip';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <BrandStrip />
      <Business />
      <Contact />
    </main>
  );
}
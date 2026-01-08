import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import FeaturesBar from "@/components/FeaturesBar";
import ApartmentGrid from "@/components/ApartmentGrid";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <IntroSection />
      <FeaturesBar />
      <ApartmentGrid />
      <LocationSection />
      <Footer />
    </main>
  );
}

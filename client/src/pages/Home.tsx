import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProgramsShowcase from "@/components/ProgramsShowcase";
import FeatureGrid from "@/components/FeatureGrid";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  const [location] = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageTransition location={location}>
        <main className="flex-1">
          <Hero />
          <ProgramsShowcase />
          <FeatureGrid />
          <LocationMap />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}

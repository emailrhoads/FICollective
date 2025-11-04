import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ZoomLink from "@/components/ZoomLink";
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
        
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                <pre className="text-lg md:text-xl font-bold text-foreground text-center leading-tight">
{`┌───────────────────────┐
│  WHAT IS FI?          │
└───────────────────────┘`}
                </pre>
                <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
                  Financial Independence (FI) is about building wealth strategically to gain freedom from mandatory work. 
                  It's not about being rich or retiring early (though you can) - it's about having choices. 
                  The freedom to pursue passion projects, spend time with family, or work on your own terms.
                </p>
                <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
                  At FI Collective, we've created a space where entrepreneurs, investors, side-hustlers, and FI pursuers 
                  can work alongside people who understand the journey. No more explaining your 50% savings rate or 
                  passive income goals to confused coworkers - here, everyone gets it.
                </p>
                <div className="flex justify-center pt-4">
                  <ZoomLink href="/join">
                    <Button className="font-mono" data-testid="button-cta-whatisfi">
                      [ START YOUR FI JOURNEY ]
                    </Button>
                  </ZoomLink>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <FeatureGrid />
        <LocationMap />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}

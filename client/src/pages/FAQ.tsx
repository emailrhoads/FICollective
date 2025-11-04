import Navigation from "@/components/Navigation";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ZoomLink from "@/components/ZoomLink";
import { useLocation } from "wouter";
import PageTransition from "@/components/PageTransition";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const [location] = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageTransition location={location}>
        <main className="flex-1">
          <div className="py-20 px-8 text-center bg-gradient-to-b from-muted/30 to-transparent border-b-2 border-border relative">
            {/* Decorative elements */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-primary/20 text-4xl">✿</div>
            
            <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-primary/30 rounded-sm mb-6 bg-card">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <div className="font-mono text-xs tracking-wider text-primary uppercase mb-4">
              INTERROGATA FREQUENTER
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground mb-6 italic">
              Questions & Answers
            </h1>
            <p className="font-display text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto italic">
              Discover our community, programs, and membership collection through commonly posed inquiries
            </p>
          </div>

          <FAQSection />

          <div className="py-24 px-8 bg-muted/30 border-t-2 border-border">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="text-primary/30 text-3xl mb-4">❖</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground italic">
                Further Inquiries?
              </h2>
              <p className="font-display text-lg text-muted-foreground italic">
                We remain at your service. Contact us and expect response within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button className="rounded-sm uppercase text-xs tracking-wide border-2" size="lg" data-testid="button-contact" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Contact Curator
                </Button>
                <ZoomLink href="/join">
                  <Button variant="outline" className="rounded-sm uppercase text-xs tracking-wide border-2" size="lg" data-testid="button-faq-join" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    View Collection
                  </Button>
                </ZoomLink>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}

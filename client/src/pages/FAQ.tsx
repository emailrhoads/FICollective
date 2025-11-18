import Navigation from "@/components/Navigation";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import PageTransition from "@/components/PageTransition";

export default function FAQ() {
  const [location] = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageTransition location={location}>
        <main className="flex-1">
          <div className="py-20 px-8 text-center bg-gradient-to-b from-muted/30 to-transparent border-b-2 border-border relative">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground mb-6">
              Questions & Answers
            </h1>
            <p className="font-display text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our community, programs, and membership collection through commonly posed inquiries
            </p>
          </div>

          <FAQSection />

          <div className="py-24 px-8 bg-muted/30 border-t-2 border-border">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="text-primary/30 text-3xl mb-4 font-serif">✺</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foregrounds">
                More Questions?
              </h2>
              <p className="font-display text-lg text-muted-foreground">
                We're here to help you understand if our community is the right place for your financial growth. Reach out—we respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button className="rounded-sm uppercase text-xs tracking-wide border-2" size="lg" data-testid="button-contact" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}

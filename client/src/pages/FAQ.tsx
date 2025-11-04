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
          <div className="py-20 px-6 text-center bg-gradient-to-b from-muted/30 to-transparent">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground mb-6">
              Questions & Answers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Learn everything about joining our community.
            </p>
          </div>

          <FAQSection />

          <div className="py-24 px-6 bg-muted/30">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                Still have questions?
              </h2>
              <p className="text-lg text-muted-foreground">
                We're here to help! Reach out and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button className="rounded-full" size="lg" data-testid="button-contact">
                  Contact Us
                </Button>
                <ZoomLink href="/join">
                  <Button variant="outline" className="rounded-full" size="lg" data-testid="button-faq-join">
                    Join Now
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

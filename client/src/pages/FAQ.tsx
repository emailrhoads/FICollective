import Navigation from "@/components/Navigation";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ZoomLink from "@/components/ZoomLink";
import { useLocation } from "wouter";
import PageTransition from "@/components/PageTransition";

export default function FAQ() {
  const [location] = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageTransition location={location}>
        <main className="flex-1">
        <div className="py-12 px-4 text-center">
          <pre className="text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight mx-auto">
{`███████╗ █████╗  ██████╗ 
██╔════╝██╔══██╗██╔═══██╗
█████╗  ███████║██║   ██║
██╔══╝  ██╔══██║██║▄▄ ██║
██║     ██║  ██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚══▀▀═╝`}
          </pre>
          <p className="font-mono text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Learn everything about FI Collective.
          </p>
        </div>

        <FAQSection />

        <div className="py-16 px-4 bg-muted/30">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <pre className="text-lg md:text-xl font-bold text-foreground leading-tight">
{`┌────────────────────────────┐
│  STILL HAVE QUESTIONS?     │
└────────────────────────────┘`}
            </pre>
            <p className="font-mono text-sm text-muted-foreground">
              We're here to help! Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="font-mono" data-testid="button-contact">
                [ CONTACT US ]
              </Button>
              <ZoomLink href="/join">
                <Button variant="outline" className="font-mono" data-testid="button-faq-join">
                  [ JOIN NOW ]
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

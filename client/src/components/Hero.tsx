import { Button } from "@/components/ui/button";
import ZoomLink from "./ZoomLink";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-16 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 mb-8 rounded-full">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            FI Collective
          </span>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">
            Longmont, CO
          </span>
        </div>

        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight tracking-tight">
          Financial Independence<br />
          Meets Community & Fun
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Co-working space. Weekly potlucks. FI classes. Music jams. Dance parties. 
          And a whole lot of cool humans crushing early retirement together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <ZoomLink href="/join">
            <Button
              size="lg"
              className="text-base px-8 rounded-lg"
              data-testid="button-hero-join"
            >
              Check Out Membership
            </Button>
          </ZoomLink>
          <ZoomLink href="/about">
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 rounded-lg"
              data-testid="button-hero-learn"
            >
              Learn More
            </Button>
          </ZoomLink>
        </div>

        <div className="text-sm text-muted-foreground pt-4 inline-flex items-center gap-2">
          <span className="font-semibold text-foreground">150+ members</span>
          <span>•</span>
          <span>712 Main St</span>
        </div>
      </div>
    </section>
  );
}

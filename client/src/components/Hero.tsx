import { Button } from "@/components/ui/button";
import ZoomLink from "./ZoomLink";
import heroImage from "@assets/generated_images/Vintage_illustrated_workspace_3c5322fa.png";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b-2 border-border">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Decorative corner elements - garden motifs */}
      <div className="absolute top-8 left-8 text-primary/20 text-6xl font-serif">❦</div>
      <div className="absolute top-8 right-8 text-primary/20 text-6xl font-serif">❦</div>
      <div className="absolute bottom-8 left-8 text-primary/20 text-6xl font-serif">✺</div>
      <div className="absolute bottom-8 right-8 text-primary/20 text-6xl font-serif">✺</div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 py-24 text-center">
        <div className="inline-block border-2 border-primary/30 px-4 py-2 mb-8 rounded-sm bg-card/80 backdrop-blur-sm">
          <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            Community Archive • Est. 2024 • Longmont Collection
          </span>
        </div>

        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight italic">
          Cultivate Your<br />
          Financial Garden
        </h1>

        <p className="font-display text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-loose italic">
          Plant seeds of intentional planning. Tend your investments with care.<br className="hidden md:block" />
          Harvest what you've grown. Partake in the fruits of our labor<br className="hidden md:block" />
          amongst friends at 712 Main St in Longmont, Colorado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <ZoomLink href="/join">
            <Button size="lg" className="rounded-sm text-sm uppercase tracking-wide px-8 border-2" data-testid="button-hero-join" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Join Our Garden
            </Button>
          </ZoomLink>
          <ZoomLink href="/faq">
            <Button variant="outline" size="lg" className="rounded-sm text-sm uppercase tracking-wide px-8 bg-card/50 backdrop-blur-sm border-2" data-testid="button-hero-learn" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Explore Community
            </Button>
          </ZoomLink>
        </div>

        <div className="font-display text-sm text-muted-foreground italic border-t-2 border-border pt-4 inline-block">
          Thriving Garden: 150+ Members Growing Together
        </div>
      </div>
    </section>
  );
}

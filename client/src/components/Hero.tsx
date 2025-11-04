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

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 text-primary/30 text-6xl">✿</div>
      <div className="absolute top-8 right-8 text-primary/30 text-6xl">✿</div>
      <div className="absolute bottom-8 left-8 text-primary/30 text-6xl">❖</div>
      <div className="absolute bottom-8 right-8 text-primary/30 text-6xl">❖</div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 py-24 text-center">
        <div className="inline-block border-2 border-primary/30 px-4 py-2 mb-8 rounded-sm bg-card/80 backdrop-blur-sm">
          <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            Community Archive • Est. 2024 • Longmont Collection
          </span>
        </div>

        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight italic">
          Financial Independence<br />
          <span className="not-italic">Through</span> Community
        </h1>

        <p className="font-display text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-loose italic">
          A living archive of collaboration—weekly gatherings, expert dialogues,<br className="hidden md:block" />
          artisanal skill-building, and collective impact at our headquarters<br className="hidden md:block" />
          on Main Street in Longmont, Colorado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <ZoomLink href="/join">
            <Button size="lg" className="rounded-sm text-sm uppercase tracking-wide px-8 border-2" data-testid="button-hero-join" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Join Our Collection
            </Button>
          </ZoomLink>
          <ZoomLink href="/faq">
            <Button variant="outline" size="lg" className="rounded-sm text-sm uppercase tracking-wide px-8 bg-card/50 backdrop-blur-sm border-2" data-testid="button-hero-learn" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Browse Archives
            </Button>
          </ZoomLink>
        </div>

        <div className="font-display text-sm text-muted-foreground italic border-t-2 border-border pt-4 inline-block">
          Active Collection: 150+ Specimens (Members)
        </div>
      </div>
    </section>
  );
}

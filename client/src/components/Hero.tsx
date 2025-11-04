import { Button } from "@/components/ui/button";
import ZoomLink from "./ZoomLink";
import heroImage from "@assets/generated_images/Bright_workspace_atmosphere_66f2eb3b.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/75 to-background/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-24 text-center">
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight tracking-tight">
          Financial Independence<br />
          Meets Community
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          A co-working space and community for people pursuing financial freedom. Weekly dinners, expert speakers, skill workshops, and community impact—all at our headquarters on Main Street in Longmont, Colorado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <ZoomLink href="/join">
            <Button size="lg" className="rounded-lg text-base px-8" data-testid="button-hero-join">
              Become a Member
            </Button>
          </ZoomLink>
          <ZoomLink href="/faq">
            <Button variant="outline" size="lg" className="rounded-lg text-base px-8 bg-background/50 backdrop-blur-sm" data-testid="button-hero-learn">
              Learn More
            </Button>
          </ZoomLink>
        </div>

        <div className="text-sm text-muted-foreground">
          Active community of 150+ professionals pursuing FI
        </div>
      </div>
    </section>
  );
}

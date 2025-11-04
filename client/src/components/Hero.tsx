import { Button } from "@/components/ui/button";
import ZoomLink from "./ZoomLink";
import heroImage from "@assets/generated_images/Cozy_co-working_hero_image_b8d517c8.png";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
          <span className="text-2xl">💰</span>
          <span className="font-semibold text-sm">Where FI Meets Community</span>
        </div>

        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
          Your Journey to<br />
          <span className="text-primary">Financial Freedom</span><br />
          Starts Here
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Join a welcoming community of dreamers and doers pursuing financial independence.
          Co-work, connect, and grow with people who truly understand your journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <ZoomLink href="/join">
            <Button size="lg" className="rounded-full text-base px-8 shadow-lg hover:shadow-xl transition-shadow" data-testid="button-hero-join">
              Join Our Community
            </Button>
          </ZoomLink>
          <ZoomLink href="/faq">
            <Button variant="outline" size="lg" className="rounded-full text-base px-8 bg-card/50 backdrop-blur-sm" data-testid="button-hero-learn">
              Learn More
            </Button>
          </ZoomLink>
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-muted-foreground">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Main Street, Longmont, Colorado</span>
        </div>
      </div>
    </section>
  );
}

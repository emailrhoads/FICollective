import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ZoomLink from "./ZoomLink";
import communityImage from "@assets/generated_images/Community_gathering_image_6df5e78e.png";

export default function WelcomeSection() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={communityImage} 
              alt="Community members enjoying coffee together" 
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block bg-accent px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-accent-foreground">What is FI?</span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight">
              Financial Independence,<br />
              Genuine Community
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Financial Independence (FI) isn't just about money—it's about freedom, choices, and living life on your own terms. Whether you're just starting your journey or already financially free, you've found your people.
            </p>

            <Card className="p-6 bg-muted/50 border-muted-foreground/20 rounded-2xl">
              <p className="text-base text-foreground leading-relaxed italic">
                "No more explaining your 50% savings rate to confused coworkers. Here, everyone gets it. We're building wealth, building community, and building the life we actually want to live."
              </p>
            </Card>

            <div className="pt-4">
              <ZoomLink href="/join">
                <Button size="lg" className="rounded-full" data-testid="button-welcome-join">
                  Start Your FI Journey
                </Button>
              </ZoomLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

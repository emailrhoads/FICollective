import { Card } from "@/components/ui/card";
import financialIcon from "@assets/generated_images/Financial_growth_icon_59a3941a.png";
import communityIcon from "@assets/generated_images/Community_circle_icon_f9833897.png";
import spaceIcon from "@assets/generated_images/Cozy_space_icon_08748eb3.png";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: financialIcon,
    title: "Build Your Wealth",
    description: "Connect with people who share your FI goals. Learn strategies, share insights, and accelerate your journey to financial freedom together."
  },
  {
    icon: spaceIcon,
    title: "Work in Comfort",
    description: "A thoughtfully designed co-working space with everything you need—fast WiFi, cozy nooks, collaboration areas, and all-day coffee."
  },
  {
    icon: communityIcon,
    title: "Find Your People",
    description: "Monthly workshops, casual meetups, and spontaneous lunch conversations with folks who truly understand your financial independence journey."
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-24 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Why FI Collective?
          </h2>
          <p className="text-lg text-muted-foreground">
            More than just a workspace—it's where your financial independence community comes together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate hover:shadow-xl transition-all duration-300 rounded-2xl border-card-border" 
              data-testid={`card-feature-${index}`}
            >
              <div className="space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 p-4 flex items-center justify-center">
                  <img 
                    src={feature.icon} 
                    alt="" 
                    className="w-full h-full object-contain"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">
                  {feature.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

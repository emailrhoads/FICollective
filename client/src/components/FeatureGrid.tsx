import { Card } from "@/components/ui/card";
import { Wifi, Coffee, Users, Clock } from "lucide-react";

interface Feature {
  icon: typeof Wifi;
  title: string;
  latin: string;
  number: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Wifi,
    title: "Fertile Soil",
    latin: "TERRA FERTILIS",
    number: "No. 01",
    description: "High-speed connectivity, quiet focus sanctuaries, collaboration chambers—the rich foundation where your financial garden takes root and thrives."
  },
  {
    icon: Coffee,
    title: "Daily Nourishment",
    latin: "NUTRIMENTUM",
    number: "No. 02",
    description: "Unlimited coffee, tea, and provisions. Fuel your body while tending to your financial growth. Community kitchen for shared meals."
  },
  {
    icon: Users,
    title: "Growing Together",
    latin: "CRESCERE SIMUL",
    number: "No. 03",
    description: "150+ gardeners cultivating FI through diverse paths—entrepreneurs, working professionals, early retirees. We share knowledge, celebrate harvests, weather seasons together."
  },
  {
    icon: Clock,
    title: "All Seasons",
    latin: "OMNES TEMPORA",
    number: "No. 04",
    description: "Extended hours and 24/7 access options. Tend your garden on your schedule—early morning seedlings or midnight planning sessions."
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-20 md:py-32 px-8 md:px-16 bg-muted/30 border-y-2 border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate hover:shadow-lg transition-all duration-300 rounded-sm border-2 relative" 
                data-testid={`card-feature-${index}`}
              >
                {/* Corner ornament */}
                <div className="absolute top-2 right-2 text-primary/20 text-lg font-serif">❦</div>
                
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-sm border-2 border-primary/30 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{feature.number}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-mono text-xs tracking-wider text-primary uppercase">
                      {feature.latin}
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground italic">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="font-display text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

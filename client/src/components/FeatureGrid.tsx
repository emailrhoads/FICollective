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
    title: "Premium Workspace",
    latin: "SPATIUM LABORIS",
    number: "No. 01",
    description: "High-speed connectivity, quiet focus sanctuaries, collaboration chambers, and meeting rooms curated for concentrated productivity."
  },
  {
    icon: Coffee,
    title: "Daily Provisions",
    latin: "QUOTIDIANA CIBARIA",
    number: "No. 02",
    description: "Unlimited coffee, tea, and provisions. Fully equipped preparation space for communal use. Comfortable gathering areas."
  },
  {
    icon: Users,
    title: "Active Community",
    latin: "COMMUNITAS ACTIVA",
    number: "No. 03",
    description: "150+ specimens (members) pursuing FI through diverse paths—entrepreneurial spirits, working professionals, early retirees, and transitional journeys."
  },
  {
    icon: Clock,
    title: "Flexible Access",
    latin: "ACCESSUS FLEXIBILIS",
    number: "No. 04",
    description: "Extended operating hours and round-the-clock access options. Work when it suits your schedule and lifestyle requirements."
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
                <div className="absolute top-2 right-2 text-primary/20 text-lg">✿</div>
                
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

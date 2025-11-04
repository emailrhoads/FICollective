import { Card } from "@/components/ui/card";
import { Wifi, Coffee, Users, Clock } from "lucide-react";

interface Feature {
  icon: typeof Wifi;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Wifi,
    title: "Premium Workspace",
    description: "High-speed WiFi, quiet focus areas, collaboration spaces, and meeting rooms designed for productivity."
  },
  {
    icon: Coffee,
    title: "All-Day Amenities",
    description: "Unlimited coffee, tea, and snacks. Fully equipped kitchen for member use. Comfortable lounge areas."
  },
  {
    icon: Users,
    title: "Active Community",
    description: "150+ members pursuing FI through diverse paths—entrepreneurs, professionals, early retirees, and career transitioners."
  },
  {
    icon: Clock,
    title: "Flexible Access",
    description: "Extended hours and 24/7 access options. Work when it suits your schedule and lifestyle."
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-24 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate hover:shadow-lg transition-all duration-300 rounded-lg border-border" 
                data-testid={`card-feature-${index}`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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

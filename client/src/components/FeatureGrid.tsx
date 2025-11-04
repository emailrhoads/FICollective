import { Card } from "@/components/ui/card";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: `  $$$$
 $$  $$
$$    $$
$$$$$$$$
$$    $$
$$    $$`,
    title: "FINANCIAL INDEPENDENCE",
    description: "Connect with people who share your goals of achieving financial freedom and early retirement."
  },
  {
    icon: `███████
██
██
██
██
███████`,
    title: "CO-WORKING SPACE",
    description: "Professional workspace designed for focus, productivity, and collaboration with fellow FI pursuers."
  },
  {
    icon: `▄▄▄▄▄▄▄
█ █ █ █
█ █ █ █
█ █ █ █
▀▀▀▀▀▀▀`,
    title: "COMMUNITY EVENTS",
    description: "Regular meetups, workshops, and discussions about investing, side hustles, and financial strategies."
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <pre className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
{`┌────────────────────────┐
│  WHY FI COLLECTIVE?    │
└────────────────────────┘`}
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-feature-${index}`}>
              <div className="space-y-4">
                <pre className="text-xs md:text-sm text-primary font-bold leading-tight" aria-hidden="true">
                  {feature.icon}
                </pre>
                <h3 className="font-mono font-bold text-sm md:text-base text-foreground">
                  {feature.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
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

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface Tier {
  name: string;
  latin: string;
  price: string;
  popular?: boolean;
  features: string[];
}

const tiers: Tier[] = [
  {
    name: "Part-Time",
    latin: "COLLECTOR",
    price: "$99",
    features: [
      "10 days per month",
      "High-speed connectivity",
      "Coffee & tea provisions",
      "Meeting chamber access",
      "All community gatherings",
      "Locker available"
    ]
  },
  {
    name: "Full-Time",
    latin: "CURATOR",
    price: "$199",
    popular: true,
    features: [
      "Unlimited access",
      "High-speed connectivity",
      "Coffee & tea provisions",
      "Priority meeting chambers",
      "Round-the-clock access",
      "All community gatherings",
      "Dedicated locker"
    ]
  },
  {
    name: "Dedicated Desk",
    latin: "BOTANIST",
    price: "$299",
    features: [
      "Personal workspace",
      "Unlimited access",
      "High-speed connectivity",
      "Coffee & tea provisions",
      "Priority meeting chambers",
      "Round-the-clock access",
      "All community gatherings",
      "Secure storage",
      "Monitor included"
    ]
  }
];

export default function MembershipTiers() {
  const handleJoin = (tierName: string) => {
    console.log(`Join ${tierName} tier clicked`);
  };

  return (
    <section className="py-20 md:py-32 px-8 md:px-16 bg-muted/30 border-y-2 border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-primary/20 text-4xl font-serif">❦</div>
          <div className="font-mono text-xs tracking-wider text-primary uppercase mb-2">
            TRES GRADUS
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4 italic">
            Membership Collection
          </h2>
          <p className="font-display text-lg text-muted-foreground italic">
            Flexible arrangements suited to your schedule and aspirations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 hover-elevate hover:shadow-xl transition-all duration-300 rounded-sm relative border-2 ${tier.popular ? 'border-primary' : ''}`}
              data-testid={`card-tier-${tier.name.toLowerCase().replace(' ', '-')}`}
            >
              {/* Corner ornament */}
              <div className="absolute top-2 right-2 text-primary/20 text-lg font-serif">❦</div>
              
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-sm px-3 py-1 border-2 uppercase text-xs tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Praecipua
                </Badge>
              )}

              <div className="space-y-8">
                <div className="text-center pb-6 border-b-2 border-border">
                  <div className="font-mono text-xs tracking-wider text-primary uppercase mb-2">
                    {tier.latin}
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4 text-foreground italic">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground font-display">
                      {tier.price}
                    </span>
                    <span className="font-display text-muted-foreground italic">
                      /month
                    </span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-display text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full rounded-sm uppercase text-xs tracking-wide border-2"
                  variant={tier.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleJoin(tier.name)}
                  data-testid={`button-join-${tier.name.toLowerCase().replace(' ', '-')}`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Select {tier.latin}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 max-w-2xl mx-auto rounded-sm text-center bg-muted/50 border-2">
          <p className="font-display text-foreground mb-4 font-semibold italic">
            Uncertain still? Trial visit for $25
          </p>
          <Button variant="outline" className="rounded-sm uppercase text-xs tracking-wide border-2" data-testid="button-day-pass" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Acquire Day Pass
          </Button>
        </Card>
      </div>
    </section>
  );
}

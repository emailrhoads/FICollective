import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface Tier {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

const tiers: Tier[] = [
  {
    name: "Part-Time",
    price: "$99",
    features: [
      "10 days per month",
      "High-speed WiFi",
      "Coffee & tea",
      "Meeting room access",
      "Community events",
      "Locker rental available"
    ]
  },
  {
    name: "Full-Time",
    price: "$199",
    popular: true,
    features: [
      "Unlimited access",
      "High-speed WiFi",
      "Coffee & tea",
      "Priority meeting rooms",
      "24/7 access",
      "Community events",
      "Free locker"
    ]
  },
  {
    name: "Dedicated Desk",
    price: "$299",
    features: [
      "Your own desk",
      "Unlimited access",
      "High-speed WiFi",
      "Coffee & tea",
      "Priority meeting rooms",
      "24/7 access",
      "Community events",
      "Locking desk drawer",
      "Monitor included"
    ]
  }
];

export default function MembershipTiers() {
  const handleJoin = (tierName: string) => {
    console.log(`Join ${tierName} tier clicked`);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Choose Your Membership
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible plans that fit your schedule and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 hover-elevate hover:shadow-xl transition-all duration-300 rounded-3xl relative ${tier.popular ? 'border-primary border-2' : ''}`}
              data-testid={`card-tier-${tier.name.toLowerCase().replace(' ', '-')}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1">
                  Most Popular
                </Badge>
              )}

              <div className="space-y-8">
                <div className="text-center pb-6 border-b border-border">
                  <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground">
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
                      <span className="text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full rounded-full"
                  variant={tier.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleJoin(tier.name)}
                  data-testid={`button-join-${tier.name.toLowerCase().replace(' ', '-')}`}
                >
                  Choose {tier.name}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 max-w-2xl mx-auto rounded-2xl text-center bg-accent/50">
          <p className="text-foreground mb-4 font-semibold">
            Not sure yet? Try a day pass for just $25
          </p>
          <Button variant="outline" className="rounded-full" data-testid="button-day-pass">
            Get a Day Pass
          </Button>
        </Card>
      </div>
    </section>
  );
}

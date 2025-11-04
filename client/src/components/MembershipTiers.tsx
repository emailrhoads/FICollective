import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Tier {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

const tiers: Tier[] = [
  {
    name: "PART-TIME",
    price: "$99",
    features: [
      "✓ 10 days per month",
      "✓ High-speed WiFi",
      "✓ Coffee & tea",
      "✓ Meeting room access",
      "✓ Community events",
      "✓ Locker rental available"
    ]
  },
  {
    name: "FULL-TIME",
    price: "$199",
    popular: true,
    features: [
      "✓ Unlimited access",
      "✓ High-speed WiFi",
      "✓ Coffee & tea",
      "✓ Priority meeting rooms",
      "✓ 24/7 access",
      "✓ Community events",
      "✓ Free locker"
    ]
  },
  {
    name: "DEDICATED DESK",
    price: "$299",
    features: [
      "✓ Your own desk",
      "✓ Unlimited access",
      "✓ High-speed WiFi",
      "✓ Coffee & tea",
      "✓ Priority meeting rooms",
      "✓ 24/7 access",
      "✓ Community events",
      "✓ Locking desk drawer",
      "✓ Monitor included"
    ]
  }
];

export default function MembershipTiers() {
  const handleJoin = (tierName: string) => {
    console.log(`Join ${tierName} tier clicked`);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <pre className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
{`┌──────────────────────────┐
│  MEMBERSHIP PRICING      │
└──────────────────────────┘`}
          </pre>
          <p className="font-mono text-sm text-muted-foreground mt-4">
            ▸ Choose the plan that fits your schedule
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-6 hover-elevate relative ${tier.popular ? 'border-primary' : ''}`}
              data-testid={`card-tier-${tier.name.toLowerCase().replace(' ', '-')}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-xs">
                  POPULAR
                </Badge>
              )}

              <div className="space-y-6">
                <div className="text-center border-b border-border pb-6">
                  <h3 className="font-mono font-bold text-base md:text-lg mb-4 text-foreground">
                    [ {tier.name} ]
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <pre className="text-3xl md:text-4xl font-bold text-primary" aria-label={`${tier.price} per month`}>
{`  $$$
 $   $
$     $
$$$$$$$
$     $
$     $`}
                    </pre>
                  </div>
                  <p className="font-mono text-2xl md:text-3xl font-bold text-foreground mt-2">
                    {tier.price}
                  </p>
                  <p className="font-mono text-sm text-muted-foreground">
                    /month
                  </p>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="font-mono text-sm text-muted-foreground"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full font-mono"
                  variant={tier.popular ? "default" : "outline"}
                  onClick={() => handleJoin(tier.name)}
                  data-testid={`button-join-${tier.name.toLowerCase().replace(' ', '-')}`}
                >
                  [ SELECT PLAN ]
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 max-w-2xl mx-auto">
            <p className="font-mono text-sm text-muted-foreground mb-4">
              ▸ NOT SURE YET? TRY A DAY PASS FOR $25
            </p>
            <Button variant="outline" className="font-mono" data-testid="button-day-pass">
              [ GET DAY PASS ]
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ZoomLink from "@/components/ZoomLink";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-8 md:px-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 tracking-tight">
            Welcome to FI Collective!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            We're a collection of people who love having fun and are intentional about building community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Intro */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground">
              Most of us are also into saving for a super early retirement. (The FI stands for Financial Independence, meaning freedom from required work forever! Yay!)
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Have you heard those statistics saying that people who retire young tend to die earlier because they lose all sense of purpose? We laugh in the face of those statistics, because here at FI Collective, we're busy cooking for weekly potlucks, planning fun adventures, holding musical jam sessions, creating personal finance classes, and so much more.
            </p>
            <p className="text-lg leading-relaxed text-foreground font-semibold">
              It's a fun, vibrant community.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              And, oh yeah, you can use our space for actual co-working, too! We have four private offices and several open desks and tables where you can come with your laptop and work in the company of other cool humans.
            </p>
          </div>

          {/* CTA Card */}
          <Card className="p-8 md:p-12 bg-primary/5 border-2 rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              All we're missing is you!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Check out our membership options and see which one works for you.
            </p>
            <ZoomLink href="/join">
              <Button size="lg" className="text-base px-8" data-testid="button-view-membership">
                View Membership Options
              </Button>
            </ZoomLink>
          </Card>

          {/* What Goes On Section */}
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              What Goes On At FI Collective?
            </h2>
            
            <p className="text-xl text-foreground mb-8 font-semibold">
              We have so many fun events at FI Collective! You may have attended some cool parties at the old HQ, but just you wait. Things are going to get pretty damn fun around here.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              We already have plans for …
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="p-4 hover-elevate rounded-lg">
                <p className="font-medium text-foreground">FI 101 classes</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Oh - is it almost January? Did you set a New Year's Resolution to get your financial $hit together? We thought you might say that!
                </p>
              </Card>

              <Card className="p-4 hover-elevate rounded-lg">
                <p className="font-medium text-foreground">FI 401 classes</p>
                <p className="text-sm text-muted-foreground mt-1">
                  You're already basically FI or on autopilot to get there but want some in-depth talks about withdrawal strategies and tax optimization? Got you covered.
                </p>
              </Card>
            </div>

            <div className="columns-2 md:columns-3 gap-4 space-y-2 text-foreground">
              <p>• Non-profit fundraisers</p>
              <p>• Green energy learning sessions</p>
              <p>• Knitting/crocheting lessons</p>
              <p>• Cooking classes</p>
              <p>• Cooking competitions! (Bring your A-game, we have some chefs around here)</p>
              <p>• Holiday parties</p>
              <p>• Music jam sessions</p>
              <p>• Poetry slams</p>
              <p>• Novel-writing support groups</p>
              <p>• Film-making classes</p>
              <p>• Book club</p>
              <p>• Coffee meet-ups</p>
              <p>• Yoga classes</p>
              <p>• Gardening classes</p>
              <p>• Language groups</p>
              <p>• Board game nights</p>
              <p>• Dance parties</p>
              <p>• Basketweaving lessons</p>
              <p className="font-semibold">• And of course … the beloved Tuesday potlucks</p>
            </div>

            <Card className="p-6 mt-8 bg-accent/10 rounded-lg border-2">
              <p className="text-lg text-foreground">
                And if none of THAT sounds appealing to you (honestly … none of it? really?), join the events committee and throw some other cool ideas out there!
              </p>
            </Card>
          </div>

          {/* CampFI Section */}
          <Card className="p-8 md:p-12 bg-primary/10 border-2 rounded-lg mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Hey, CampFI friends!
            </h3>
            <p className="text-lg text-foreground mb-6">
              Gonna be in Longmont in July around the Rocky Mountain weeks? Get a July pass and come hang out with us all month! July will be an extra-jam-packed month of fun!
            </p>
            <ZoomLink href="/join">
              <Button variant="outline" size="lg" data-testid="button-july-pass">
                Get a July Pass
              </Button>
            </ZoomLink>
          </Card>
        </div>
      </section>
    </div>
  );
}

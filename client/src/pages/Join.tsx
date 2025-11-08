import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation } from "wouter";
import PageTransition from "@/components/PageTransition";
import { Check } from "lucide-react";

export default function Join() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageTransition location={location}>
        <main className="flex-1">
          {/* Hero */}
          <div className="py-20 md:py-32 px-8 text-center bg-gradient-to-br from-primary/10 to-background">
            <h1 className="font-bold text-5xl md:text-6xl text-foreground mb-6 tracking-tight">
              Membership Options
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pick the membership that fits your life and let's get this party started!
            </p>
          </div>

          {/* Membership Tiers */}
          <section className="py-16 md:py-24 px-8">
            <div className="max-w-6xl mx-auto space-y-8">
              {/* Individual Community Membership */}
              <Card className="p-8 md:p-10 rounded-lg border-2 hover-elevate">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      Individual Community Membership
                    </h2>
                    <p className="text-4xl font-bold text-primary mb-4">
                      $400<span className="text-lg text-muted-foreground font-normal">/year</span>
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      Well hello there you lucky bastard who gets to live along the Front Range in Colorado! If you're someone who lives in or around Longmont, your life is already pretty great. Why not 10x how awesome it is by adding a group of friendly, intelligent, adventurous, generous people to your orbit?
                    </p>
                    <p className="text-lg text-foreground leading-relaxed">
                      This $400 a year gets you access to all events at FI Collective, even the premium ones that non-members have to pay for! Come to our weekly potlucks and happy hours, learn in one of our many classes, attend speaker sessions, join volunteering events, and so much more!
                    </p>
                  </div>
                </div>
              </Card>

              {/* Family Community Membership */}
              <Card className="p-8 md:p-10 rounded-lg border-2 hover-elevate">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      Family Community Membership
                    </h2>
                    <p className="text-4xl font-bold text-primary mb-4">
                      $600<span className="text-lg text-muted-foreground font-normal">/year</span>
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      What's that? You're lucky enough to live in this awesome area and have a spouse/partner/family that you want to bring along to events? Amazing. Let's get them in on the fun, too!
                    </p>
                    <p className="text-lg text-foreground leading-relaxed">
                      $600 gets them all a membership and invited to FI Collective events! This is just like the individual community membership but includes your family! This is perfect for couples or someone who plans on bringing kids around. (P.S. Are you the Von Trapp family with oodles of kids running around that you're planning on dragging to our events? Reach out and we'll work something out!)
                    </p>
                  </div>
                </div>
              </Card>

              {/* Co-working Membership */}
              <Card className="p-8 md:p-10 rounded-lg border-2 border-primary hover-elevate bg-primary/5">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      Most Popular
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      Co-working Membership
                    </h2>
                    <p className="text-4xl font-bold text-primary mb-1">
                      $1,000<span className="text-lg text-muted-foreground font-normal">/year</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      or $1,200 if paid semiannually
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      Do you plan on bringing your laptop to FI Collective and working pretty regularly? Then the co-working tier is right for you. Most co-working spaces in the area charge at least three times what we do, so this is a real bargain!
                    </p>
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      And this comes with all the perks of the community membership for you and one family member. You and your family member will get access to all community events, even the premium ones that the non-members pay for.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed">
                      FI Collective has a limited number of private offices and several workspaces with desks and tables where you can set up shop and get work done. We have super fast internet and all the coffee/tea you can drink. And did we mention the people are pretty rad?
                    </p>
                  </div>
                </div>
              </Card>

              {/* Remote Membership */}
              <Card className="p-8 md:p-10 rounded-lg border-2 hover-elevate">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      Remote Membership
                    </h2>
                    <p className="text-4xl font-bold text-primary mb-4">
                      $100<span className="text-lg text-muted-foreground font-normal">/year</span>
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      Don't live around here? This option is aimed at people who want to be part of all the FI Collective fun but live in a galaxy far, far away. Or maybe you just live in Denver or Fort Collins and hate driving, so you only make it to FI Collective a few times a year. (Wasn't there some dude on the internet who discouraged us all from driving so much?? Hmmm … who was that??)
                    </p>
                    <p className="text-lg text-foreground font-semibold mb-3">
                      This membership level is for YOU! What does it get you?
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground">Virtual meetings at least once a month. We plan on bringing in some big names from the FI community to host talks, AMAs, and interactive learning sessions.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground">Full access to the physical space (just like a local member) when you do happen to be in town. (Come visit us! We love that!)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground">You'll be supporting the ideals of financial independence and community building</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground">All for a measly $8.33 a month (way less costly and way more valuable than any streaming service)</span>
                      </li>
                    </ul>
                    <p className="text-base text-muted-foreground italic">
                      We ask that you live at least 30 miles from FI Collective before considering this option. If you live around here, get on your bike and come hang out in person for Pete's sake. (Pete's sake? Get it? Yeah, you should prepared for corny humor if you want to hang out with us…)
                    </p>
                  </div>
                </div>
              </Card>

              {/* July Pass */}
              <Card className="p-8 md:p-10 rounded-lg border-2 hover-elevate bg-accent/10">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      The July Pass
                    </h2>
                    <p className="text-4xl font-bold text-primary mb-4">
                      $50
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      If you haven't heard of CampFI or the amazing guy who created it, Stephen Baughier, you need to go <a href="https://campfi.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">here and Check. It. Out!</a> Short of living in Longmont, CampFI is one of the best ways to meet people in the FI community, learn about the mechanics of financial independence, and build a network of folks you can hang out with once you've pulled the plug and left traditional work behind for good!
                    </p>
                    <p className="text-lg text-foreground leading-relaxed">
                      Here in Longmont, we're kiiinda the FI capital of the world, so we're more or less obligated to go extra hard for the folks coming through for Rocky Mountain CampFI in early July. If you're planning on attending RM CampFI (which you totally should!), grab a July Pass and come hang out with us all month long! We're planning a jam-packed month of fun events, learning sessions, and community gatherings. It's gonna be epic!
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Payment Info */}
          <section className="py-16 px-8 bg-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Payment Options:</strong> The July Pass and Remote memberships must be paid upfront. All other memberships may be paid annually or semiannually.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ready to join the fun?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Reach out to us and let's get you set up with a membership!
              </p>
              <Button size="lg" className="text-base px-8 rounded-lg" data-testid="button-contact">
                Contact Us to Get Started
              </Button>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}

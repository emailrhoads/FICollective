import Navigation from "@/components/Navigation";
import MembershipTiers from "@/components/MembershipTiers";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useLocation } from "wouter";
import PageTransition from "@/components/PageTransition";
import { UserPlus } from "lucide-react";

export default function Join() {
  const [location] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageTransition location={location}>
        <main className="flex-1">
          <div className="py-20 px-6 text-center bg-gradient-to-b from-muted/30 to-transparent">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <UserPlus className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground mb-6">
              Join Our Community
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your journey with people who value financial independence and intentional living.
            </p>
          </div>

          <MembershipTiers />

          <section className="py-24 px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground">
                  Ready to join? Have questions? Fill out the form below and we'll get back to you soon.
                </p>
              </div>

              <Card className="p-8 md:p-10 rounded-3xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      className="rounded-xl h-12"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      data-testid="input-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="rounded-xl h-12"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">
                      Phone (Optional)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="rounded-xl h-12"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-testid="input-phone"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-semibold">
                      Tell Us About Yourself
                    </Label>
                    <Textarea
                      id="message"
                      className="rounded-xl min-h-32 resize-none"
                      placeholder="What brings you to FI Collective? Where are you on your FI journey?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      data-testid="input-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full rounded-full h-12 text-base" 
                    size="lg"
                    data-testid="button-submit-contact"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}

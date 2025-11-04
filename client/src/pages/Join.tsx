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
          <div className="py-20 px-8 text-center bg-gradient-to-b from-muted/30 to-transparent border-b-2 border-border relative">
            {/* Decorative elements */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-primary/20 text-4xl font-serif">❦</div>
            
            <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-primary/30 rounded-sm mb-6 bg-card">
              <UserPlus className="w-8 h-8 text-primary" />
            </div>
            <div className="font-mono text-xs tracking-wider text-primary uppercase mb-4">
              NOVUM MEMBRUM
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground mb-6 italic">
              Plant Your Roots Here
            </h1>
            <p className="font-display text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto italic">
              Join fellow gardeners cultivating financial independence. Plant seeds, share knowledge, celebrate harvests together.
            </p>
          </div>

          <MembershipTiers />

          <section className="py-24 px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <div className="text-primary/30 text-3xl mb-4 font-serif">✺</div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 italic">
                  Let's Connect
                </h2>
                <p className="font-display text-lg text-muted-foreground italic">
                  Ready to grow with us? Have questions about tending your financial garden? Reach out—we'll respond with care.
                </p>
              </div>

              <Card className="p-8 md:p-10 rounded-sm shadow-lg border-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-mono text-xs tracking-wider uppercase">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      className="rounded-sm h-11 border-2 font-display"
                      placeholder="Your complete designation"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      data-testid="input-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-xs tracking-wider uppercase">
                      Electronic Post
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="rounded-sm h-11 border-2 font-display"
                      placeholder="your.correspondence@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-mono text-xs tracking-wider uppercase">
                      Telephone (Optional)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="rounded-sm h-11 border-2 font-display"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-testid="input-phone"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-mono text-xs tracking-wider uppercase">
                      Personal Statement
                    </Label>
                    <Textarea
                      id="message"
                      className="rounded-sm min-h-32 resize-none border-2 font-display"
                      placeholder="What compels your interest in FI Collective? Where do you find yourself on the FI journey?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      data-testid="input-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full rounded-sm h-11 uppercase text-xs tracking-wide border-2" 
                    size="lg"
                    data-testid="button-submit-contact"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Submit Correspondence
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

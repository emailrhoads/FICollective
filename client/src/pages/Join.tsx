import Navigation from "@/components/Navigation";
import MembershipTiers from "@/components/MembershipTiers";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Join() {
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
      <main className="flex-1">
        <div className="py-12 px-4 text-center">
          <pre className="text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight mx-auto">
{`     ██╗ ██████╗ ██╗███╗   ██╗
     ██║██╔═══██╗██║████╗  ██║
     ██║██║   ██║██║██╔██╗ ██║
██   ██║██║   ██║██║██║╚██╗██║
╚█████╔╝╚██████╔╝██║██║ ╚████║
 ╚════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝`}
          </pre>
          <p className="font-mono text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Join a community of people who value financial independence and intentional living.
          </p>
        </div>

        <MembershipTiers />

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <pre className="text-lg md:text-xl font-bold text-foreground mb-4 leading-tight">
{`┌────────────────────────────┐
│  GET IN TOUCH              │
└────────────────────────────┘`}
              </pre>
              <p className="font-mono text-sm text-muted-foreground">
                ▸ Ready to join? Have questions? Fill out the form below.
              </p>
            </div>

            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-sm">
                    NAME *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="font-mono"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-sm">
                    EMAIL *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="font-mono"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-mono text-sm">
                    PHONE
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="font-mono"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    data-testid="input-phone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-sm">
                    MESSAGE
                  </Label>
                  <Textarea
                    id="message"
                    className="font-mono min-h-32"
                    placeholder="Tell us about your FI journey or any questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    data-testid="input-message"
                  />
                </div>

                <Button type="submit" className="w-full font-mono" data-testid="button-submit-contact">
                  [ SUBMIT ]
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

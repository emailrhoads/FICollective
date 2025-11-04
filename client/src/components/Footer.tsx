import ZoomLink from "./ZoomLink";
import { Heart, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Heart className="w-5 h-5 text-primary fill-primary" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                FI Collective
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building community.<br />
              Building wealth.<br />
              Building freedom.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <ZoomLink href="/" className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Home
                </ZoomLink>
              </li>
              <li>
                <ZoomLink href="/faq" className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  FAQ
                </ZoomLink>
              </li>
              <li>
                <ZoomLink href="/join" className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Join Us
                </ZoomLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-foreground">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@ficollective.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </li>
              <li className="pt-2">
                Main Street<br />
                Longmont, CO 80501
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 FI Collective. All rights reserved. Made with{" "}
            <Heart className="inline w-4 h-4 text-primary fill-primary" /> in Longmont, CO
          </p>
        </div>
      </div>
    </footer>
  );
}

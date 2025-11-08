import ZoomLink from "./ZoomLink";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t-2 border-border mt-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-bold text-xl text-foreground">
                FI Collective
              </span>
              <span className="text-xs text-muted-foreground">EST. 2024</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A fun, vibrant community for people crushing early retirement together.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              <li>
                <ZoomLink href="/" className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Home
                </ZoomLink>
              </li>
              <li>
                <ZoomLink href="/join" className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Membership
                </ZoomLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Events
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Tuesday Potlucks</li>
              <li>FI Classes</li>
              <li>Music Jams</li>
              <li>Dance Parties</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Contact
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
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>FI Collective HQ<br />712 Main St<br />Longmont, CO 80501</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 FI Collective. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import ZoomLink from "./ZoomLink";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/90 border-t-2 border-border mt-24">
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
                <a
                  href="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FDenver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Events
                </a>
              </li>
              <li>
                <ZoomLink href="/faq" className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  FAQ
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
              Contact
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@ficollective.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=712+Main+St,+Longmont,+CO+80501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  <span>FI Collective HQ<br />712 Main St<br />Longmont, CO 80501</span>
                </a>
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

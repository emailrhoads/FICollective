import ZoomLink from "./ZoomLink";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <pre className="text-sm font-bold text-foreground mb-4 leading-none">
{`███████╗██╗
██╔════╝██║
█████╗  ██║
██╔══╝  ██║
██║     ██║
╚═╝     ╚═╝`}
            </pre>
            <p className="font-mono text-sm text-muted-foreground mt-4">
              Building community.<br />
              Building wealth.<br />
              Building freedom.
            </p>
          </div>

          <div>
            <h4 className="font-mono font-bold text-sm mb-4 text-foreground">
              ▸ QUICK LINKS
            </h4>
            <ul className="space-y-2 font-mono text-sm">
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
                  Join
                </ZoomLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold text-sm mb-4 text-foreground">
              ▸ CONTACT
            </h4>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li>Main Street</li>
              <li>Longmont, CO 80501</li>
              <li className="pt-2">hello@ficollective.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <pre className="text-center font-mono text-xs text-muted-foreground leading-tight">
{`═══════════════════════════════════════════════════════════════════════════
© 2024 FI COLLECTIVE • ALL RIGHTS RESERVED • LONGMONT, CO
═══════════════════════════════════════════════════════════════════════════`}
          </pre>
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
import ZoomLink from "./ZoomLink";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none" aria-hidden="true">
        <pre className="text-xs leading-tight text-foreground whitespace-pre">
{Array(50).fill(null).map((_, i) => 
  '$ █ ▓ ░ ▒ ╔ ║ ═ ╗ ╚ ╝ → ▸ ✓ ┌ ┐ └ ┘ │ ─ '.repeat(10) + '\n'
).join('')}
        </pre>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <pre className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mx-auto">
{`███████╗██╗
██╔════╝██║
█████╗  ██║
██╔══╝  ██║
██║     ██║
╚═╝     ╚═╝

 ██████╗ ██████╗ ██╗     ██╗     ███████╗ ██████╗████████╗██╗██╗   ██╗███████╗
██╔════╝██╔═══██╗██║     ██║     ██╔════╝██╔════╝╚══██╔══╝██║██║   ██║██╔════╝
██║     ██║   ██║██║     ██║     █████╗  ██║        ██║   ██║██║   ██║█████╗
██║     ██║   ██║██║     ██║     ██╔══╝  ██║        ██║   ██║╚██╗ ██╔╝██╔══╝
╚██████╗╚██████╔╝███████╗███████╗███████╗╚██████╗   ██║   ██║ ╚████╔╝ ███████╗
 ╚═════╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝ ╚═════╝   ╚═╝   ╚═╝  ╚═══╝  ╚══════╝`}
          </pre>
        </div>

        <div className="space-y-4">
          <p className="text-lg md:text-xl font-mono text-foreground max-w-2xl mx-auto">
            ═══════════════════════════════════════════
          </p>
          <p className="text-base md:text-lg font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A COMMUNITY & CO-WORKING SPACE FOR PEOPLE<br />
            PURSUING FINANCIAL INDEPENDENCE
          </p>
          <p className="text-lg md:text-xl font-mono text-foreground max-w-2xl mx-auto">
            ═══════════════════════════════════════════
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <ZoomLink href="/join">
            <Button size="lg" className="font-mono text-base" data-testid="button-hero-join">
              [ JOIN NOW ]
            </Button>
          </ZoomLink>
          <ZoomLink href="/faq">
            <Button variant="outline" size="lg" className="font-mono text-base" data-testid="button-hero-learn">
              [ LEARN MORE ]
            </Button>
          </ZoomLink>
        </div>

        <div className="pt-8">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
            📍 LONGMONT, COLORADO • MAIN STREET
          </p>
        </div>
      </div>
    </section>
  );
}

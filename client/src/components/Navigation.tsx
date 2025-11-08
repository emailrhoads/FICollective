import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ZoomLink from "./ZoomLink";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/join", label: "Membership" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-border">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between h-16">
          <ZoomLink href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-sm cursor-pointer">
            <span className="font-display font-bold text-xl text-foreground italic tracking-tight">
              FI Collective
            </span>
            <span className="font-mono text-xs text-muted-foreground tracking-wider">EST. 2024</span>
          </ZoomLink>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <ZoomLink key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  className="rounded-sm font-medium uppercase text-xs tracking-wide"
                  data-testid={`link-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {item.label}
                </Button>
              </ZoomLink>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t-2 border-border mt-2 pt-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <ZoomLink key={item.path} href={item.path}>
                  <Button
                    variant={location === item.path ? "secondary" : "ghost"}
                    className="w-full rounded-sm justify-start uppercase text-xs tracking-wide"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    <span className="font-mono mr-2 text-muted-foreground">0{index + 1}.</span>
                    {item.label}
                  </Button>
                </ZoomLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

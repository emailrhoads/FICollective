import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import ZoomLink from "./ZoomLink";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/faq", label: "FAQ" },
    { path: "/join", label: "Join Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <ZoomLink href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-full cursor-pointer">
            <div className="bg-primary/10 p-2 rounded-full">
              <Heart className="w-5 h-5 text-primary fill-primary" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              FI Collective
            </span>
          </ZoomLink>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <ZoomLink key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  className="rounded-full font-medium"
                  data-testid={`link-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  {item.label}
                </Button>
              </ZoomLink>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-border mt-2 pt-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <ZoomLink key={item.path} href={item.path}>
                  <Button
                    variant={location === item.path ? "secondary" : "ghost"}
                    className="w-full rounded-full justify-start"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                  >
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

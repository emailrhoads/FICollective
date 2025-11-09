import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const themes = [
  { id: "default", name: "Green & Natural" },
  { id: "mountain", name: "Mountain Vista" },
  { id: "line-art", name: "Line Art" },
];

export default function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("fi-collective-theme") || "default";
    }
    return "default";
  });

  useEffect(() => {
    applyTheme(currentTheme);
  }, []);

  const applyTheme = (themeId: string) => {
    const root = document.documentElement;
    
    themes.forEach((theme) => {
      root.classList.remove(`theme-${theme.id}`);
    });
    
    root.classList.add(`theme-${themeId}`);
  };

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem("fi-collective-theme", themeId);
    applyTheme(themeId);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          data-testid="button-theme-selector"
          aria-label="Select theme"
        >
          <Palette className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-testid="menu-theme-options">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.id}
            onClick={() => handleThemeChange(theme.id)}
            data-testid={`menu-item-theme-${theme.id}`}
            className={currentTheme === theme.id ? "font-semibold" : ""}
          >
            {theme.name}
            {currentTheme === theme.id && " ✓"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import { useTheme } from "@/app/providers/theme-provider";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Components", href: "#components" },
    { name: "Typography", href: "#typography" },
    { name: "Colors", href: "#colors" },
    { name: "Demo", href: "/demo" },
    { name: "UI Blocks", href: "/ui-blocks/application-shells/multi-column" },
    { name: "Hero Section (UI)", href: "/ui-blocks/marketing/hero-section" },
    { name: "Features (UI)", href: "/ui-blocks/marketing/features-section" },
    { name: "Data Table (UI)", href: "/ui-blocks/complex/data-table" },
  ];

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          {/* Using a regular img tag for the logo */}
          <img
            src="/logo.png"
            alt="Design System Logo"
            className="h-8 w-8"
            width={32}
            height={32}
          />
          <span className="text-xl font-bold">Design System</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t md:hidden">
          <nav className="container mx-auto max-w-screen-2xl px-4 py-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

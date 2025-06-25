"use client";

import { Home, Palette, Type, Layout, Component } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Overview",
    items: [
      { name: "Getting Started", href: "#", icon: Home },
      { name: "Installation", href: "#", icon: Layout },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "Colors", href: "#colors", icon: Palette },
      { name: "Typography", href: "#typography", icon: Type },
      { name: "Components", href: "#components", icon: Component },
    ],
  },
];

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-muted/30 p-4">
      <div className="space-y-4">
        <div>
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Design System
          </h2>
        </div>
        <div className="space-y-4">
          {sidebarItems.map((section) => (
            <div key={section.title}>
              <h3 className="mb-2 px-2 text-sm font-medium text-muted-foreground">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

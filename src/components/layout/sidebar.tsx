"use client";

import { cn } from "@/lib/utils";
import { Component, Home, Layout, Palette, Type } from "lucide-react";
import { cn } from "@/lib/utils";
import { Component, Home, Layout, Palette, Type } from "lucide-react";

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
    <div className="bg-muted/30 w-64 border-r p-4">
      <div className="space-y-4">
        <div>
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Design System
          </h2>
        </div>
        <div className="space-y-4">
          {sidebarItems.map((section) => (
            <div key={section.title}>
              <h3 className="text-muted-foreground mb-2 px-2 text-sm font-medium">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium transition-colors"
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

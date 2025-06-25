# 📖 Next.js Modern Design System - Usage Guide

This guide explains how to use and customize the **Modern Design System** boilerplate template built
with Next.js 15, Tailwind CSS 4, and TypeScript.

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

### 2. Essential Commands

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript validation
npm run validate     # Run all checks (build + lint + type-check)

# Code Quality
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run lint:fix     # Auto-fix ESLint issues
```

## 🏗️ Project Structure

```
src/
├── app/                        # Next.js 15 App Router
│   ├── layout.tsx             # Root layout with theme provider
│   ├── page.tsx               # Homepage with component showcase
│   ├── globals.css            # Global styles & CSS custom properties
│   └── providers/
│       └── theme-provider.tsx # Dark/light theme management
├── components/
│   ├── layout/               # Layout components
│   │   ├── header.tsx       # Navigation header with theme toggle
│   │   ├── sidebar.tsx      # Sidebar navigation
│   │   └── footer.tsx       # Footer component
│   └── ui/                  # Reusable UI components
│       ├── button.tsx       # Button with 6 variants
│       ├── card.tsx         # Card with 3 variants
│       └── badge.tsx        # Badge with 4 variants
└── lib/
    └── utils.ts             # Utility functions & component variants
```

## 🎨 Design System Usage

### Color System

The design system uses CSS custom properties for theming:

```css
/* Light mode */
:root {
  --primary: 34 197 94; /* Green */
  --secondary: 255 193 7; /* Yellow */
  --background: 255 255 255; /* White */
  --foreground: 10 10 10; /* Dark text */
}

/* Dark mode */
.dark {
  --background: 10 10 10; /* Dark background */
  --foreground: 255 255 255; /* Light text */
}
```

**Usage in components:**

```tsx
<div className="bg-primary text-primary-foreground">
  Primary colored element
</div>

<div className="bg-secondary text-secondary-foreground">
  Secondary colored element
</div>
```

### Typography

Uses **Inter** font family with responsive scaling:

```tsx
// Headings
<h1 className="text-4xl font-bold">Large Heading</h1>
<h2 className="text-3xl font-bold">Medium Heading</h2>
<h3 className="text-2xl font-bold">Small Heading</h3>

// Body text
<p className="text-base">Normal text</p>
<p className="text-muted-foreground">Muted text</p>

// Code
<code className="bg-muted rounded px-2 py-1 font-mono text-sm">
  Code snippet
</code>
```

## 🧩 Component Usage

### Button Component

6 variants available: `default`, `secondary`, `outline`, `destructive`, `ghost`, `link` 3 sizes:
`sm`, `default`, `lg`

```tsx
import { Button } from "@/components/ui/button";

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Delete</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// With icons
<Button>
  <Download className="mr-2 h-4 w-4" />
  Download
</Button>
```

### Card Component

3 variants: `default`, `elevated`, `outlined`

```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

<Card variant="elevated">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>;
```

### Badge Component

4 variants: `default`, `secondary`, `destructive`, `outline`

```tsx
import { Badge } from "@/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

## 🌓 Theme System

### Using Theme Provider

The theme system supports dark/light modes with system preference detection:

```tsx
import { useTheme } from "@/app/providers/theme-provider";
import { useTheme } from "@/app/providers/theme-provider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
```

### Theme Values

- `"light"` - Light mode
- `"dark"` - Dark mode
- `"system"` - Follow system preference

## 🎯 Creating New Components

### 1. Component Structure

Follow this pattern for new UI components:

```tsx
// src/components/ui/new-component.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface NewComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary";
  size?: "sm" | "default" | "lg";
}

const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <div
        className={cn(
          "base-styles",
          variant === "secondary" && "secondary-styles",
          size === "lg" && "large-styles",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

NewComponent.displayName = "NewComponent";

export { NewComponent };
```

### 2. Add Variants to Utils

```tsx
// src/lib/utils.ts
export const newComponentVariants = {
  variant: {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  },
  size: {
    sm: "text-sm px-2 py-1",
    default: "text-base px-3 py-2",
    lg: "text-lg px-4 py-3",
  },
};
```

## 📱 Responsive Design

The system uses mobile-first responsive design:

```tsx
// Mobile first approach
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

// Grid layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Content */}
</div>

// Hide/show elements
<div className="hidden lg:block">
  Desktop only content
</div>

<div className="block lg:hidden">
  Mobile only content
</div>
```

**Breakpoints:**

- `sm:` 640px+ (Small tablets)
- `md:` 768px+ (Tablets)
- `lg:` 1024px+ (Desktops)
- `xl:` 1280px+ (Large screens)

## 🛠️ Customization

### 1. Colors

Edit CSS custom properties in `src/app/globals.css`:

```css
:root {
  --primary: 34 197 94; /* Change primary color */
  --secondary: 255 193 7; /* Change secondary color */
  /* Add new colors */
  --accent: 59 130 246; /* Blue */
}
```

Then use in Tailwind:

```tsx
<div className="bg-accent text-accent-foreground">New accent color</div>
```

### 2. Typography

Update font in `src/app/layout.tsx`:

```tsx
import { Inter, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
```

### 3. Component Variants

Add new variants to existing components:

```tsx
// In src/lib/utils.ts
export const buttonVariants = {
  variant: {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    // Add new variant
    accent: "bg-accent text-accent-foreground",
  },
};
```

## 🧪 Development Workflow

### 1. Starting Development

```bash
# Always start with clean install
npm install

# Start development server
npm run dev

# In another terminal, run type checking
npm run type-check --watch
```

### 2. Before Committing

```bash
# Run all validation checks
npm run validate

# Format code
npm run format

# Check if build works
npm run build
```

### 3. Adding New Features

1. Create components in `src/components/ui/`
2. Add variants to `src/lib/utils.ts`
3. Update showcase in `src/app/page.tsx`
4. Test responsiveness on all breakpoints
5. Verify dark/light mode compatibility

## 🔧 Troubleshooting

### Common Issues

**Build Failures:**

- Check for duplicate imports
- Verify all components are properly exported
- Run `npm run type-check` for TypeScript errors

**Theme Not Working:**

- Ensure `ThemeProvider` wraps your app in `layout.tsx`
- Check CSS custom properties are defined
- Verify `suppressHydrationWarning` is set on `<html>`

**Styling Issues:**

- Use `cn()` utility for conditional classes
- Check Tailwind classes are properly formed
- Verify custom properties use `rgb()` format

**Server Won't Stop:**

- Fixed: Previous infinite loop in ThemeProvider resolved
- Use Ctrl+C to stop development server
- Check for infinite loops in `useEffect` hooks

### Performance Tips

1. **Image Optimization:**

```tsx
import Image from "next/image";

<Image src="/image.jpg" alt="Description" width={500} height={300} className="rounded-lg" />;
```

2. **Dynamic Imports:**

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>,
});
```

3. **Memoization:**

```tsx
import { memo, useMemo } from "react";

const ExpensiveComponent = memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => /* expensive operation */);
  }, [data]);

  return <div>{/* render */}</div>;
});
```

## 📚 Additional Resources

- **Next.js 15 Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS 4**: [tailwindcss.com](https://tailwindcss.com)
- **TypeScript**: [typescriptlang.org](https://www.typescriptlang.org)
- **Accessibility Guidelines**: [web.dev/accessibility](https://web.dev/accessibility)

## 🤝 Contributing

1. Follow the existing component patterns
2. Add TypeScript types for all props
3. Include proper accessibility attributes
4. Test in both light and dark modes
5. Ensure responsive design works on all breakpoints
6. Run `npm run validate` before committing

## 📄 File Templates

### New Page Template

```tsx
// src/app/new-page/page.tsx
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function NewPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-6 text-4xl font-bold">New Page</h1>
          {/* Page content */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
```

### New Component Template

```tsx
// src/components/ui/new-component.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface NewComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary";
}

const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "base-component-styles",
          variant === "secondary" && "secondary-styles",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NewComponent.displayName = "NewComponent";

export { NewComponent, type NewComponentProps };
```

---

**Happy coding with your Next.js Modern Design System! 🚀**

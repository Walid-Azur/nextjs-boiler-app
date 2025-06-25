# Modern Design System

A comprehensive design system built with **Next.js 15**, **Tailwind CSS 4**, and modern best
practices. Features an orange and yellow color palette with full dark/light mode support.

## 🚀 Features

- **Next.js 15** with App Router and Turbopack
- **Tailwind CSS 4** with modern CSS architecture
- **TypeScript** with strict typing
- **Inter Font** for clean typography
- **Dark/Light Mode** with system preference detection
- **Orange & Yellow** primary color scheme
- **Responsive Design** with mobile-first approach
- **Accessible Components** following WCAG guidelines
- **Modern UI Components** without external UI libraries

## 🎨 Design Tokens

### Color Palette

- **Primary**: Orange (#FFA500)
- **Secondary**: Yellow (#FFC107)
- **Destructive**: Red (#EF4444)
- **Muted**: Neutral grays
- **Background**: White/Dark with semantic tokens

### Typography

- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 400, 500, 600, 700
- **Responsive Scale**: Mobile-first with proper line heights

## 🏗️ Architecture

### Layout Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page with design system showcase
│   ├── globals.css         # Global styles and design tokens
│   └── providers/
│       └── theme-provider.tsx
├── components/
│   ├── layout/
│   │   ├── header.tsx      # Navigation header with theme toggle
│   │   ├── sidebar.tsx     # Sidebar navigation
│   │   └── footer.tsx      # Footer with links
│   └── ui/
│       ├── button.tsx      # Button component with variants
│       ├── card.tsx        # Card components
│       └── badge.tsx       # Badge component
└── lib/
    └── utils.ts            # Utility functions and style variants
```

### Component System

- **Button**: 6 variants (default, secondary, outline, destructive, ghost, link)
- **Card**: 3 variants (default, elevated, outlined)
- **Badge**: 4 variants (default, secondary, destructive, outline)
- **Layout**: Header, Sidebar, Footer components

## 🛠️ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

3. **Open browser:** Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Dependencies

### Core

- `next`: 15.3.4
- `react`: 19.0.0
- `typescript`: 5.x

### Styling

- `tailwindcss`: 4.x
- `@tailwindcss/postcss`: 4.x

### UI & Icons

- `@headlessui/react`: Unstyled accessible components
- `@heroicons/react`: SVG icon library
- `lucide-react`: Modern icon library
- `clsx`: Conditional class names
- `tailwind-merge`: Merge Tailwind classes

## 🎯 Usage Examples

### Button Component

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">
  Primary Action
</Button>

<Button variant="outline">
  Secondary Action
</Button>
```

### Card Component

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

<Card variant="elevated">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>Card content goes here</CardContent>
</Card>;
```

### Theme Toggle

```tsx
import { useTheme } from "@/app/providers/theme-provider";
import { useTheme } from "@/app/providers/theme-provider";

const { theme, setTheme } = useTheme();

<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</button>;
```

## 🌈 Color Usage

Colors are defined as CSS custom properties and can be used with Tailwind classes:

```css
/* Light mode */
--primary: 255 165 0; /* Orange */
--secondary: 255 193 7; /* Yellow */
--background: 255 255 255; /* White */

/* Dark mode */
--primary: 255 165 0; /* Orange (same) */
--secondary: 255 193 7; /* Yellow (same) */
--background: 10 10 10; /* Dark */
```

```tsx
<div className="bg-primary text-primary-foreground">
  Primary colored element
</div>

<div className="bg-secondary text-secondary-foreground">
  Secondary colored element
</div>
```

## 🔧 Customization

### Adding New Colors

1. Update CSS custom properties in `globals.css`
2. Add corresponding Tailwind classes in `@theme inline`
3. Update TypeScript types if needed

### Creating New Components

1. Create component file in `src/components/ui/`
2. Add variant definitions in `src/lib/utils.ts`
3. Export from component file

## 📱 Responsive Design

The design system follows mobile-first principles:

- Mobile: `sm:` (640px+)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large: `xl:` (1280px+)

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Focus management

## 🚀 Production Build

```bash
npm run build
npm start
```

## 📄 License

MIT License - feel free to use in your projects!

---

_Built with ❤️ using Next.js 15 and Tailwind CSS 4_

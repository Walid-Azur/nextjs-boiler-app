# Claude Code Assistant Instructions - Modern Design System

## Project Overview

This is a **Next.js 15 Modern Design System** built with:

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Color Scheme**: Green & Yellow primary colors
- **Theme**: Dark/Light mode support
- **Architecture**: Component-based design system

## Development Environment Setup

### Key Commands

```bash
npm run dev          # Development server with Turbopack
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint checking
npm run type-check   # TypeScript validation
npm run validate     # Run all checks
```

### Development Guidelines

- **Build Process**: Always run `npm run build` before committing to ensure no build errors
- **Linting**: Use `npm run lint` to check code quality
- **Type Safety**: Run `npm run type-check` for TypeScript validation

## Project Architecture

### File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with ThemeProvider
│   ├── page.tsx                # Main showcase page
│   ├── globals.css             # Global styles & CSS custom properties
│   └── providers/
│       └── theme-provider.tsx  # Theme management context
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Navigation with theme toggle
│   │   ├── sidebar.tsx         # Side navigation
│   │   └── footer.tsx          # Footer component
│   └── ui/
│       ├── button.tsx          # Button variants
│       ├── card.tsx            # Card components
│       └── badge.tsx           # Badge components
└── lib/
    └── utils.ts                # Utilities & variant functions
```

## Fixed Issues & Lessons Learned

### Critical Fixes Applied ✅

1. **Infinite Loop in ThemeProvider** (`src/app/providers/theme-provider.tsx:61-64`)
   - **Problem**: `setTheme` function was calling itself recursively
   - **Fix**: Renamed state setter to `setThemeState` to avoid naming collision
   - **Impact**: Prevented server hanging and Ctrl+C not working

2. **Duplicate Import Statements**
   - **Problem**: Multiple files had duplicate imports causing build failures
   - **Files Fixed**: 8+ components including layout.tsx, page.tsx, all UI components
   - **Fix**: Removed duplicate imports while preserving functionality

3. **ESLint Configuration**
   - **Problem**: Flat config causing Next.js plugin detection issues
   - **Fix**: Switched to traditional `.eslintrc.json` format
   - **Status**: Warning persists but linting works correctly

## Component Development Patterns

### UI Component Structure

```typescript
// Example: Button component pattern
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-styles",
        secondary: "secondary-styles",
      },
      size: {
        default: "default-size",
        sm: "small-size",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
```

### Theme Provider Pattern

```typescript
// Correct pattern - avoid recursive calls
const [theme, setThemeState] = useState<Theme>(initialValue);

const value = {
  theme,
  setTheme: (newTheme: Theme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme); // Use state setter, not the context function
  },
};
```

## Color System

### CSS Custom Properties (globals.css)

```css
@layer base {
  :root {
    --primary: 34 197 94; /* Green */
    --secondary: 255 193 7; /* Yellow */
    --background: 255 255 255; /* White */
    --foreground: 10 10 10; /* Dark text */
  }

  .dark {
    --background: 10 10 10; /* Dark background */
    --foreground: 255 255 255; /* Light text */
  }
}
```

### Usage in Components

```typescript
// Tailwind classes using custom properties
<div className="bg-primary text-primary-foreground">
  Primary colored element
</div>
```

## Development Workflow

### Pre-Commit Checklist

1. ✅ Run `npm run build` - ensures no build errors
2. ✅ Run `npm run lint` - checks code quality
3. ✅ Run `npm run type-check` - validates TypeScript
4. ✅ Test theme toggle functionality
5. ✅ Verify responsive design
6. ✅ Test server shutdown with Ctrl+C

### Debugging Common Issues

#### Build Failures

- Check for duplicate imports
- Verify all components are properly exported
- Ensure TypeScript types are correct

#### Server Issues

- Look for infinite loops in useEffect or context providers
- Check for uncleaned event listeners
- Verify async operations are properly handled

#### Theme Issues

- Ensure CSS custom properties are defined
- Check dark mode class application
- Verify localStorage access is client-side only

## Dependencies

### Core Dependencies

- `next`: 15.3.4
- `react`: 19.0.0
- `tailwindcss`: 4.x
- `typescript`: 5.x

### UI & Styling

- `clsx`: Conditional class names
- `tailwind-merge`: Merge Tailwind classes
- `lucide-react`: Modern icons
- `class-variance-authority`: Component variants

## Best Practices

### Component Development

- Use `forwardRef` for proper ref handling
- Implement proper TypeScript interfaces
- Follow accessibility guidelines
- Use semantic HTML elements

### Performance

- Avoid infinite loops in useEffect
- Clean up event listeners and timers
- Use proper dependency arrays
- Implement proper error boundaries

### Code Quality

- Remove duplicate imports immediately
- Use consistent naming conventions
- Follow project architecture patterns
- Maintain proper separation of concerns

## Future Enhancements

### Potential Improvements

- Add form components (Input, Select, Textarea)
- Implement toast notifications
- Add data table components
- Create modal/dialog components
- Add animation utilities
- Implement proper error boundaries

### Architecture Considerations

- Consider adding state management (Zustand/Redux)
- Implement proper testing setup
- Add Storybook for component documentation
- Consider adding internationalization (i18n)

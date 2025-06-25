import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, Heart, Palette, Shield, Star, Zap } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, Heart, Palette, Shield, Star, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1">
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="from-primary/10 via-secondary/5 to-background bg-gradient-to-br px-4 py-24">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border px-4 py-2 text-sm">
                <Zap className="text-primary mr-2 h-4 w-4" />
                Modern Design System
              </div>
              <h1 className="from-primary to-secondary mb-6 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent">
                Build Beautiful Interfaces
              </h1>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
                A comprehensive design system built with Next.js 15, Tailwind
                CSS 4, and modern best practices. Green and yellow color palette
                with dark/light mode support.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="px-8 text-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="px-8 text-lg">
                  <Star className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </div>
            </div>
          </section>

          {/* Components Section */}
          <section id="components" className="px-4 py-16">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">Components</h2>
                <p className="text-muted-foreground mx-auto max-w-2xl">
                  Beautifully designed components built with Tailwind CSS 4 and
                  modern React patterns.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Button Examples */}
                <Card>
                  <CardHeader>
                    <CardTitle>Buttons</CardTitle>
                    <CardDescription>
                      Various button variants and sizes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm">Small</Button>
                      <Button>Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Badge Examples */}
                <Card>
                  <CardHeader>
                    <CardTitle>Badges</CardTitle>
                    <CardDescription>
                      Status indicators and labels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="destructive">Error</Badge>
                      <Badge className="bg-green-500 text-white">Success</Badge>
                      <Badge className="bg-blue-500 text-white">Info</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Card Examples */}
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Cards</CardTitle>
                    <CardDescription>
                      Container components for content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Card variant="outlined" className="p-4">
                        <p className="text-sm">Outlined card variant</p>
                      </Card>
                      <Card className="p-4">
                        <p className="text-sm">Default card variant</p>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section id="typography" className="bg-muted/30 px-4 py-16">
            <div className="container mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">Typography</h2>
                <p className="text-muted-foreground">
                  Clean and readable typography using Inter font family.
                </p>
              </div>

              <Card>
                <CardContent className="space-y-8">
                  <div>
                    <h1 className="mb-2 text-4xl font-bold">Heading 1</h1>
                    <h2 className="mb-2 text-3xl font-bold">Heading 2</h2>
                    <h3 className="mb-2 text-2xl font-bold">Heading 3</h3>
                    <h4 className="mb-2 text-xl font-bold">Heading 4</h4>
                    <h5 className="mb-2 text-lg font-bold">Heading 5</h5>
                    <h6 className="text-base font-bold">Heading 6</h6>
                  </div>

                  <div>
                    <p className="mb-4">
                      This is a paragraph with <strong>bold text</strong>,{" "}
                      <em>italic text</em>, and <u>underlined text</u>. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <p className="text-muted-foreground">
                      This is muted text that provides secondary information.
                    </p>
                  </div>

                  <div>
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      const greeting = &quot;Hello, World!&quot;;
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Colors Section */}
          <section id="colors" className="px-4 py-16">
            <div className="container mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">Color Palette</h2>
                <p className="text-muted-foreground">
                  Green and yellow primary colors with semantic color tokens.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Primary Colors */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5" />
                      Primary Colors
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary h-12 w-12 rounded-lg border"></div>
                      <div>
                        <p className="font-medium">Primary</p>
                        <p className="text-muted-foreground text-sm">Green</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary h-12 w-12 rounded-lg border"></div>
                      <div>
                        <p className="font-medium">Secondary</p>
                        <p className="text-muted-foreground text-sm">Yellow</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Semantic Colors */}
                <Card>
                  <CardHeader>
                    <CardTitle>Semantic Colors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-destructive h-12 w-12 rounded-lg border"></div>
                      <div>
                        <p className="font-medium">Destructive</p>
                        <p className="text-muted-foreground text-sm">
                          Error states
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-muted h-12 w-12 rounded-lg border"></div>
                      <div>
                        <p className="font-medium">Muted</p>
                        <p className="text-muted-foreground text-sm">
                          Subtle backgrounds
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-muted/30 px-4 py-16">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">Features</h2>
                <p className="text-muted-foreground mx-auto max-w-2xl">
                  Everything you need to build modern, accessible, and beautiful
                  user interfaces.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Zap className="text-primary mb-4 h-12 w-12" />
                    <CardTitle>Lightning Fast</CardTitle>
                    <CardDescription>
                      Built with Next.js 15 and Turbopack for the fastest
                      development experience.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="text-primary mb-4 h-12 w-12" />
                    <CardTitle>Type Safe</CardTitle>
                    <CardDescription>
                      Full TypeScript support with strict typing for better
                      developer experience.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <Heart className="text-primary mb-4 h-12 w-12" />
                    <CardTitle>Accessible</CardTitle>
                    <CardDescription>
                      Built with accessibility in mind, following WCAG
                      guidelines and best practices.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

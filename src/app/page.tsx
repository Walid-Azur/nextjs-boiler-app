import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Download, Zap, Shield, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-6">
                <Zap className="w-4 h-4 mr-2 text-primary" />
                Modern Design System
              </div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Build Beautiful Interfaces
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                A comprehensive design system built with Next.js 15, Tailwind CSS 4, and modern best practices. 
                Orange and yellow color palette with dark/light mode support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Download className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Star className="w-5 h-5 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </div>
          </section>

          {/* Components Section */}
          <section id="components" className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Components</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Beautifully designed components built with Tailwind CSS 4 and modern React patterns.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Button Examples */}
                <Card>
                  <CardHeader>
                    <CardTitle>Buttons</CardTitle>
                    <CardDescription>Various button variants and sizes</CardDescription>
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
                    <CardDescription>Status indicators and labels</CardDescription>
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
                    <CardDescription>Container components for content</CardDescription>
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
          <section id="typography" className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Typography</h2>
                <p className="text-muted-foreground">
                  Clean and readable typography using Inter font family.
                </p>
              </div>
              
              <Card>
                <CardContent className="space-y-8">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">Heading 1</h1>
                    <h2 className="text-3xl font-bold mb-2">Heading 2</h2>
                    <h3 className="text-2xl font-bold mb-2">Heading 3</h3>
                    <h4 className="text-xl font-bold mb-2">Heading 4</h4>
                    <h5 className="text-lg font-bold mb-2">Heading 5</h5>
                    <h6 className="text-base font-bold">Heading 6</h6>
                  </div>
                  
                  <div>
                    <p className="mb-4">
                      This is a paragraph with <strong>bold text</strong>, <em>italic text</em>, and <u>underlined text</u>.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-muted-foreground">
                      This is muted text that provides secondary information.
                    </p>
                  </div>
                  
                  <div>
                    <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                      const greeting = &quot;Hello, World!&quot;;
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Colors Section */}
          <section id="colors" className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Color Palette</h2>
                <p className="text-muted-foreground">
                  Orange and yellow primary colors with semantic color tokens.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Primary Colors */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="w-5 h-5" />
                      Primary Colors
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary border"></div>
                      <div>
                        <p className="font-medium">Primary</p>
                        <p className="text-sm text-muted-foreground">Orange</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary border"></div>
                      <div>
                        <p className="font-medium">Secondary</p>
                        <p className="text-sm text-muted-foreground">Yellow</p>
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
                      <div className="w-12 h-12 rounded-lg bg-destructive border"></div>
                      <div>
                        <p className="font-medium">Destructive</p>
                        <p className="text-sm text-muted-foreground">Error states</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-muted border"></div>
                      <div>
                        <p className="font-medium">Muted</p>
                        <p className="text-sm text-muted-foreground">Subtle backgrounds</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Features</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to build modern, accessible, and beautiful user interfaces.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Zap className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Lightning Fast</CardTitle>
                    <CardDescription>
                      Built with Next.js 15 and Turbopack for the fastest development experience.
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Type Safe</CardTitle>
                    <CardDescription>
                      Full TypeScript support with strict typing for better developer experience.
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Heart className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Accessible</CardTitle>
                    <CardDescription>
                      Built with accessibility in mind, following WCAG guidelines and best practices.
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

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Feather, Star, Zap } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-background">
          <div className="container mx-auto grid max-w-7xl grid-cols-1 px-6 py-24 lg:grid-cols-2 lg:py-32">
            <div className="flex flex-col justify-center text-center lg:py-12 lg:text-left">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl">
                Build and ship faster than ever before
              </h1>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                A modern design system with a stunning green and yellow color
                palette, dark/light mode support, and a comprehensive set of
                components.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 lg:flex-row">
                <Button size="lg" className="w-full lg:w-auto">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full lg:w-auto"
                >
                  View on GitHub
                </Button>
              </div>
            </div>
            <div className="relative mt-12 h-96 lg:mt-0 lg:h-auto">
              <div className="from-primary/20 via-secondary/10 to-background absolute inset-0 rounded-3xl bg-gradient-to-tr"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/80 relative h-72 w-full max-w-md rounded-2xl border p-6 shadow-2xl backdrop-blur-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                      <Check className="text-primary-foreground h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">Beautiful Components</p>
                      <p className="text-muted-foreground text-sm">
                        Ready to use in your project
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="bg-muted h-4 w-full rounded"></div>
                    <div className="bg-muted h-4 w-5/6 rounded"></div>
                    <div className="bg-muted h-4 w-4/6 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold tracking-tighter">
                Powerful Features
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Everything you need to build modern, accessible, and beautiful
                user interfaces.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  <Feather className="text-primary mb-4 h-12 w-12" />
                  <CardTitle>Highly Customizable</CardTitle>
                  <CardDescription>
                    Easily customize themes, components, and layouts to match
                    your brand.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Check className="text-primary mb-4 h-12 w-12" />
                  <CardTitle>Production Ready</CardTitle>
                  <CardDescription>
                    Optimized for performance and scalability, ready for your
                    next big project.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold tracking-tighter">
                What Our Users Say
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Hear from developers who love building with our design system.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card variant="outlined">
                <CardContent className="space-y-4">
                  <p className="text-lg italic text-foreground">
                    "This design system is a game-changer! The components are
                    beautiful and incredibly easy to use. It saved us weeks of
                    development time."
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=John"
                      alt="John Doe"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-muted-foreground text-sm">
                        Lead Developer
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-primary h-5 w-5 fill-current"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card variant="outlined">
                <CardContent className="space-y-4">
                  <p className="text-lg italic text-foreground">
                    "The dark mode implementation is flawless, and the color
                    palette is stunning. Our users love the new look and feel of
                    our application."
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=Jane"
                      alt="Jane Smith"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-muted-foreground text-sm">
                        UI/UX Designer
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-primary h-5 w-5 fill-current"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">
              Ready to get started?
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Explore the documentation, browse the components, and start
              building your next project with the Modern Design System.
            </p>
            <div className="mt-6">
              <Button size="lg">Explore Components</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

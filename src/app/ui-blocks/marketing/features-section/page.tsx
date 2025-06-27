import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Feather, Zap } from "lucide-react";

export default function FeaturesSectionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 sm:py-32 lg:py-40">
          <div className="container mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Powerful Features
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Everything you need to build modern, accessible, and beautiful
                user interfaces with ease.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Zap className="text-primary mb-4 h-12 w-12" />
                  <CardTitle>Lightning Fast</CardTitle>
                  <CardDescription>
                    Leverage Next.js 15 and Turbopack for an incredibly fast
                    development and build experience.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Feather className="text-primary mb-4 h-12 w-12" />
                  <CardTitle>Highly Customizable</CardTitle>
                  <CardDescription>
                    Tailor every aspect of your design with a flexible theming
                    system and modular components.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Check className="text-primary mb-4 h-12 w-12" />
                  <CardTitle>Production Ready</CardTitle>
                  <CardDescription>
                    Built with performance, accessibility, and scalability in
                    mind for your most demanding projects.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

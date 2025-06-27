import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSectionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Powerful components for your next project
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Beautifully designed and accessible UI components built with
                shadcn/ui and Tailwind CSS. Copy and paste into your apps.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="link">Learn more</Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 top-1/2 -z-10 bg-gradient-to-t from-background to-transparent opacity-50"></div>
          <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-primary/10 to-transparent opacity-50"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export default function MultiColumnPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <aside className="hidden lg:block w-64 border-r bg-muted/40 p-4">
          <Sidebar />
        </aside>
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Multi-Column Layout</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Content Column */}
            <div className="md:col-span-2 bg-card p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
              <p className="text-muted-foreground">
                This is the main content area. It spans two columns on medium
                screens and larger, providing ample space for primary
                information.
              </p>
              <div className="mt-4 h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Main Content Area
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
              <p className="text-muted-foreground">
                This is a sidebar column, ideal for navigation, related links,
                or supplementary information.
              </p>
              <div className="mt-4 h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Sidebar Content
              </div>
            </div>
          </div>

          <div className="mt-8 bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Full Width Section</h2>
            <p className="text-muted-foreground">
              This section demonstrates a full-width content area below the
              multi-column layout.
            </p>
            <div className="mt-4 h-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              Full Width Content
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

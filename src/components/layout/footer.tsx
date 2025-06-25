export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto max-w-screen-2xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="from-primary to-secondary h-6 w-6 rounded bg-gradient-to-br"></div>
              <span className="font-bold">Design System</span>
            </div>
            <p className="text-muted-foreground text-sm">
              A modern design system built with Next.js 15 and Tailwind CSS 4.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Documentation</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Components
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Examples
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Design</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Colors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Typography
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Icons
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Community</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t pt-8 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            © 2025 Design System. Built with Next.js 15 and Tailwind CSS 4.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

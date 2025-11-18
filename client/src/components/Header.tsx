import { SiGooglechrome } from "react-icons/si";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-md -ml-3" data-testid="link-home">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <SiGooglechrome className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Meme Studio</h1>
              <p className="text-xs text-muted-foreground">Documentation</p>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-2">
              <Link
                href="/"
                className={`text-sm font-medium hover-elevate active-elevate-2 px-4 py-2 rounded-md ${
                  isActive('/') ? 'bg-primary/10 text-primary' : ''
                }`}
                data-testid="link-features"
              >
                Features
              </Link>
              <Link
                href="/install"
                className={`text-sm font-medium hover-elevate active-elevate-2 px-4 py-2 rounded-md ${
                  isActive('/install') ? 'bg-primary/10 text-primary' : ''
                }`}
                data-testid="link-install"
              >
                Installation
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/courses", label: "Courses" },
  { path: "/youtube", label: "YouTube" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home-logo">
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-lg transition-all cursor-pointer">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="font-sans font-bold text-xl text-foreground">
                Raj Sir
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  className={`font-body font-medium transition-all ${
                    location === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground"
                  }`}
                  data-testid={`button-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start font-body font-medium ${
                    location === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`button-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

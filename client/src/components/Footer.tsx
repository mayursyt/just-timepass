import { Link } from "wouter";
import { Code2 } from "lucide-react";

const footerLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/courses", label: "Courses" },
  { path: "/youtube", label: "YouTube" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: "fab fa-youtube", url: "https://youtube.com/@razsir5", label: "YouTube" },
  { icon: "fab fa-twitter", url: "#", label: "Twitter" },
  { icon: "fab fa-linkedin", url: "#", label: "LinkedIn" },
  { icon: "fab fa-github", url: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-primary-foreground" />
              <span className="font-sans font-bold text-xl">Raj Sir</span>
            </div>
            <p className="text-primary-foreground/80 font-body">
              Learn Python the Smart Way - Professional Python educator and mentor focused on practical learning.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} data-testid={`link-footer-${link.label.toLowerCase()}`}>
                    <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer font-body">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-all hover-elevate active-elevate-2"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 font-body">
            © 2025 Raj Sir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

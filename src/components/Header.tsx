import { Building2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Über uns", href: "#about" },
    { name: "Leistungen", href: "#services" },
    { name: "Projekte", href: "#projects" },
    { name: "Kontakt", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group" onClick={(e) => scrollToSection(e, "#home")}>
            <Building2 className="h-9 w-9 transition-transform group-hover:scale-110" style={{ color: "#FFC300" }} />
            <span
              className="font-['Poppins'] text-[#222831] transition-colors group-hover:text-[#FFC300]"
              style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.5px" }}
            >
              KLINGER BAUMANAGEMENT
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[#222831] hover:text-[#FFC300] transition-colors font-['Poppins'] relative group"
                style={{ fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.5px" }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC300] transition-all group-hover:w-full"></span>
              </a>
            ))}
            <Button
              style={{
                backgroundColor: "#FFC300",
                color: "#222831",
                borderRadius: "10px",
                padding: "0.75rem 1.75rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
              className="hover:bg-[#222831] hover:text-white transition-all shadow-md hover:shadow-lg hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(e as any, "#contact");
              }}
            >
              TERMIN BUCHEN
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#222831]" />
            ) : (
              <Menu className="h-6 w-6 text-[#222831]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-[#222831] hover:text-[#FFC300] transition-colors font-['Poppins'] px-2"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  {item.name}
                </a>
              ))}
              <Button
                style={{
                  backgroundColor: "#FFC300",
                  color: "#222831",
                  borderRadius: "10px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                }}
                className="hover:bg-[#222831] hover:text-white transition-all w-full"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(e as any, "#contact");
                }}
              >
                TERMIN BUCHEN
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

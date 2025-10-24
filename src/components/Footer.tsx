import { Building2, Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="bg-[#1E1E1E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Logo & Description */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="h-8 w-8 text-white" />
                <span
                  className="font-['Poppins'] text-white"
                  style={{ fontSize: "1.125rem", fontWeight: 700, letterSpacing: "0.5px" }}
                >
                  KLINGER
                </span>
              </div>
              <p className="text-white/70 mb-4 font-['Inter']" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                Ihr zuverlässiger Partner für professionelles Baumanagement seit über 15 Jahren.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h3
                className="mb-6 font-['Poppins'] text-white"
                style={{ fontSize: "1.125rem", fontWeight: 700, letterSpacing: "0.5px" }}
              >
                Navigation
              </h3>
              <ul className="space-y-3 font-['Inter']" style={{ fontSize: "0.9375rem" }}>
                <li>
                  <a href="#about" className="text-white/80 hover:text-[#FFC300] transition-colors">
                    Über uns
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-[#FFC300] transition-colors">
                    Leistungen
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-white/80 hover:text-[#FFC300] transition-colors">
                    Projekte
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-[#FFC300] transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3
                className="mb-6 font-['Poppins'] text-white"
                style={{ fontSize: "1.125rem", fontWeight: 700, letterSpacing: "0.5px" }}
              >
                Kontakt
              </h3>
              <div className="space-y-4 font-['Inter']" style={{ fontSize: "0.9375rem" }}>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: "#FFC300" }} />
                  <div>
                    <p className="text-white/80">Musterstraße 123</p>
                    <p className="text-white/80">10115 Berlin</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0" style={{ color: "#FFC300" }} />
                  <a href="tel:+4930123456789" className="text-white/80 hover:text-[#FFC300] transition-colors">
                    +49 30 123 456 789
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0" style={{ color: "#FFC300" }} />
                  <a href="mailto:info@klinger-bau.de" className="text-white/80 hover:text-[#FFC300] transition-colors">
                    info@klinger-bau.de
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Social Media */}
            <div>
              <h3
                className="mb-6 font-['Poppins'] text-white"
                style={{ fontSize: "1.125rem", fontWeight: 700, letterSpacing: "0.5px" }}
              >
                Folgen Sie uns
              </h3>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-[#FFC300] hover:text-[#222831] transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-[#FFC300] hover:text-[#222831] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-[#FFC300] hover:text-[#222831] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <p className="text-white/70 font-['Inter']" style={{ fontSize: "0.875rem" }}>
                Bleiben Sie auf dem Laufenden über unsere neuesten Projekte und Entwicklungen.
              </p>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 font-['Inter']" style={{ fontSize: "0.875rem" }}>
                © {new Date().getFullYear()} Klinger Baumanagement GmbH. Alle Rechte vorbehalten.
              </p>
              <div className="flex gap-6 font-['Inter']" style={{ fontSize: "0.875rem" }}>
                <a href="#impressum" className="text-white/60 hover:text-[#FFC300] transition-colors">
                  Impressum
                </a>
                <span className="text-white/40">|</span>
                <a href="#datenschutz" className="text-white/60 hover:text-[#FFC300] transition-colors">
                  Datenschutz
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

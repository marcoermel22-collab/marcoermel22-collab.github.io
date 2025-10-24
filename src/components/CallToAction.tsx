import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CallToAction() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1618843312876-afbe4c91736d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYxMjg1OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#222831]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-white mb-8 font-['Poppins'] uppercase tracking-wider"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "2px" }}
          >
            Bauen Sie mit Vertrauen –<br />Klinger Baumanagement
          </h2>
          <p className="text-white/90 mb-10 font-['Inter'] max-w-2xl mx-auto" style={{ fontSize: "1.25rem", lineHeight: 1.7 }}>
            Lassen Sie uns gemeinsam Ihr nächstes Bauprojekt zum Erfolg führen. Professionell. Zuverlässig. Termingerecht.
          </p>
          <Button
            size="lg"
            style={{
              backgroundColor: "#FFC300",
              color: "#222831",
              borderRadius: "10px",
              padding: "1.25rem 3rem",
              fontSize: "1.125rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
            }}
            className="hover:bg-white hover:text-[#222831] transition-all shadow-2xl hover:scale-105"
            onClick={() => scrollToSection("#contact")}
          >
            KONTAKT AUFNEHMEN
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

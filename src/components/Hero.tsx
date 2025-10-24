import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
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
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1501603686470-8e95439b74a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzdW5yaXNlJTIwY3JhbmV8ZW58MXx8fHwxNzYxMjg2MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Construction site at sunrise"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            className="text-white mb-4 font-['Poppins'] uppercase tracking-wider"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "2px",
            }}
          >
            Präzision. Planung. Vertrauen.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p
            className="text-white/90 mb-10 max-w-3xl mx-auto font-['Inter']"
            style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", lineHeight: 1.6, letterSpacing: "0.5px" }}
          >
            Professionelles Baumanagement für Ihr Projekt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            style={{
              backgroundColor: "#FFC300",
              color: "#222831",
              borderRadius: "10px",
              padding: "1.25rem 2.75rem",
              fontSize: "1.125rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
            }}
            className="hover:bg-[#222831] hover:text-white transition-all shadow-2xl hover:shadow-[#FFC300]/50 hover:scale-105"
            onClick={() => scrollToSection("#contact")}
          >
            JETZT TERMIN BUCHEN
          </Button>
          <Button
            size="lg"
            style={{
              backgroundColor: "transparent",
              color: "white",
              borderRadius: "10px",
              padding: "1.25rem 2.75rem",
              fontSize: "1.125rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              border: "2px solid white",
            }}
            className="hover:bg-white hover:text-[#222831] transition-all shadow-2xl hover:scale-105"
            onClick={() => scrollToSection("#projects")}
          >
            UNSERE PROJEKTE
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => scrollToSection("#services")}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-10 h-10 text-white/80 hover:text-[#FFC300] transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}

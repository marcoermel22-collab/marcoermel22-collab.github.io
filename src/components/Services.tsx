import { motion } from "motion/react";
import { ClipboardCheck, HardHat, Wrench, Calculator, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Services() {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Projektmanagement",
      description:
        "Professionelle Koordination aller Projektphasen von der Planung bis zur Abnahme. Wir behalten den Überblick über Termine, Kosten und Qualität.",
    },
    {
      icon: HardHat,
      title: "Bauüberwachung",
      description:
        "Kontinuierliche Kontrolle der Bauausführung vor Ort. Sicherstellung der Einhaltung aller Vorschriften, Qualitätsstandards und Terminvorgaben.",
    },
    {
      icon: Calculator,
      title: "Planung & Kalkulation",
      description:
        "Detaillierte Planungs- und Kalkulationsleistungen für Ihr Bauprojekt. Präzise Kostenschätzungen und optimierte Budgetplanung.",
    },
    {
      icon: Wrench,
      title: "Sanierung & Modernisierung",
      description:
        "Fachgerechte Sanierung und Modernisierung von Bestandsgebäuden. Von der Bestandsaufnahme bis zur vollständigen Revitalisierung Ihrer Immobilie.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[#222831] mb-4 font-['Poppins'] uppercase tracking-wider"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "2px" }}
          >
            Unsere Leistungen
          </h2>
          <p className="text-[#4B5563] font-['Inter'] max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Professionelle Baumanagement-Dienstleistungen für jede Projektphase
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-[#F7F7F7] p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-[#FFC300] hover:scale-105"
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ backgroundColor: "#FFC300" }}
                >
                  <Icon className="w-8 h-8 text-[#222831] group-hover:scale-110 transition-transform" />
                </div>
                <h3
                  className="text-[#222831] mb-4 font-['Poppins']"
                  style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.5px" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#4B5563] mb-6 font-['Inter']"
                  style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
                >
                  {service.description}
                </p>
                <Button
                  variant="ghost"
                  className="text-[#FFC300] hover:text-[#E6A100] p-0 h-auto font-['Poppins'] group-hover:translate-x-2 transition-transform"
                  style={{ fontWeight: 600 }}
                >
                  Mehr erfahren <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Clock, Shield, Linkedin } from "lucide-react";

export function About() {
  const values = [
    { icon: Award, title: "Qualität", description: "Höchste Standards in jedem Projekt" },
    { icon: Users, title: "Zuverlässigkeit", description: "Ihr vertrauensvoller Partner" },
    { icon: Clock, title: "Pünktlichkeit", description: "Termine werden eingehalten" },
    { icon: Shield, title: "Ehrlichkeit", description: "Transparente Kommunikation" },
  ];

  const team = [
    {
      name: "Michael Klinger",
      role: "Geschäftsführer & Bauleiter",
      experience: "25 Jahre Erfahrung im Hochbau",
      phone: "+49 30 123 456 789",
      specialty: "Großprojekte & Gewerbeimmobilien",
      image: "https://images.unsplash.com/photo-1629507313712-f21468afdf2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTI1MzU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Sarah Weber",
      role: "Architektin",
      experience: "15 Jahre Erfahrung in Planung & Design",
      phone: "+49 30 123 456 790",
      specialty: "Wohnbau & Nachhaltigkeit",
      image: "https://images.unsplash.com/photo-1585554414787-09b821c321c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTIxMzE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Thomas Bauer",
      role: "Projektmanager",
      experience: "18 Jahre Erfahrung in Projektsteuerung",
      phone: "+49 30 123 456 791",
      specialty: "Industrieprojekte & Sanierung",
      image: "https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTI2ODIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Lisa Hoffmann",
      role: "Bauleiterin",
      experience: "12 Jahre Erfahrung in Bauüberwachung",
      phone: "+49 30 123 456 792",
      specialty: "Qualitätssicherung & Koordination",
      image: "https://images.unsplash.com/photo-1659353587484-a83a0ddf8aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYW5hZ2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxMjg2Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Martin Schmidt",
      role: "Kalkulator",
      experience: "20 Jahre Erfahrung in Kostenkalkulation",
      phone: "+49 30 123 456 793",
      specialty: "Budgetplanung & Wirtschaftlichkeit",
      image: "https://images.unsplash.com/photo-1570215171424-f74325192b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEyODY3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#F7F7F7]">
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
            Über Uns
          </h2>
          <p className="text-[#4B5563] font-['Inter'] max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Ihr erfahrener Partner für professionelles Baumanagement seit über 15 Jahren
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-[#222831] mb-6 font-['Poppins']"
              style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "0.5px" }}
            >
              Erfahrung, die zählt
            </h3>
            <p className="text-[#4B5563] mb-6 font-['Inter']" style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
              Die Klinger Baumanagement GmbH ist seit über 15 Jahren ein verlässlicher Partner für anspruchsvolle
              Bauprojekte in ganz Deutschland. Unser Team aus hochqualifizierten Ingenieuren, Architekten und
              Bauleitern verfügt über umfassende Expertise in allen Bereichen des Baumanagements.
            </p>
            <p className="text-[#4B5563] mb-6 font-['Inter']" style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
              Von der ersten Projektidee bis zur schlüsselfertigen Übergabe begleiten wir Sie mit Kompetenz,
              Zuverlässigkeit und persönlichem Engagement. Dabei legen wir besonderen Wert auf termingerechte
              Ausführung, kostenbewusste Planung und kompromisslose Qualität.
            </p>
            <p className="text-[#4B5563] font-['Inter']" style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
              Unsere Philosophie ist einfach: Wir bauen Vertrauen durch Präzision, Ehrlichkeit und erstklassige
              Leistung. Ihre Vision ist unser Auftrag – und Ihr Erfolg ist unser Ziel.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1636414722386-a73bd3fc368c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYxMjg2MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Klinger Baumanagement Team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Yellow accent box */}
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg -z-10"
              style={{ backgroundColor: "#FFC300" }}
            ></div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FFC300" }}
                >
                  <Icon className="w-10 h-10 text-[#222831]" />
                </div>
                <h4
                  className="text-[#222831] mb-2 font-['Poppins']"
                  style={{ fontSize: "1.125rem", fontWeight: 700 }}
                >
                  {value.title}
                </h4>
                <p className="text-[#4B5563] font-['Inter']" style={{ fontSize: "0.9375rem" }}>
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3
            className="text-[#222831] mb-12 font-['Poppins'] text-center"
            style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "0.5px" }}
          >
            Unser Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Round Profile Photo */}
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-[#FFC300] group-hover:ring-[#E6A100] transition-all">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Name & Role */}
                  <h4
                    className="text-[#222831] mb-2 font-['Poppins']"
                    style={{ fontSize: "1.25rem", fontWeight: 700 }}
                  >
                    {member.name}
                  </h4>
                  <p
                    className="text-[#FFC300] mb-3 font-['Poppins']"
                    style={{ fontSize: "1rem", fontWeight: 600 }}
                  >
                    {member.role}
                  </p>
                  <p className="text-[#4B5563] mb-4 font-['Inter']" style={{ fontSize: "0.9375rem" }}>
                    {member.experience}
                  </p>

                  {/* Additional info shown on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                    <p
                      className="text-[#222831] font-['Poppins']"
                      style={{ fontSize: "0.875rem", fontWeight: 600 }}
                    >
                      {member.specialty}
                    </p>
                    <p className="text-[#4B5563] font-['Inter']" style={{ fontSize: "0.875rem" }}>
                      {member.phone}
                    </p>
                    <div className="flex justify-center gap-3 pt-2">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#FFC300] flex items-center justify-center hover:bg-[#222831] transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-[#222831] hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

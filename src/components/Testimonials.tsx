import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Die Zusammenarbeit mit Klinger Baumanagement war erstklassig. Unser Projekt wurde pünktlich und im Budget fertiggestellt. Das Team ist hochprofessionell und zuverlässig.",
      author: "Dr. Andreas Müller",
      company: "Geschäftsführer, Müller Immobilien GmbH",
      project: "Wohnkomplex Berlin-Mitte",
    },
    {
      quote:
        "Selten habe ich eine so präzise und transparente Projektabwicklung erlebt. Klinger Baumanagement hat unser Industrieprojekt mit höchster Kompetenz gesteuert.",
      author: "Sabine Richter",
      company: "Leiterin Facility Management, TechCorp AG",
      project: "Produktionshalle Hamburg",
    },
    {
      quote:
        "Von der ersten Beratung bis zur Schlüsselübergabe – alles perfekt organisiert. Das Team hat unsere Altbausanierung zu einem vollen Erfolg gemacht.",
      author: "Thomas Bergmann",
      company: "Eigentümer, Bergmann Properties",
      project: "Denkmalgeschützte Sanierung München",
    },
  ];

  return (
    <section className="py-24 bg-white">
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
            Kundenstimmen
          </h2>
          <p className="text-[#4B5563] font-['Inter'] max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Was unsere Kunden über uns sagen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#F7F7F7] p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              <div
                className="absolute -top-4 left-8 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#FFC300" }}
              >
                <Quote className="w-6 h-6 text-[#222831]" />
              </div>
              <p
                className="text-[#4B5563] mb-6 mt-4 font-['Inter'] italic"
                style={{ fontSize: "1rem", lineHeight: 1.7 }}
              >
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="text-[#222831] font-['Poppins']" style={{ fontSize: "1rem", fontWeight: 700 }}>
                  {testimonial.author}
                </p>
                <p className="text-[#4B5563] font-['Inter']" style={{ fontSize: "0.875rem" }}>
                  {testimonial.company}
                </p>
                <p
                  className="text-[#FFC300] font-['Inter'] mt-2"
                  style={{ fontSize: "0.8125rem", fontWeight: 600 }}
                >
                  Projekt: {testimonial.project}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";
import Masonry from "react-responsive-masonry";

type ProjectCategory = "Alle" | "Wohnbau" | "Industrie" | "Sanierung";

interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  category: ProjectCategory;
  image: string;
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Alle");
  const [lightboxImage, setLightboxImage] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Modernes Wohnquartier",
      location: "Berlin",
      year: "2024",
      category: "Wohnbau",
      image:
        "https://images.unsplash.com/photo-1747555094127-9a922d56a64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MTIwMTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "Produktionshalle",
      location: "Hamburg",
      year: "2023",
      category: "Industrie",
      image:
        "https://images.unsplash.com/photo-1487491424367-7571f9afbb30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MTIyNTY3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      title: "Altbausanierung",
      location: "München",
      year: "2023",
      category: "Sanierung",
      image:
        "https://images.unsplash.com/photo-1634586648651-f1fb9ec10d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHJlbm92YXRpb258ZW58MXx8fHwxNzYxMjA1NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      title: "Bürokomplex",
      location: "Frankfurt",
      year: "2024",
      category: "Wohnbau",
      image:
        "https://images.unsplash.com/photo-1560922604-d08a31f8f7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NjEyODYxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      title: "Mehrfamilienhaus",
      location: "Köln",
      year: "2023",
      category: "Wohnbau",
      image:
        "https://images.unsplash.com/photo-1532562145520-b8cce2486cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYxMjg2MTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      title: "Logistikzentrum",
      location: "Düsseldorf",
      year: "2024",
      category: "Industrie",
      image:
        "https://images.unsplash.com/photo-1716915372367-c170ee1e7d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYxMjMxNTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const categories: ProjectCategory[] = ["Alle", "Wohnbau", "Industrie", "Sanierung"];

  const filteredProjects =
    selectedCategory === "Alle" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-[#222831] mb-4 font-['Poppins'] uppercase tracking-wider"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "2px" }}
          >
            Unsere Projekte
          </h2>
          <p className="text-[#4B5563] font-['Inter'] max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Ausgewählte Referenzen erfolgreicher Bauvorhaben
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-['Poppins'] transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#FFC300] text-[#222831] shadow-lg scale-105"
                  : "bg-white text-[#4B5563] hover:bg-[#FFC300] hover:text-[#222831]"
              }`}
              style={{ fontWeight: 600, letterSpacing: "0.5px" }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div layout>
          <Masonry columnsCount={3} gutter="1.5rem" className="max-md:!grid max-md:!grid-cols-1 max-lg:!grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setLightboxImage(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3
                    className="text-white mb-1 font-['Poppins']"
                    style={{ fontSize: "1.25rem", fontWeight: 700 }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-white/90 font-['Inter']" style={{ fontSize: "0.9375rem" }}>
                    {project.location} • {project.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#FFB400] transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white font-['Poppins'] mb-2" style={{ fontSize: "2rem", fontWeight: 700 }}>
                {lightboxImage.title}
              </h3>
              <p className="text-white/80 font-['Inter']" style={{ fontSize: "1.125rem" }}>
                {lightboxImage.location} • {lightboxImage.year}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

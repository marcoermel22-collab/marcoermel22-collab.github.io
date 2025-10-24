import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { CallToAction } from "./components/CallToAction";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Impressum } from "./components/Impressum";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <Header />
      <Hero />
      <Services />
      <About />
      <CallToAction />
      <Projects />
      <Contact />
      <Impressum />
      <Footer />
      <BackToTop />
    </div>
  );
}

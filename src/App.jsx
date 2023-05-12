// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import { content } from "./Content";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Ghouma Mohamed</h6>
        <p>{content.Footer.text}</p>
      </footer>
    </div>
  );
};

export default App;

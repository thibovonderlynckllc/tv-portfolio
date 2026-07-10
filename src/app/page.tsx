import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ServicesBar from "./components/ServicesBar";
import MySkills from "./components/MySkills";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <ServicesBar />
      <MySkills />
      <Experience />
      <MyProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

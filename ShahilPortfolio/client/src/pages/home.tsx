import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}

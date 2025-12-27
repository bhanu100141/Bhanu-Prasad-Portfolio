import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import TopNav from "@/components/TopNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <TopNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

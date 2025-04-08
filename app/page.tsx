import Hero from "@/components/hero"
import About from "@/components/about"
import Timeline from "@/components/timeline"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Involvement from "@/components/involvement"
import Contact from "@/components/contact"
import ScrollProgress from "@/components/scroll-progress"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Involvement />
      <Contact />
    </main>
  )
}


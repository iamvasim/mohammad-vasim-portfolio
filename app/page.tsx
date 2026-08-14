import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Stats } from '@/components/portfolio/stats'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { Research } from '@/components/portfolio/research'
import { Achievements } from '@/components/portfolio/achievements'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'
import { CustomCursor } from '@/components/portfolio/custom-cursor'
import { SmoothScroll } from '@/components/portfolio/smooth-scroll'

export default function Page() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Research />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}

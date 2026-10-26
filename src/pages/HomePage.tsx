import { About } from '../sections/About/About'
import { Contact } from '../sections/Contact/Contact'
import { Experience } from '../sections/Experience/Experience'
import { Hero } from '../sections/Hero/Hero'
import { Projects } from '../sections/Projects/Projects'
import { Skills } from '../sections/Skills/Skills'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

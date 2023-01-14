import About from '../src/components/partial/home/Abt'
import Experience from '../src/components/partial/home/Experience'
import Hero from '../src/components/partial/home/Hero'
import Hire from '../src/components/partial/home/Hire'
import Portfolio from '../src/components/partial/home/Portfolio'
import Work from '../src/components/partial/home/Work'

export default function Home() {
  return (
    <>
      <main>
       <Hero />
       <Work />
       <About />
       <Experience />
       <Portfolio />
       <Hire />
      </main>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import About from '../src/components/partial/home/Abt'
import Experience from '../src/components/partial/home/Experience'
import Hero from '../src/components/partial/home/Hero'
import Hire from '../src/components/partial/home/Hire'
import Portfolio from '../src/components/partial/home/Portfolio'
import Work from '../src/components/partial/home/Work'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page | Kingsley Etoka</title>
        <meta name="description" content="I'm a Fullstack Web and Mobile App Developer With Over 6 years of experience building Industry Leading Web and Mobile App Solutions with next gen technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

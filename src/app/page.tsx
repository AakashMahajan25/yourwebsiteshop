//main Page
import ClientMarque from '@/components/ClientMarque'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import WhyUs from '@/components/WhyUs'
import React from 'react'


const Home:React.FC = () => {
  return (
    <div>
      <Hero />
      <ClientMarque />
      <Projects />
      <WhyUs />
      {/* <Testimonials /> */}
      <Faq />
    </div>
  )
}

export default Home

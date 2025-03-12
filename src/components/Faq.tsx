'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconPlus } from '@tabler/icons-react'

const Faq: React.FC = () => {
  const faqs = [
    {
      question: "How long does it take to build a custom website?",
      answer: "Our typical turnaround time is 2-3 weeks for a standard website. However, the exact timeline depends on the project scope, complexity, and your requirements. We provide regular updates every 2 days to keep you informed of the progress."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing starts from $999 for a basic website and varies based on your specific needs. We offer transparent, fixed-price packages with no hidden fees. Each quote includes design, development, responsive optimization, and basic SEO setup."
    },
    {
      question: "Do you provide website maintenance services?",
      answer: "Yes, we offer ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally. This includes regular updates, security monitoring, backups, and technical support when needed."
    },
    {
      question: "Will my website be mobile-friendly?", 
      answer: "Absolutely! All our websites are built with a mobile-first approach and are fully responsive. They adapt seamlessly to all screen sizes including mobile phones, tablets, and desktops."
    },
    {
      question: "What's included in the website development process?",
      answer: "Our process includes custom design, responsive development, content integration, SEO optimization, speed optimization, and thorough testing. We also provide training on how to manage your website's content after launch."
    }
  ]

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  return (
    <div className="max-w-4xl mx-auto px-8 py-32">
      <div className="flex items-center gap-2 text-[#DDFF00] rounded-full mx-auto w-fit px-4 py-2 font-bold">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1L12.78 6.61L19 7.45L14.5 11.79L15.56 18L10 15.09L4.44 18L5.5 11.79L1 7.45L7.22 6.61L10 1Z" fill="#DDFF00"/>
        </svg>
        <h3>FAQs</h3>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">We&apos;ve got the answers</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 ${
              activeIndex === index ? 'bg-[#161717]' : ''
            }`}
          >
            <button
              className="flex justify-between items-center w-full p-6 text-left rounded-2xl"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="text-lg md:text-xl font-medium text-[#c6c6c7]">{faq.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <IconPlus className="transition-transform" />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-base md:text-lg text-[#616060] rounded-b-2xl">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq

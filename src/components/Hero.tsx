"use client"
import { motion, useScroll, useSpring } from 'motion/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import logo1 from '../../public/assets/logos/logo1.png'
// import hero1 from '../../public/assets/hero/hero1.png'
// import hero2 from '../../public/assets/hero/hero2.png'
// import hero3 from '../../public/assets/hero/hero3.png'
// import hero4 from '../../public/assets/hero/hero4.png'
// import hero5 from '../../public/assets/hero/hero5.png'
import Marquee from 'react-fast-marquee'
import { getCalApi } from "@calcom/embed-react";

const Hero: React.FC = () => {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  const { scrollYProgress } = useScroll()

  // Apply smooth motion using useSpring (adds inertia effect)
  // const smoothScroll = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   mass: 0.2,
  // });


  // const translateY1 = useTransform(smoothScroll, [0, 1], [0, -60])
  // const translateY2 = useTransform(smoothScroll, [0, 1], [0, -150])
  // const translateY3 = useTransform(smoothScroll, [0, 1], [0, -75])


  return (
    <div id='hero' className='min-h-[60vh] w-full flex justify-center relative  '>


      {/* <motion.div
        initial={{ scale: 0.8, opacity: 0, translateY: '20px' }} animate={{ scale: 1, opacity: 1, translateY: '0px' }} transition={{ duration: 1, ease: "easeOut", delay: 0.30 }}
        style={{ y: translateY1 }}
        className='absolute w-48 3xl:w-64 left-10 xl:left-10 3xl:left-20 rounded-2xl bottom-1/2 lg:block hidden'>
        <Image src={hero1} alt='' width={1000} className='rounded-2xl' />
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, translateY: '20px' }} animate={{ scale: 1, opacity: 1, translateY: '0px' }} transition={{ duration: 1, ease: "easeOut", delay: 0.30 }}
        style={{ y: translateY2 }}
        className='absolute left-20 xl:left-36 2xl:left-56 rounded-2xl overflow-hidden  -bottom-24 lg:block hidden'>
        <Image src={hero2} alt='' width={1000} className='object-cover 3xl:w-72 w-56 h-[300px] 3xl:h-[350px]' />
      </motion.div> */}

      {/* Right Images */}
      {/* <motion.div
        initial={{ scale: 0.8, opacity: 0, translateY: '20px' }} animate={{ scale: 1, opacity: 1, translateY: '0px' }} transition={{ duration: 1, ease: "easeOut", delay: 0.30 }}
        style={{ y: translateY1 }}
        className='absolute 3xl:w-72 w-48 right-10 3xl:right-20 rounded-2xl bottom-1/2 lg:block hidden'>
        <Image src={hero3} alt='' width={1000} className='rounded-2xl' />
      </motion.div> */}

      {/* <motion.div
        initial={{ scale: 0.8, opacity: 0, translateY: '20px' }} animate={{ scale: 1, opacity: 1, translateY: '0px' }} transition={{ duration: 1, ease: "easeOut", delay: 0.30 }}
        style={{ y: translateY2 }}
        className='absolute  right-24 xl:right-36 2xl:right-56 rounded-2xl overflow-hidden  -bottom-24 lg:block hidden'>
        <Image src={hero4} alt='' width={1000} className='object-cover w-56 h-[300px]' />
      </motion.div> */}


      {/* Center Image */}
      {/* <motion.div
        initial={{ scale: 0.8, opacity: 0, translateY: '20px' }} animate={{ scale: 1, opacity: 1, translateY: '0px' }} transition={{ duration: 1, ease: "easeOut", delay: 0.30 }}
        style={{ y: translateY3 }} className='  absolute   rounded-2xl overflow-hidden  -bottom-44  xl:block hidden'>
        <Image src={hero5} alt='' width={1000} className='object-cover w-56 h-[300px]' />
      </motion.div> */}

      <div className=' overflow-x-hidden'>
        <motion.h1 initial={{ scale: 0.8, opacity: 0, translateY: '60px' }} animate={{ scale: 1, opacity: 1, translateY: '0px' }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} className='bg-clip-text 3xl:mt-16 lg:mt-10 text-transparent text-center bg-gradient-to-r from-[#B4B4AB] to-[#F3F3EA] py-2 3xl:py-4 text-5xl lg:text-7xl 3xl:text-[80px] font-semibold'>Making websites,
          <div className='pt-3 lg:pt-2 3xl:pt-4'>without breaking the bank</div></motion.h1>
        <motion.p initial={{ scale: 0.8, opacity: 0, translateY: '20px' }} animate={{ scale: 1, opacity: 1, translateY: '0px' }} transition={{ duration: 1, ease: "easeOut", delay: 0.30 }} className='max-w-[650px] text-[#7D7F78] text-[18px] lg:text-lg  py-6 mx-auto text-center'>We craft stunning, high-performance websites and web applications that help businesses grow. From custom development to e-commerce solutions, we bring your digital vision to life.</motion.p>

        <motion.div initial={{ scale: 0.8, opacity: 0, translateY: '10px' }} animate={{ scale: 1, opacity: 1, translateY: '0px' }} transition={{ duration: 1, ease: "easeOut", delay: 0.32 }} className='border-[#262626] flex sm:gap-32 bg-[#131313] border rounded-full w-fit p-2  pl-4 mx-auto'>
          <input className='bg-transparent focus:outline-none font-semibold' type="text" placeholder={'name@email.com'} />
          <button data-cal-namespace="30min"
            data-cal-link="aakash-mahajan/30min"

            data-cal-config='{"layout":"month_view"}' className='bg-[#DDFF00] text-black rounded-full px-4 py-3 font-semibold'>
            Book a Call
          </button>
        </motion.div>

        <div className='lg:hidden my-10'>
          <Marquee>
            <Image src={logo1} alt='' className='mx-4 object-cover h-44 max-w-72  rounded-xl' />
            {/* <Image src={hero2} alt='' className='mx-4 object-cover h-44 max-w-72  rounded-xl' />
            <Image src={hero3} alt='' className='mx-4 object-cover h-44 max-w-72  rounded-xl' />
            <Image src={hero4} alt='' className='mx-4 object-cover h-44 max-w-72  rounded-xl' />
            <Image src={hero5} alt='' className='mx-4 object-cover h-44 max-w-72  rounded-xl' /> */}
          </Marquee>
        </div>
      </div>


    </div>
  )
}

export default Hero

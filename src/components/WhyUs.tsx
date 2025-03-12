import React from 'react'
import { MdCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
const WhyUs: React.FC = () => {
  const traditionalAgency = [
    "Slow Implementation",
    "Time consuming, unnecessary meetings",
    "Unnecesary Seperate development",
    "Mediocre work"
  ]

  const Yws = [
    "Lightning fast deliveries (updates every 2 days).",
    "Zero meetings, streamlined and fast communication using Google Meet & Whatsapp.",
    "Custom websites built from scratch.",
    "World class designs."
  ]
  return (
    //   <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    //   {/* Radial gradient for the container to give a faded look */}
    //   <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    //   <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
    //     Backgrounds
    //   </p>
    // </div>

    <div id='whyus' className='my-44'>
      <p className='text-center text-4xl sm:text-5xl font-[500] my-10'>Why choose us?</p>


      <div className='lg:flex items-start mx-auto w-fit  px-4'>
        <div className='bg-[#131313] border-[#262626] border p-4 rounded-xl lg:translate-x-4 -z-10'>
          <p className='text-center text-xl'>Traditional Agencies</p>
          <div className='bg-[#0D0D0D] p-4 border border-[#262626] rounded-xl mt-6 pr-32'>
            {traditionalAgency.map((item, i) => (
              <div key={i} className='py-2 flex items-start gap-2'><MdCancel className='translate-y-1 text-gray-400' />{item}</div>
            ))}
          </div>
        </div>

        <div className='p-2 rounded-full hidden lg:block ' style={{ background: "rgba(255,255,255, 0.2" }}>
          <div className='p-2 rounded-full ' style={{ background: "rgba(255,255,255, 0.2" }}>
            <div className='bg-[#DDFF00] rounded-full text-black font-semibold p-2'>
              V/S
            </div>
          </div>
        </div>

        <div className='bg-[#DDFF00] lg:max-w-[500px] mt-6 lg:mt-0  border-[#262626] border p-4 rounded-xl lg:-translate-x-4 -z-10'>
          <p className='text-center text-xl text-gray-700 font-semibold'>YourWebsite.shop</p>
          <div className='bg-[white] text-black p-4 border  rounded-xl mt-6'>
            {Yws.map((item, i) => (
              <div key={i} className='py-2 flex items-start gap-2'><FaCheck className='text-green-400 translate-y-1' />{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs

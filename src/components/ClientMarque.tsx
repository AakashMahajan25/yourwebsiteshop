import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
import hero1 from '../../public/assets/hero/hero1.png'
import hero2 from '../../public/assets/hero/hero2.png'
import hero3 from '../../public/assets/hero/hero3.png'
import hero4 from '../../public/assets/hero/hero4.png'
import hero5 from '../../public/assets/hero/hero5.png'

const ClientMarque: React.FC = () => {
  const arr = [hero1, hero2, hero3, hero4, hero5]
  return (
    <div className='lg:mt-44 '>
      <p className='text-center text-2xl  py-10 text-[#888888] font-semibold'>Already Chosen by the leaders</p>
      <Marquee className='max-w-[900px] mx-auto rounded-2xl'>
        {arr.map((img, i) => (
          <Image key={i} src={img} alt='' width={1000} className='w-44 mx-4' />
        ))}
      </Marquee>
    </div>
  )
}

export default ClientMarque

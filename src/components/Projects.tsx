import Image from 'next/image'
import React from 'react'
import p1 from '../../public/assets/projects/Picture1.png'
import p2 from '../../public/assets/projects/Picture2.png'
import p3 from '../../public/assets/projects/Picture3.png'
import p4 from '../../public/assets/projects/Picture4.png'
import wordScribble from "../../public/work-scribble.png"
import { StaticImageData } from 'next/image';

interface Project {
    title: string;
    image: StaticImageData;
    category?: string;
    link: string;
}

const projectData: Project[] = [
    {
        title: "Tatsat Yoga School",
        image: p3,
        link: "https://www.tatsatyogaschool.org/",
        category: "Yoga & Wellness"
    },
    {
        title: "Quiro",
        image: p1,
        link: "https://quiro.in",
        category: "Services"
    },
    {
        title: "Lipy AI", 
        image: p2,
        link: "https://lipy.ai",
        category: "Saas"
    },
    {
        title: "Study By U",
        image: p4,
        link: "https://studybyu.com",
        category: "Education"
    }
];

const Projects: React.FC = () => {
    return (
        <div className='lg:mt-44 mt-32 bg-[#0A0A0A] text-white' id='project'>
            {/* <div className='w-fit mx-auto border border-gray-800 rounded-full px-5 py-2 sm:my-2 lg:my-10 xl:my-6 text-gray-300'>Projects</div> */}
            <h2 className='text-4xl sm:text-5xl text-center font-[500] py-10 sm:py-5 lg:py-0 text-white'>Recent Projects</h2>

            <div className='px-2 relative sm:px-10 lg:my-4 lg:px-32 flex md:gap-4 lg:py-10 lg:gap-10 justify-center flex-wrap'>
                <Image src={wordScribble} alt='wordscribble' className='absolute -top-20 hidden lg:block left-44 lg:-top-32 lg:w-[300px]' />
                {projectData.map((project, index) => (
                    <a 
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='group relative my-2 lg:my-0 overflow-hidden w-full rounded-xl md:w-[45%]'
                    >
                        {project.category && (
                            <div className='absolute border-0 group-hover:scale-0 top-2 right-2 bg-[#2a2b2b] rounded-full text-white px-4 py-1 transition-all duration-300'>
                                {project.category}
                            </div>
                        )}
                        <Image src={project.image} alt={project.title} className='group-hover:blur-[3px] w-full rounded-xl transition-all duration-300 group-hover:scale-105 ease-out' />
                        <span className='absolute text-2xl sm:text-4xl lg:text-4xl lg:group-hover:bottom-12 bottom-2 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bottom-4 text-white font-semibold hover:underline'>
                            {project.title}
                        </span>
                    </a>
                ))}
            </div>

            {/* <div className='w-full flex justify-center'>
                <button className='bg-[#2563EB] hover:bg-[#1d4ed8] py-2 px-10 rounded-full text-white transition-colors duration-300'>View All Works</button>
            </div> */}
        </div>
    )
}

export default Projects

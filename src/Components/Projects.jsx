import React from 'react'
import Realstate from "../assets/portfolio/realestate.png"
import Restaurent from "../assets/portfolio/restaurent.png"
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import LinkIcon from "../assets/link.png"
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { projects } from '../Data/project';
const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-black p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
  
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={LinkIcon}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
  
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  };


function Projects() {
    // const portfolios = [
    //     {
    //       id: 1,
    //       src: Realstate,
    //       desc:"gtdtdyfjuv"
    //     },
    //     {
    //       id: 2,
    //       src: Restaurent,
    //       desc:""
    //     },
    //     {
    //       id: 3,
    //       src: "",
    //       desc:""
    //     },
    //     {
    //       id: 4,
    //       src: "",
    //       desc:""
    //     },
    //     {
    //       id: 5,
    //       src: "",
    //       desc:""
    //     },
    //     {
    //       id: 6,
    //       src: "",
    //       desc:""
    //     },
    //   ];
  return (
    <div className='container mx-auto' name="portfolio">
<div className='lg:mt-20 mt-10'>

<div
    
      className=" w-full text-white "
    >
      <div className=" p-4 mx-auto  ">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline ">
          Projects
          </p>
          <p className="py-6">  Things I’ve built so far  </p>
        </div>

        <div className='mt-2  grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 mx-auto gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      </div>
    </div>
</div>

    </div>
  )
}

export default Projects
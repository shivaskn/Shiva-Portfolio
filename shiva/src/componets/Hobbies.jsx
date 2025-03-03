import React from 'react'
import { HOBBIES } from '../constants'
import { MdArrowOutward } from "react-icons/md";
import {motion} from 'framer-motion'

const Hobbies = () => {
  return (
   <section className='pt-15' id='projects'>
    <motion.h2 initial={{ opacity:0, y:-30}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}}  className='mb-8 text-center text-3xl lg:text-4xl font-semibold'>HOBBIES</motion.h2>
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {HOBBIES.map((hobbies)=>(
            <motion.div initial={{ opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} whileHover={{scale:1.05}} transition={{duration:0.5}} className='group relative overflow-hidden rounded-3xl'>
            <motion.img whileHover={{scale:1.1}} src={hobbies.image} alt={hobbies.name} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'/>
            <motion.div initial={{opacity:0}} whileHover={{opacity:1}} transition={{duration:0.5}} className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100'>
             <h3 className='mb-2 text-xl font-semibold'>{hobbies.name}</h3>
             {/* <p className='mb-12 p-4 text-violet-500 font-semibold'>{projects.description}</p> */}
            </motion.div>
            </motion.div>
        ))}
    </div>
   </section>
  )
}

export default Hobbies
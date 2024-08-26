import React from 'react'
import Cyl from './Cyl'
import { motion } from 'framer-motion'

const App = () => {
  

  return (
    <div className='h-screen w-full bg-black relative z-0 flex items-center justify-center'>
      <div className="flex justify-center items-center overflow-hidden w-full absolute bottom-7 z-[999]">
        <motion.h1 animate={{translateX:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:4}} className=' text-[9vw] shrink-0 font-bold uppercase tracking-wider text-white'><span className='textst ml-5'>React</span> Fiber </motion.h1>
        <motion.h1 animate={{translateX:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:4}} className=' text-[9vw] shrink-0 font-bold uppercase tracking-wider text-white'><span className='textst ml-5'>React</span> Fiber </motion.h1>
        <motion.h1 animate={{translateX:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:4}} className=' text-[9vw] shrink-0 font-bold uppercase tracking-wider text-white'><span className='textst ml-5'>React</span> Fiber </motion.h1>
        <motion.h1 animate={{translateX:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:4}} className=' text-[9vw] shrink-0 font-bold uppercase tracking-wider text-white'><span className='textst ml-5'>React</span> Fiber </motion.h1>
      </div>
      <Cyl />
    </div>
  )
}

export default App
'use client'
import { motion } from "framer-motion"

function LandingPageAnimation() {
    const circleVariants = {
        initial: { scale: 0.5, opacity: 0 },
        animate: {
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 100,
            duration: 0.5,
            staggerChildren: 0.2,
          }
        }
      }
    
      

  return (
      <>
<motion.div className="absolute " variants={circleVariants} initial='initial' animate='animate'>
        {[...Array(3)].map((_, index) => {
          return (
            <motion.div key={index} className="w-48 h-48 bg-blue-500 rounded-full absolute " style={{top: `${Math.random()*50}vh`, left: `${Math.random()*50}vh`, zIndex: -1, opacity: 0.5}} initial={{scale: 0}} animate={{scale: 1}} transition={{type: 'spring', stiffness: 100, delay: index * 0.2}} />
          )
        })}
      </motion.div>
      <motion.div className="absolute " variants={circleVariants} initial='initial' animate='animate'>
        {[...Array(1)].map((_, index) => {
          return (
            <motion.div key={index} className="w-48 h-48 bg-blue-500 rounded-full absolute " style={{bottom: `${Math.random()*30}vh`, right: `${Math.random()*30}vh`, zIndex: -1, opacity: 0.5}} initial={{scale: 0}} animate={{scale: 1}} transition={{type: 'spring', stiffness: 100, delay: index * 0.2}} />
          )
        })}
      </motion.div>
      <motion.div className="absolute " variants={circleVariants} initial='initial' animate='animate'>
        {[...Array(2)].map((_, index) => {
          return (
            <motion.div key={index} className="w-48 h-48 bg-blue-500 rounded-full absolute " style={{top: `${Math.random()*40}vh`, right: `${Math.random()*40}vh`, zIndex: -1, opacity: 0.5}} initial={{scale: 0}} animate={{scale: 1}} transition={{type: 'spring', stiffness: 100, delay: index * 0.2}} />
          )
        })}
      </motion.div>
      </>
  )
}

export default LandingPageAnimation
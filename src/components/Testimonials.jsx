import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
import useScrollAnimation from './scrollAnimation';
import { motion } from 'framer-motion';

const Testimonials = () =>  {
  const { ref, mainControls } = useScrollAnimation();
  return(
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'></div>

      <motion.div className='w-full flex-justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 realtive z-[1]' variants={{
        hidden: { opacity: 0, x: -50 }, 
        visible: { opacity: 1, x: 0 }, 
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.5 }}
      ref={ref}
      >
        <h1 className={styles.heading2}>What people are <br className='sm:block hidden'/>saying about us</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on planet earth.</p>
        </div>
      </motion.div>
      <motion.div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]' variants={{
      hidden: { opacity: 0, y: -75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 1.5, delay: 1 }}
    ref={ref}
  >
        {feedback.map((card) =>(
          <FeedbackCard key={card.id} {...card} />
        ))}
      </motion.div>
    </section>
  )
        }


export default Testimonials
import React from 'react'
import { card } from '../assets'
import styles,{layout} from '../style'
import { motion } from 'framer-motion';
import Button from './Button'
import useScrollAnimation from './scrollAnimation';

const CardDeal = () =>  {
  const { ref, mainControls } = useScrollAnimation();
  return (
    <section className={layout.section}>
      <motion.div className={layout.sectionInfo} variants={{
        hidden: { opacity: 0, x: -100 }, 
        visible: { opacity: 1, x: 0 }, 
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.5 }}
      ref={ref}
      >
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Discover superior card deals in just a few simple steps. We make finding the perfect card for you quick and hassle-free. Your ideal financial solution is just moments away.</p>
        <Button styles="mt-10"/>
      </motion.div>

      <motion.div className={layout.sectionImg} variants={{
        hidden: { opacity: 0, x: 100 }, 
        visible: { opacity: 1, x: 0 }, 
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.5 }}
      ref={ref}
      >
        <img src={card} alt='card' className='w-[100%] h-[100%]'/>
      </motion.div>

      
    </section>
  )
}


export default CardDeal
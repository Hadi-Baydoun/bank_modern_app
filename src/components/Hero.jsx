import React, { useEffect,useRef } from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import useScrollAnimation from './scrollAnimation';
import { motion } from 'framer-motion';
import { useClickAnimation } from './buttonAnimation';

const Hero = () =>  {
  const { ref, mainControls } = useScrollAnimation();
  const buttonRef=useRef();
  useClickAnimation(buttonRef,{duration:2000});
  
  return(
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <motion.div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} variants={{
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 0.75, delay: 0.15 }}
    ref={ref}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2' >
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} `}>
          <span className='text-white'>20$</span>  Discount For {" "}
          <span className='text-white'>1 Month</span>  Account
          </p>
        </div>

        <div className='flex flex-row justidy-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>The Next 
          <br className='sm:block hidden' />
          {" "} <span className='text-gradient'>Generation</span> {" "}
          </h1>
          <motion.div className='ss:flex hidden md:mr-4 mr-0' variants={{
      hidden: { opacity: 0,  },
      visible: { opacity: 1, },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 1.5, delay: 1.25 }}
    ref={ref}>
            <div ref={buttonRef}>
            <GetStarted />
            </div>
          </motion.div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
      </motion.div>
      <motion.div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 0.75, delay: 0.15 }}
    ref={ref}
  >
        <img src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}


export default Hero
import React from 'react';
import { motion } from 'framer-motion';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';
import useScrollAnimation from './scrollAnimation';

const Billing = () => {
  const { ref, mainControls } = useScrollAnimation();

  return (
    <section id='product' className={layout.sectionReverse}>
      <motion.div
        className={layout.sectionImgReverse}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0 }}
        ref={ref}
      >
        <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>
      </motion.div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Experience seamless control over your finances with our intuitive billing and invoicing solutions. Your financial control is at your fingertips, making managing your accounts easier than ever before.
        </p>
        <motion.div className='flex flex-row flex-wrap sm:mt-10 mt-6' variants={{
        hidden: { opacity: 0, x: 100 }, 
        visible: { opacity: 1, x: 0 }, 
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.5 }}
      ref={ref}>
          <img src={apple} alt='apple-store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt='google-store' className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </motion.div>
      </div>
    </section>
  );
};

export default Billing;

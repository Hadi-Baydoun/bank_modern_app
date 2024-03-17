import React from 'react'
import { clients } from '../constants'
import styles from '../style'
import useScrollAnimation from './scrollAnimation';
import { motion } from 'framer-motion';


const Clients = () =>  {
  const { ref, mainControls } = useScrollAnimation();
  return(
    <motion.section className={`${styles.flexCenter} my-4`} variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 0.75, delay: 0.15 }}
    ref={ref}
  >
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client)=>(
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain'/>
          </div>
        ))}
      </div>
    </motion.section>
  )
        }


export default Clients
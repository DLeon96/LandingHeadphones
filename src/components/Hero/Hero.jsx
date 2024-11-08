import React, { useState } from 'react';
import Headphone from '../../assets/headphone.png';
import Headphone2 from '../../assets/headphone2.png';
import Headphone3 from '../../assets/headphone3.png';
import { FaWhatsapp } from 'react-icons/fa';
import { UpdateFollower } from 'react-mouse-follower';
import { AnimatePresence, motion } from 'framer-motion';



const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: 'easeOut',
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      }
    }
  }
}


const headphoneData = [
  {
    id: 1,
    image: Headphone, // Cambié aquí para usar la importación
    title: 'Headphone Wireless',
    subtitle: 'Experimenta el sonido como nunca antes',
    price: '$200',
    modal: 'Modal: 2021, Brown',
    bgcolor: '#8b5958',
  },
  {
    id: 2,
    image: Headphone2,
    title: 'Headphone Wireless 2',
    subtitle: 'Sin cables, amplía tu libertad',
    price: '$200',
    modal: 'Modal: 2021, Lime',
    bgcolor: '#638153',
  },
  {
    id: 3,
    image: Headphone3,
    title: 'Headphone Wireless 3',
    subtitle: 'Audio inalámbrico sin interrupciones para tu comodidad diaria',
    price: '$200',
    modal: 'Modal: 2021, Blue',
    bgcolor: '#4A8289',
  },
];

const Hero = () => {
  const [activity, setActivity] = useState(headphoneData[0]);
  const handleActivity = (data) => {
    setActivity(data);
  }

  return (
    <>
      <section className='bg-branDark text-white font-varela'>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[700px]'>


          {/* Headphones */}
          <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
            <div className='space-y-5 text-center md:text-left'>
              <UpdateFollower mouseOptions={
                {
                  backgroundColor: 'white',
                  zIndex: 9999,
                  followSpeed: 0.5,
                  rotate: -720,
                  mixBlendMode: 'difference',
                  scale: 10,
                }
              }>
                <AnimatePresence mode="wait">
                  <motion.h1
                    variants={fadeUp(0)}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                    className='text-5xl lg:text-6xl font-bold font-varela'
                    key={activity.id}
                  >
                    {activity.title}
                  </motion.h1>
                </AnimatePresence>
              </UpdateFollower>
              <AnimatePresence mode="wait">
                <motion.p
                  variants={fadeUp(0.3)}
                  initial='hidden'
                  animate='show'
                  exit='exit'
                  key={activity.id}
                  className='text-sm leading-loose text-white/80'>Audio inalámbrico premium, diseñado para ti.
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  variants={fadeUp(0.3)}
                  initial='hidden'
                  animate='show'
                  exit='exit'
                  key={activity.id}
                  className='text-sm leading-loose text-white/80'>{activity.subtitle}
                </motion.p>
              </AnimatePresence>


              <AnimatePresence mode="wait">
                <UpdateFollower mouseOptions={
                  {
                    zIndex: 9999,
                    backgroundColor: activity.bgcolor,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activity.image} alt="" />
                      </div>
                    ),

                  }}>
                  <motion.button
                    variants={fadeUp(0.3)}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                    key={activity.id}
                    style={{ backgroundColor: activity.bgcolor }}
                    className='px-4 py-2 inline-block font-normal rounded-sm'
                  >
                    Compra y escucha tu música favorita
                  </motion.button>

                </UpdateFollower>
              </AnimatePresence>

              <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                <div className='w-[150px] h-[1px] bg-white'>
                </div>

                <p className='uppercase text-sm'>
                  Diferentes Modelos
                </p>

                <div className='w-[150px] h-[1px] bg-white'>
                </div>

              </div>



              <div className='grid grid-cols-3 gap-16'>
                {headphoneData.map((headphone) => {
                  return (
                    <UpdateFollower
                      mouseOptions={
                        {
                          zIndex: 9999,
                          followSpeed: 0.5,
                          rotate: -720,
                          scale: 5,
                          backgroundColor: headphone.bgcolor,
                          text: 'Ver Detalles',
                          textFontSize: '3px'

                        }
                      }>
                      <div key={headphone.id} onClick={() => handleActivity(headphone)} className='grid grid-cols-2 place-item-center cursor-pointer'>
                        <div>
                          <img src={headphone.image} alt={headphone.id}
                            className="w-[200px] " />
                        </div>
                        <div className='space-y-2'>
                          <p className='text-base font-bold'>{headphone.price}</p>
                          <p className='text-xs font-normal text-nowrap '>{headphone.modal}</p>
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}

              </div>



            </div>
          </div>


          <div className='flex flex-col justify-end items-center'>
            <AnimatePresence mode='wait'>

              <motion.img
                key={activity.id}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
                exit={{ opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2 } }}
                src={activity.image}
                alt=""
                className='w-[350px] md:w-[400px] xl:w-[550px]' />

            </AnimatePresence>
          </div>

          <div>
            <a href="">
              <FaWhatsapp className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference" />
            </a>
          </div>

        </div>

      </section >
    </>
  );
};

export default Hero;

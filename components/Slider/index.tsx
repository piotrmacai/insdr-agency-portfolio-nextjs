'use client'

import React, {useState} from 'react';
import { Controller, Swiper as SwiperType } from 'swiper';
import {Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const TestSlider: React.FC = () => {
  // const [firstSwiper, setFirstSwiper] = useState<SwiperType>();
  // const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className="flex h-50vh md:h-screen lg:h-screen p-0 lg:p-5 mt-20">   
    <div className="flex flex-col w-1/4">
          <motion.div
                    variants={{
                    hidden: {opacity: 0, y: -20,},
                    visible: {  opacity: 1,  y: 0, },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_top text-center mx-auto"
                >
                      <Link href={`/portfolio`}>
                          <h2 className="transform rotate-90 mt-15 mr-30 font-bold text-4xl xl:text-sectiontitle3 text-black dark:text-white md:w-4/5 xl:w-1/2 mx-auto mb-4">
                          Nasze <br></br>Portfolio
                          </h2>  
                       <div className="bg-zumthor mt-20 md:mt-35 dark:bg-blacksection dark:border dark:border-strokedark inline-block rounded-full py-1.5 px-4.5 mb-4">
                            <h4 className="font-medium w-full md:w-auto text-md text-black dark:text-white md:ml-6">
                            🔥 Zobacz Wszystkie Projekty
                            </h4>
                      </div>  
                    </Link>
                </motion.div>

      {/* <h2 className="font-semibold text-4xl text-black dark:text-white mt-7.5 ml-10" >
        Portfolio</h2> */}
    </div>
    <div className="w-full md:w-3/4">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
         className="w-full"
        // modules={[Controller]}
        // onSwiper={setFirstSwiper}
        // controller={firstSwiper ? { control: secondSwiper } : undefined}
      >  <SwiperSlide  className="w-full">
        <Link href="/portfolio" target="_blank" rel="noopener noreferrer">
            <Image
              width={800}
              height={350}
              style={{ borderRadius: '10px' }}
              src="/images/portfolio/piotrmacaidev.jpg"
              alt="Dotted"
            />
          </Link>
        </SwiperSlide>
          <SwiperSlide  className="w-full">
          <Link href="/portfolio" target="_blank" rel="noopener noreferrer">
              <Image
                width={800}
                height={350}
                style={{ borderRadius: '10px' }}
                src="/images/portfolio/ainspire.jpg"
                alt="Dotted"
              />
            </Link>
        </SwiperSlide> 
        <SwiperSlide  className="w-full">
          <Link href="/portfolio" target="_blank" rel="noopener noreferrer">
              <Image
                width={800}
                height={350}
                style={{ borderRadius: '10px' }}
                src="/images/portfolio/skin.jpg"
                alt="Dotted"
              />
            </Link>
        </SwiperSlide> 
        <SwiperSlide  className="w-full">
        <Link href="/portfolio" target="_blank" rel="noopener noreferrer">
            <Image
              width={800}
              height={350}
              style={{ borderRadius: '10px' }}
              src="/images/portfolio/ainsidertools.jpg"
              alt="Dotted"
            />
          </Link>
        </SwiperSlide> 
        <SwiperSlide  className="w-full">
        <Link href="/portfolio" target="_blank" rel="noopener noreferrer">
            <Image
              width={800}
              height={350}
              style={{ borderRadius: '10px' }}
              src="/images/portfolio/afterrave.jpg"
              alt="Dotted"
            />
          </Link>
        </SwiperSlide> 
      
        <SwiperSlide  className="w-full"> 
          <Link href="/portfolio" target="_blank" rel="noopener noreferrer">
            <Image
              width={800}
              height={350}
              style={{ borderRadius: '10px' }}
              src="/images/portfolio/volton.jpg"
              alt="Dotted"
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide  className="w-full">
          <Link href="/portfolio" target="_blank" rel="noopener noreferrer"> 
            <Image
              width={800}
              height={350}
              style={{ borderRadius: '10px' }}
              src="/images/genai/gen_beauty.jpg"
              alt="Dotted"
            />
            </Link>
          </SwiperSlide>

      </Swiper>
      </div>
    </div>
  );
}
export default TestSlider;
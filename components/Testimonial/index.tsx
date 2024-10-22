"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      <section className="pt-25">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: `TESTIMONIALS`,
                subtitle: `OPINIE KLIENTÓW`,
                description: `Zobacz co mówią o Nas inni`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 pb-22.5 mb-20">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Krzysztof Nowaczyk
                      </h4>
                      <p>paintball-osada.pl</p>
                    </div>
                    <Image
                      width={60}
                      height={60}
                      className="rounded-full"
                      src="/images/user/client2.jpg"
                      alt="User"
                    />
                  </div>

                  <p>
                    Nowoczesne strona www pozwoliła zdobyć mi dodatkowych klientów, oraz ugruntować swoją pozycję na rynku okiem klientów.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Bartłomiej Woźniak
                      </h4>
                      <p>volton-install.pl</p>
                    </div>
                    <Image
                      width={60}
                      height={60}
                      className="rounded-full"
                      src="/images/user/client1.jpg"
                      alt="User"
                    />
                  </div>

                  <p>
                    Strona doskonale zoptymalizowana pod SEO pomogła mi zdobyć wielu klientów przez Google.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Janusz Machowski
                      </h4>
                      <p>Szkolajazdymachowski.pl</p>
                    </div>
                    <Image
                      width={60}
                      height={60}
                      className="rounded-full"
                      src="/images/user/client3.jpg"
                      alt="User"
                    />
                  </div>

                  <p>
                    Efekt przeszedł moje oczekiwania - pozyskałem wielu nowych klientów! Polecam! 
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;

"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Motion = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
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
            className="flex flex-col items-center"
          >
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg mb-6">
              <video 
                width="100%" 
                height="auto" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source 
                  src="/images/video/motion-agents.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div>
                <a
                  href="/portfolio"
                  className="flex items-center gap-2.5 text-black dark:text-white mt-7.5 hover:text-primary dark:hover:text-primary"
                >
                  <span className="hover:pr-2 duration-500">{t('ctatoportfolio.button')}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dark:hidden"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>

                  <svg
                    className="hidden dark:block"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.4766 6.16664L6.00658 1.69664L7.18492 0.518311L13.6666 6.99998L7.18492 13.4816L6.00658 12.3033L10.4766 7.83331H0.333252V6.16664H10.4766Z" />
                  </svg>
                </a>
              </div>
          </motion.div>

          
      </section>
    </>
  );
};

export default Motion;


// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useTranslation } from 'react-i18next';

// const CTA = () => {
//   const { t } = useTranslation();

//   return (
//     <>
//       {/* <!-- ===== CTA Start ===== --> */}
//       <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
//         <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
//           <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   x: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   x: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_left md:w-[70%] lg:w-1/2"
//             >
//               <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
//               {t('cta.header1')} <br></br> {t('cta.header2')}
//               </h2>
//               <p>
//               {t('cta.contact')}
//               </p>
//             </motion.div>
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   x: 20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   x: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_right lg:w-[45%]"
//             >
//             </motion.div>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// };

// export default CTA;

"use client";
import React from "react";
import Image from "next/image";
import SectionHeader from "../../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      <section className="pt-15 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: `Our Services`,
                subtitle: `Pricing`,
                description: `For detailed pricing, we encourage you to chat with our AI chatbot or fill out the form on the 'Contact' page.`,
              }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-[1207px] px-4 md:px-8 xl:px-0 relative mt-15 xl:mt-20">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-7.5 xl:gap-12.5">
            
            {/* AI with custom knowledge base for businesses */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
                AI with Custom Knowledge Base for Business
              </h4>
              <p>24/7 Customer Support</p>
              
              <div className="border-t border-stroke dark:border-strokedark mt-3 pt-6 pb-12.5">
                <ul>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Intelligent knowledge management of services and products
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Advanced data analysis and processing
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Integrations with existing systems
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    From 249 $
                  </li>
                </ul>
              </div>
              <a href="/contact">
                <button
                  aria-label="purchase this plan"
                  className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
                >
                  Detailed Pricing
                </button>
              </a>
            </div>

            {/* AI for sales lead generation */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
                AI Chatbots for Sales Lead Generation
              </h4>
              <p>Customer Acquisition</p>
              <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
                <ul>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Automatic lead generation
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Personalized conversion paths
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Interactive contact forms
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Integrations and automations with other platforms
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    From 499 $
                  </li>
                </ul>
              </div>
              <a href="/contact">
                <button
                  aria-label="purchase this plan"
                  className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
                >
                  Detailed Pricing
                </button>
              </a>
            </div>

            {/* Advanced AI Chatbots for ecommerce */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
                Advanced AI Chatbots for Ecommerce
              </h4>
              <p>Personalized product recommendations, real-time customer support, order management, simplifying the purchasing process.</p>
              <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
                <ul>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Real-time customer support
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Personalized product recommendations
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Order management
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Process automations and integrations with CRM platforms
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    From 799 $
                  </li>
                </ul>
              </div>
              <a href="/contact">
                <button
                  aria-label="purchase this plan"
                  className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
                >
                  Detailed Pricing
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;





// "use client";
// import React from "react";
// import Image from "next/image";
// import SectionHeader from "../../Common/SectionHeader";

// const Pricing = () => {
//   return (
//     <>
//       <section className="pt-15 pb-20 lg:pb-25 xl:pb-30">
//         <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
//           <div className="animate_top text-center mx-auto">
//             <SectionHeader
//               headerInfo={{
//                 title: `Nasze Usługi`,
//                 subtitle: `Cennik`,
//                 description: `By uzyskać szczegółową wycenę zachęcamy do rozmowy z naszych chatbotem AI lub wypełnienia formularza na stronie 'Kontakt'`,
//               }}
//             />
//           </div>
//         </div>

//         <div className="mx-auto max-w-[1207px] px-4 md:px-8 xl:px-0 relative mt-15 xl:mt-20">
//           <div className="absolute -bottom-15 -z-1 w-full h-full">
//             <Image
//               fill
//               src="./images/shape/shape-dotted-light.svg"
//               alt="Dotted"
//               className="dark:hidden"
//             />
//           </div>
//           <div className="flex flex-wrap lg:flex-nowrap justify-center gap-7.5 xl:gap-12.5">
//             <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">

//               <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
//                 Marketing / Social Media
//               </h4>
//               <p>Mające na celu bezpośrednio przyciągnąć nowych klientów</p>

//               <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
//                 <ul>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Kampanie ads: od 999 pln
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Social media management + contant: od 999 pln
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0 opacity-40">
//                     Konsultacje i audyty: od 199 pln
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0 opacity-40">
//                     SEO i Pozycjonownie Google: od 999 pln
//                   </li>
//                 </ul>
//               </div>

//               <a
//                   href="/contact"
//                 >
//               <button
//                 aria-label="purchase this plan"
//                 className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
//               >
//                 <span className="hover:pr-2 duration-500"> Szczegółowa wycena</span>
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 14 14"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </button>
//               </a>
//             </div>



//             <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
//               <div className="absolute top-7.5 -right-3.5 -rotate-90 rounded-tl-full rounded-bl-full bg-primary font-medium text-white text-metatitle uppercase py-1.5 px-4.5">
//                 popular
//               </div>
//               <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
//                 Strony i platformy internetowe
//               </h4>
//               <p>Stworzone dokładnie dla Twoich potrzeb.</p>

//               <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
//                 <ul>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Landing page/strony wizytówki: od 999 pln
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Strona wizytówka: od 1399 pln
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Sklep internetowy od 1799 pln
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0 opacity-40">
//                     Indywidualne projekty: od 1999 pln
//                   </li>
//                 </ul>
//               </div>

//               <a
//                   href="/contact"
//                 >
//               <button
//                 aria-label="purchase this plan"
//                 className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
//               >
//                 <span className="hover:pr-2 duration-500"> Szczegółowa wycena</span>
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 14 14"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </button>
//               </a>
//             </div>





//             <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
//               <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
//                 AI & Automatyzacje
//               </h4>
//               <p>Procesów oraz różnych, powtarzalnych zadań w Twojej firmie</p>

//               <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
//                 <ul>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Chatboty AI z customową bazą wiedzy: od 999 pln
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Chatboty dla wsparcia klienta / generacji leadów: od 1499 pln
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Indywidualne projekty: od 1999 pln
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Automatyzacje: od 999 pln
//                   </li>
//                 </ul>
//               </div>
//               <a href="/contact">
//               <button
//                 aria-label="purchase this plan"
//                 className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
//               >
//                 <span className="hover:pr-2 duration-500"> Szczegółowa wycena</span>
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 14 14"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Pricing;

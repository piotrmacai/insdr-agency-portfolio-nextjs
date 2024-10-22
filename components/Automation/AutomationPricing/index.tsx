"use client";
import React from "react";
import Image from "next/image";
import SectionHeader from "../../Common/SectionHeader";

const WebPricing = () => {
  return (
    <>
      <section className="pt-15 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: `Our Services`,
                subtitle: `Pricing`,
                description: `For a detailed quote, we invite you to talk to our advisor or fill out the contact form on the 'Contact' page.`,
              }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-[1207px] px-4 md:px-8 xl:px-0 relative mt-15 xl:mt-20">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-7.5 xl:gap-12.5">
            
            {/* Websites and Landing Pages */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
                Websites and Landing Pages
              </h4>
              <p>Increase your visibility and conversion with professionally designed websites and landing pages.</p>
              <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
                <ul>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Any but always modern design
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Full responsiveness
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Any solutions and features
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    UI/UX designs
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Implementation of projects with pixel-perfect accuracy
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Excellent optimization for loading speed
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Websites optimized for top positions in Google
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Integrations with analytics tools
                  </li>
                </ul>
              </div>
              <a href="/contact">
                <button
                  aria-label="purchase this plan"
                  className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
                >
                  From 999 pln
                </button>
              </a>
            </div>

            {/* Online Stores */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
                Online Stores
              </h4>
              <p>Build an effective online store with our comprehensive e-commerce design and development services.</p>
              <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
                <ul>
                <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Any integrations with payment processors and couriers
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Integrations with external warehouses
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Integrations with CRM systems and email marketing systems
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Integrations with email marketing systems
                  </li>
                <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Any but always modern design
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Full responsiveness
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Any solutions and features
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    UI/UX designs
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Implementation of projects with pixel-perfect accuracy
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Excellent optimization for loading speed
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Websites optimized for top positions in Google
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Integrations with analytics tools
                  </li>
                </ul>
              </div>
              <a href="/contact">
                <button
                  aria-label="purchase this plan"
                  className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
                >
                  From 2499 pln
                </button>
              </a>
            </div>

            {/* Custom Projects */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
                Custom Projects
              </h4>
              <p>Realize your unique vision with our services tailored to the individual needs of your project.</p>
              <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
                <ul>
                <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Custom web applications created for individual needs
                  </li>
                <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Projects in React.js / Next.js
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Projects in HTML/CSS/JS
                  </li>
                  <li>
                  Intuitive and user-friendly interfaces
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Excellent optimization for loading speed
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Websites optimized for top positions in Google
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    Integrations with analytics tools
                  </li>
                </ul>
              </div>
              <a href="/contact">
                <button
                  aria-label="purchase this plan"
                  className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
                >
                  Detailed Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebPricing;



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
//                 description: `By uzyskać szczegółową wycenę zachęcamy do rozmowy z naszym chatbotem AI lub wypełnienia formularza na stronie 'Kontakt'`,
//               }}
//             />
//           </div>
//         </div>

//         <div className="mx-auto max-w-[1207px] px-4 md:px-8 xl:px-0 relative mt-15 xl:mt-20">
//           <div className="flex flex-wrap lg:flex-nowrap justify-center gap-7.5 xl:gap-12.5">
            
//             {/* Chatboty AI z customową bazą wiedzy dla biznesu */}
//             <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
//               <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
//                 AI z customową bazą wiedzy dla biznesu
//               </h4>
//               <p>Wsparcie klienta 24/7 </p>
              
//               <div className="border-t border-stroke dark:border-strokedark mt-3 pt-6 pb-12.5">
//                 <ul>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                   Inteligentne zarządzanie wiedzą na temat usług i produktów
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                   Zaawansowane analizy i przetwarzanie danych
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                   Integracje z istniejącymi systemami
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Od 999 pln
//                   </li>
//                 </ul>
//               </div>
//               <a href="/contact">
//                 <button
//                   aria-label="purchase this plan"
//                   className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
//                 >
//                   Szczegółowa wycena
//                 </button>
//               </a>
//             </div>

//             {/* Chatboty AI dla generacji leadów sprzedażowych */}
//             <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
//               <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
//                 Chatboty AI dla generacji leadów sprzedażowych
//               </h4>
//               <p>Pozyskiwanie klientów </p>
//               <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
//                 <ul>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                   Automatyczne generowanie leadów
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                   Personalizowane ścieżki konwersji
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                   Interaktywne formularze kontaktowe
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Integracje i automatyzacje z innymi platformami
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Od 1999 pln
//                   </li>
//                 </ul>
//               </div>
//               <a href="/contact">
//                 <button
//                   aria-label="purchase this plan"
//                   className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
//                 >
//                   Szczegółowa wycena
//                 </button>
//               </a>
//             </div>

//             {/* Chatboty AI dla ecommerce */}
//             <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
//               <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
//                 Chatboty AI dla ecommerce
//               </h4>
//               <p>Personalizowane rekomendacje produktów, wsparcie klienta w czasie rzeczywistym, zarządzanie zamówieniami, upraszczanie procesu zakupowego.</p>
//               <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
//                 <ul>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                   Wsparcie klienta w czasie rzeczywistym
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                   Personalizowane rekomendacje produktów
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                   Zarządzanie zamówieniami
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                   Automatyzacje procesów i integracje z platformami CRM
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Od 2999 pln
//                   </li>
//                 </ul>
//               </div>
//               <a href="/contact">
//                 <button
//                   aria-label="purchase this plan"
//                   className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
//                 >
//                   Szczegółowa wycena
//                 </button>
//               </a>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Pricing;

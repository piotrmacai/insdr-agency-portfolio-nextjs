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
                  From from 249 $
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
                  From from 649 $
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

// const WebPricing = () => {
//   return (
//     <>
//       <section className="pt-15 pb-20 lg:pb-25 xl:pb-30">
//         <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
//           <div className="animate_top text-center mx-auto">
//             <SectionHeader
//               headerInfo={{
//                 title: `Nasze Usługi`,
//                 subtitle: `Cennik`,
//                 description: `Aby uzyskać szczegółową wycenę, zapraszamy do rozmowy z naszym doradcą lub wypełnienia formularza kontaktowego na stronie 'Kontakt'.`,
//               }}
//             />
//           </div>
//         </div>

//         <div className="mx-auto max-w-[1207px] px-4 md:px-8 xl:px-0 relative mt-15 xl:mt-20">
//           <div className="flex flex-wrap lg:flex-nowrap justify-center gap-7.5 xl:gap-12.5">
            
//             {/* Strony www i landing page */}
//             <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
//               <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
//                 Strony WWW i Landing Page
//               </h4>
//               <p>Zwiększ swoją widoczność i konwersję dzięki profesjonalnie zaprojektowanym stronom WWW i landing page'om.</p>
//               <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
//                 <ul>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Dowolny lecz zawsze nowoczesny design
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Pełna responsywność
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Dowolne rozwiązania i funkcje
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Projekty UI/UX
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Wdrożenia projektów z dokładnością pixel-perfect
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Doskonała optymalizacja pod kątem szybkości ładowania
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Strony zoptymalizowane pod topowe pozycje w Google
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Integracje z narzędziami dla analityki
//                   </li>
//                 </ul>
//               </div>
//               <a href="/contact">
//                 <button
//                   aria-label="purchase this plan"
//                   className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
//                 >
//                   Od 999 pln
//                 </button>
//               </a>
//             </div>

//             {/* Sklepy internetowe */}
//             <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
//               <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
//                 Sklepy internetowe
//               </h4>
//               <p>Zbuduj skuteczny sklep online z naszymi kompleksowymi usługami projektowania i rozwoju e-commerce.</p>
//               <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
//                 <ul>
//                 <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Dowolne integracje z operatorami płatnosci oraz kurierami
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Integracje z zewnętrznymi magazynami
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Integracje z systemami CRM i systemami do email marketingu
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Integracje z systemami email marketingu
//                   </li>
//                 <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Dowolny lecz zawsze nowoczesny design
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Pełna responsywność
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Dowolne rozwiązania i funkcje
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Projekty UI/UX
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Wdrożenia projektów z dokładnością pixel-perfect
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Doskonała optymalizacja pod kątem szybkości ładowania
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Strony zoptymalizowane pod topowe pozycje w Google
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Integracje z narzędziami dla analityki
//                   </li>
//                 </ul>
//               </div>
//               <a href="/contact">
//                 <button
//                   aria-label="purchase this plan"
//                   className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
//                 >
//                   Od 2499 pln
//                 </button>
//               </a>
//             </div>

//             {/* Indywidualne projekty */}
//             <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
//               <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
//                 Indywidualne projekty
//               </h4>
//               <p>Zrealizuj swoją unikalną wizję z naszymi usługami dostosowanymi do indywidualnych potrzeb Twojego projektu.</p>
//               <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
//                 <ul>
//                 <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Indywidualne aplikacje webowe stworzone dla indywidualnych potrzeb
//                   </li>
//                 <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Projekty w React.js / Next.js
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Projekty w HTML/CSS/JS
//                   </li>
//                   <li>
//                   Intuicyjne i przyjazne interfejsy
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Doskonała optymalizacja pod kątem szybkości ładowania
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Strony zoptymalizowane pod topowe pozycje w Google
//                   </li>
//                   <li className="text-black dark:text-manatee mb-4 last:mb-0">
//                     Integracje z narzędziami dla analityki
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

// export default WebPricing;



// "use client";
// import React from "react";
// import Image from "next/image";
// import SectionHeader from "../../Common/SectionHeader";

// const WebPricing = () => {
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

// export default WebPricing;

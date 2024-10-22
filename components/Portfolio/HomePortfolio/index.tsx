'use client'

import React, { useState, useEffect } from "react";
import PortfolioItem from "../portfolioItem";
import PortfolioData from "./homePortfolioData";
import Image from "next/image";
import Link from "next/link";
// import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("websites");
  const [filteredPortfolio, setFilteredPortfolio] = useState(PortfolioData);
  const { t } = useTranslation();
 
  useEffect(() => {
    if (selectedTag === "websites") {
      setFilteredPortfolio(PortfolioData);
    } else {
      const filteredItems = PortfolioData.filter((item) =>
        item.tags.includes(selectedTag)
      );
      setFilteredPortfolio(filteredItems);
    }
  }, [selectedTag]);

  const handleTagSelection = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
 <section className="pb-2 lg:py-15 xl:py-10 px-10 sm:px-2 py-10">
        <div className="flex flex-row mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
              <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 sm:pr-2">
                    🔥 {t('portfolio.header')}
                      <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                      </span>
                    </h1>
               </div>
      </div>
      </section> 


      <section className="pb-10 lg:py-15 xl:py-20 lg:px-10 px-1">
          <div className="flex flex-wrap flex-row justify-center gap-6 mt-1 px-6">
                {/* <div className="flex flex-col justify-center items-center">
                    <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16 ">
                    🔥 Nasze Portfolio
                      <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                      </span>
                    </h1>
               </div> */}
                 <button
                    className={`mr-2 px-4 py-2 text-lg font-semibold border-bg-blue-500 rounded-2xl bg-gray-100 ${
                      selectedTag === "websites" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("websites")}
                  >
                    {t('portfolio.button1')}
                  </button>
                    {/* <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "marketing" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("marketing")}
                  >
                    {t('portfolio.button2')}
                  </button> */}
                  <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "ai" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("ai")}
                  >
                    {t('portfolio.button3')}
                  </button>
                  {/* <Link href="/generativeai" target="_blank" rel="noopener noreferrer">
                  <button 
                    className={`mr-2 mt-2 text-lg font-semibold ${
                      selectedTag === "marketing" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {t('portfolio.button4')}
                  </button>
                  </Link> */}
                     <Link href="https://www.behance.net/macaistudio" target="_blank" rel="noopener noreferrer">
                  <button 
                    className={`mr-2 mt-2 text-lg font-semibold ${
                      selectedTag === "marketing" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {t('portfolio.buttonBehance')}
                  </button>
                  </Link>
                  <Link href=" https://www.artstation.com/piotrmacai" target="_blank" rel="noopener noreferrer">
                  <button 
                    className={`mr-2 mt-2 text-lg font-semibold ${
                      selectedTag === "marketing" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {t('portfolio.buttonArtstation')}
                  </button>
                  </Link>
                  <Link href="https://github.com/aiwareai" target="_blank" rel="noopener noreferrer">
                  <button 
                    className={`mr-2 mt-2 text-lg font-semibold ${
                      selectedTag === "marketing" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {t('portfolio.button5')}
                  </button>
                  </Link>
           
             
                
         </div>
              <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
                  {filteredPortfolio.map((post, key) => (
                    <PortfolioItem key={key} portfolio={post} />
                  ))}
                </div>
                
                <div className="flex justify-center">
        <a
        href="/portfolio"
        className="flex pt-2 pb-2 pr-4 pl-4 items-center gap-2.5 text-black dark:text-white mt-12 hover:text-white dark:hover:text-black transition-colors duration-300"
        style={{
          backgroundColor: '#3D52D5',
          borderRadius: '12px',
        }}
      >
    <span className="hover:pr-2 duration-500">{t('portfolio.moreButton')}</span>
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


              </div>
        </section>


    </>
  );
};

export default Portfolio;

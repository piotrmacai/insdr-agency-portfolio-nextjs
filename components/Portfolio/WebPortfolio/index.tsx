'use client'

import React, { useState, useEffect } from "react";
import PortfolioItem from "../portfolioItem";
import PortfolioData from "../portfolioData";
import Image from "next/image";

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("websites");
  const [filteredPortfolio, setFilteredPortfolio] = useState(PortfolioData);

  useEffect(() => {
    if (selectedTag === "websites") {
      // Filter to include only items with the 'websites' tag
      // and exclude items with 'marketing' or 'ai' tags
      const filteredItems = PortfolioData.filter(item =>
        item.tags.includes("websites") && !item.tags.includes("marketing") && !item.tags.includes("ai")
      );
      setFilteredPortfolio(filteredItems);
    } else {
      // For other tags, you might still want to perform some filtering based on the selectedTag
      // This is an example; adjust according to your needs
      const filteredItems = PortfolioData.filter(item =>
        item.tags.includes(selectedTag) && !item.tags.includes("marketing") && !item.tags.includes("ai")
      );
      setFilteredPortfolio(filteredItems);
    }
  }, [selectedTag]);

  const handleTagSelection = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
 <section className="pb-2 lg:py-15 xl:py-10 px-10">
        <div className="flex flex-row mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
              <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16 ">
                    My Portfolio 🔥
                      <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                      </span>
                    </h1>
               </div>
      </div>
      </section> 


          <section className="pb-10 lg:py-15 xl:py-10 px-10">
          <div className="flex flex-row justify-center gap-6 mt-1">
                {/* <div className="flex flex-col justify-center items-center">
                    <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16 ">
                    🔥 Nasze Portfolio
                      <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                      </span>
                    </h1>
               </div> */}
                  {/* <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "websites" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("websites")}
                  >
                    Websites
                  </button> */}

                    {/* <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "marketing" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("marketing")}
                  >
                    Marketing & SEO
                  </button>
                    
                    <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "ai" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("ai")}
                  >
                    AI
                  </button> */}
           
             
                
         </div>
              <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
                  {filteredPortfolio.map((post, key) => (
                    <PortfolioItem key={key} portfolio={post} />
                  ))}
                </div>
              </div>
        </section>


    </>
  );
};

export default Portfolio;

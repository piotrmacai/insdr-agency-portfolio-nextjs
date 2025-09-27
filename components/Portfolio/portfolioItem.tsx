"use client";

import Image from "next/image";
import { Portfolio } from "@/types/portfolio";
import Link from "next/link";
import { motion } from "framer-motion";

const PortfolioItem = ({ portfolio }: { portfolio: Portfolio }) => {
  const { mainImage, title, metadata, urlLink, tags } = portfolio;

  return (
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
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-6 hover:shadow-solid-12 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Image - Left side on desktop */}
        <div className="w-full md:w-1/3 relative">
          <Link href={urlLink} className="block relative aspect-[16/9]" target="_blank" rel="noopener noreferrer">
            <Image 
              src={mainImage} 
              alt={title} 
              fill 
              className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              style={{ objectPosition: 'center' }}
            />
          </Link>
        </div>

        {/* Content - Right side on desktop */}
        <div className="w-full md:w-2/3">
          <h3 className="font-semibold text-xl md:text-2xl text-black dark:text-white mb-3 hover:text-primary dark:hover:text-primary transition-colors duration-300">
            <Link href={urlLink} target="_blank" rel="noopener noreferrer">
              {title}
            </Link>
          </h3>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {metadata}
          </p>
          
          {/* Tags display */}
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block bg-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-700 rounded-full px-3 py-1 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <Link 
            href={urlLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block mt-4 text-primary dark:text-blue-400 font-medium hover:underline"
          >
            View Project →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;

// "use client";

// import Image from "next/image";
// import { Portfolio } from "@/types/portfolio";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const PortfolioItem = ({ portfolio }: { portfolio: Portfolio }) => {
//   const { mainImage, title, metadata, urlLink, tags } = portfolio; // Destructure `tags` from `portfolio`

//   return (
//     <>
//       <motion.div
//         variants={{
//           hidden: {
//             opacity: 0,
//             y: -20,
//           },
//           visible: {
//             opacity: 1,
//             y: 0,
//           },
//         }}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 1, delay: 0.5 }}
//         viewport={{ once: true }}
//         className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-4 pb-2"
//       >
//         <Link href={urlLink} className="block relative aspect-[368/239]" target="_blank" rel="noopener noreferrer">
//           <Image src={mainImage} alt={title} fill style={{ borderRadius: '10px' }}/>
//         </Link>

//         <div className="px-2">
//           <h4 className="font-medium text-md xl:text-xl text-black hover:text-primary dark:hover:text-primary dark:text-white mt-7.5 mb-3.5">
//             <Link href={urlLink} target="_blank" rel="noopener noreferrer">
//               {title}
//             </Link>
//           </h4>
          {/* <p className="text-sm">
            {metadata}
          </p> */}

          {/* Display tags */}
          {/* <div className="mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-1 mb-1">
                {tag}
              </span>
            ))}
          </div> */}
        {/* </div>
      </motion.div>
    </>
  );
};

export default PortfolioItem; */}



// import Image from "next/image";
// import { Portfolio } from "@/types/portfolio";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const PortfolioItem = ({ portfolio }: { portfolio: Portfolio }) => {
//   const { mainImage, title, metadata, urlLink } = portfolio;

//   return (
//     <>
//       <motion.div
//         variants={{
//           hidden: {
//             opacity: 0,
//             y: -20,
//           },

//           visible: {
//             opacity: 1,
//             y: 0,
//           },
//         }}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 1, delay: 0.5 }}
//         viewport={{ once: true }}
//         className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-4 pb-9"
//       >
//         <Link href={urlLink} className="block relative aspect-[368/239]" target="_blank" rel="noopener noreferrer">
//           <Image src={mainImage} alt={title} fill style={{ borderRadius: '10px' }}/>
//         </Link>

//         <div className="px-4">
//           <h4 className="font-medium text-md xl:text-xl text-black hover:text-primary dark:hover:text-primary dark:text-white mt-7.5 mb-3.5">
//             <Link href={urlLink} target="_blank" rel="noopener noreferrer">
//               {" "}
//               {title}
//             </Link>
//           </h4>
//           <p className="text-sm">{metadata}</p>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default PortfolioItem;

"use client";

import Image from "next/image";
import { Portfolio } from "@/types/portfolio";
import Link from "next/link";
import { motion } from "framer-motion";

const PortfolioItem = ({ portfolio }: { portfolio: Portfolio }) => {
  const { mainImage, title, metadata, urlLink, tags } = portfolio; // Destructure `tags` from `portfolio`

  return (
    <>
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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-4 pb-2"
      >
        <Link href={urlLink} className="block relative aspect-[368/239]" target="_blank" rel="noopener noreferrer">
          <Image src={mainImage} alt={title} fill style={{ borderRadius: '10px' }}/>
        </Link>

        <div className="px-2">
          <h4 className="font-medium text-md xl:text-xl text-black hover:text-primary dark:hover:text-primary dark:text-white mt-7.5 mb-3.5">
            <Link href={urlLink} target="_blank" rel="noopener noreferrer">
              {title}
            </Link>
          </h4>
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
        </div>
      </motion.div>
    </>
  );
};

export default PortfolioItem;



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

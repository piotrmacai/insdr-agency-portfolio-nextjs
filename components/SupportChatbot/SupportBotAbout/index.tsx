"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BotAbout = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="py-10 lg:py-15 xl:py-20 overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="/images/apps/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h4 className="text-black dark:text-white font-medium uppercase">
                <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase ">
                  Client Support
                </span>{" "}
                Assistant AI
              </h4>
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                For Lead Generation
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  For Business
                </span>
              </h2>
              <p>
My AI Assistant for Lead Generation and Customer Support is a solution that will revolutionize your approach to acquiring new customers and serving existing ones. This intelligent assistant is designed to efficiently generate high-quality sales leads and comprehensively support your customers.
<br/><br/>
    At the same time, the AI chatbot serves as the first line of customer service, quickly and effectively answering frequently asked questions. It understands the conversation context, analyzes customer intentions, and directs them to the appropriate departments or agents when specialized assistance is required.
</p>

              {/* <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    React 18, Next.js 13 and TypeScript
                  </h5>
                  <p>Ut ultricies lacus non fermentum ultrices.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Fully Customizable
                  </h5>
                  <p>consectetur adipiscing elit fermentum ultricies.</p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0 overflow-hidden">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
               <h4 className="text-black dark:text-white font-medium uppercase">
                <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase ">
                  Agent AI
                </span>{" "}
                For Ecommerce
              </h4>
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
              AI Ecommerce Assistant            </h2>
              <p>
              Running an online store is no easy task today. Customers expect immediate and personalized service 24/7, while also expecting proactive recommendations and tailored offers to meet their needs.
              <br/>

I have the perfect solution for that - an AI Assistant tailored for e-commerce, which will automate and optimize key customer processes in your online store. This intelligent assistant is designed to perfectly support and serve your customers at every stage of their shopping journey.
<br/><br/>
Not only does it effectively resolve the most common customer inquiries, but it also actively identifies their needs and preferences. Thanks to advanced machine learning algorithms, it can make real-time personalized product recommendations, cross-selling, and up-selling - thereby increasing the average order value and conversion rate.
</p>

              <div>
                <a
                  href="/contact"
                  className="flex items-center gap-2.5 text-black dark:text-white mt-7.5 hover:text-primary dark:hover:text-primary"
                >
                  <span className="hover:pr-2 duration-500">Let's start a project</span>
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
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
            <Image
                src="/images/apps/chatbot1.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/apps/chatbot1.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}

            {/* <!-- ===== About Start ===== --> */}
            <section className="py-10 lg:py-15 xl:py-20 overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="/images/apps/chatbot2.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/apps/chatbot2.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
<h4 className="text-black dark:text-white font-medium uppercase">
<span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase">
  Customer Service
</span>{" "}
AI Assistant
</h4>
<h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
  24/7 Customer Support
  <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
    For Excellent Service
  </span>
</h2>
<p>
  Our AI Customer Service and Support Assistant is an innovative solution that will change the way your company communicates with its customers. This intelligent chatbot is designed to provide customer support 24 hours a day, 7 days a week, without interruption.
  <br/><br/>
  Thanks to our assistant, your customers will receive an immediate response to their questions and needs, even outside of working hours. The AI assistant understands the conversation context, analyzes customer intentions, and provides precise answers or directs the customer to the appropriate resources.
</p>


              {/* <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    React 18, Next.js 13 and TypeScript
                  </h5>
                  <p>Ut ultricies lacus non fermentum ultrices.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Fully Customizable
                  </h5>
                  <p>consectetur adipiscing elit fermentum ultricies.</p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default BotAbout;

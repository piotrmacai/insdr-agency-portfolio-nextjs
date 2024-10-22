'use client'

import React from "react";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const GenAiArtworks = () => {
  const { t } = useTranslation();

  return (
    <> 

      <section className="pb-10 lg:py-15 xl:py-20 px-10"> 
         <div className="animate_top mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2 mb-12.5 lg:mb-17.5 px-4 md:px-0">
         <SectionHeader
              headerInfo={{
                title: t('genai.header1'),
                subtitle: t('genai.header2'),
                description: t('genai.header3'),
              }}
            />
            </div>
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
        
          <div className="masonry-grid gap-2.5 xl:gap-10">
            <div className="masonry-item">
              <Image
                src="/images/genai/genai1.jpg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item">
              <Image
                src="/images/genai/genai2.jpg"
                alt="Genai2"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item">
              <Image
                src="/images/genai/genai3.jpg"
                alt="Genai3"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[-150px]">
              <Image
                src="/images/genai/genai4.jpg"
                alt="Genai4"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[-80px]">
              <Image
                src="/images/genai/gen_beauty.jpg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item">
              <Image
                src="/images/genai/gen_shoes.jpg"
                alt="Genai2"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[-230px]">
              <Image
                src="/images/genai/gen_samurai.jpg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[-100px]">
              <Image
                src="/images/genai/gen_interior.jpg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            {/* <div className="masonry-item md:mt-[-1px]">
              <Image
                src="/images/genai/gen_paper.jpeg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[10px]">
              <Image
                src="/images/genai/gen_fireflyface.jpg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[-150px]">
              <Image
                src="/images/genai/gen_fireflypizza.jpg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[-50px]">
              <Image
                src="/images/genai/gen_fashion.jpg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[-90px]">
              <Image
                src="/images/genai/gen_gta.jpeg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[-220px]">
              <Image
                src="/images/genai/gen_underwater.jpg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[30px]">
              <Image
                src="/images/genai/gen_wow.jpg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[-90px]">
              <Image
                src="/images/genai/gen_logo2.jpeg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[-260px]">
              <Image
                src="/images/genai/gen11.jpg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[20px]">
              <Image
                src="/images/genai/gen10.jpg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[-190px]">
              <Image
                src="/images/genai/gen_paper.jpeg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="masonry-item md:mt-[-280px]">
              <Image
                src="/images/genai/gen_logo1.jpeg"
                alt="Genai1"
                width={900}
                height={600}
                layout="responsive"
                style={{ borderRadius: '10px' }}
              />
            </div> */}
            {/* <div className="masonry-item">
              <div className="aspect-w-9 aspect-h-16">
              <YouTube
                  videoId="g9zva1x6sL4"
                  
                />
              </div>
            </div> */}
          </div>
        </div>
         <Link href={`/generativeai`}>
                      <div className="animate_top mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2 mb-12.5 lg:mb-17.5 px-4 md:px-0">
                       <div className="bg-zumthor text-center mt-8 md:mt-10 dark:bg-blacksection dark:border dark:border-strokedark inline-block rounded-full py-1.5 px-4.5 mb-4">
                         
                            <h4 className="font-medium text-center text-md text-black dark:text-white  ml-6">
                            🔥   {t('genai.more')}
                            </h4>
                            </div>
                      </div>  
                    </Link>
      </section>
    </>
  );
};

export default GenAiArtworks;
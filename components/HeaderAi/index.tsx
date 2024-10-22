"use client";
import React from "react";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { useTranslation } from 'react-i18next';

const HeaderAi = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="pt-15 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: t('heroAiSection.header.title'),
                subtitle: t('heroAiSection.header.subtitle'),
                description: t('heroAiSection.header.description'),
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default HeaderAi;

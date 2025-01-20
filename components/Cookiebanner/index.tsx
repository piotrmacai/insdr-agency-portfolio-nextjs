"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Cookiebanner = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    const lastConsentDate = localStorage.getItem('cookieConsentDate');
    
    const isConsentValid = lastConsentDate && 
      (new Date().getTime() - new Date(lastConsentDate).getTime()) < (30 * 24 * 60 * 60 * 1000);

    if (!cookieConsent || !isConsentValid) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-blacksection border-t border-stroke dark:border-strokedark p-4 z-50"
    >
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-black dark:text-white">
          {t('cookies.message')} 
          <a 
            href="/privacy-policy" 
            className="text-primary underline ml-1"
          >
            {t('cookies.privacyLink')}
          </a>
        </div>
        <button
          onClick={acceptCookies}
          className="inline-flex items-center justify-center bg-primary text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
        >
          {t('cookies.accept')}
        </button>
      </div>
    </motion.div>
  );
};

export default Cookiebanner;

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
  className="fixed bottom-6 left-[20%] bg-white dark:bg-blacksection border border-stroke dark:border-strokedark px-4 py-3 rounded-xl shadow-lg z-40 w-[90%] max-w-md">
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black dark:text-white">
    <div>
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
      className="inline-flex items-center justify-center bg-primary text-white py-1.5 px-5 rounded-full hover:bg-opacity-90 transition duration-300 text-sm"
    >
      {t('cookies.accept')}
    </button>
  </div>
</motion.div>
  );
};

export default Cookiebanner;

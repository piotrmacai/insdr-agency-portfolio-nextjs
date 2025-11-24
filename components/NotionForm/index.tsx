"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';

const NotionFormEmbed: React.FC = () => {

  const { t } = useTranslation();

  return (
      <iframe 

        src={t('notionform.link', { defaultValue: 'https://ainsider.notion.site/26eb65ddefcf81098302cc75e1382471?pvs=105' })}
        width="100%" 
        height="600" 
        frameBorder="0"
        allowFullScreen
      />
  );
};

export default NotionFormEmbed;

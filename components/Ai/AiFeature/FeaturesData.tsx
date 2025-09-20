import { Feature } from "@/types/feature";
import { useTranslation } from 'react-i18next';

const getTranslatedFeatures = () => {
  const { t } = useTranslation();

  const featuresData: Feature[] = [ 
    {
      id: 1,
      icon: "/images/icon/undraw_website_builder.svg",
      title: t('agentsFeatures.1Title'),
      description: t('agentsFeatures.2Description'),
     }, 
    {
      id: 2,
      icon: "/images/icon/undraw_innovative.svg",
      title: t('agentsFeatures.2Title'),
      description: t('agentsFeatures.2Description'),
    },   
    {
      id: 3,
      icon: "/images/icon/undraw_ecom.svg",
      title: t('agentsFeatures.3Title'),
      description: t('agentsFeatures.3Description'),
    },   
    {
      id: 4,
      icon: "/images/icon/undraw_social.svg",
      title: t('agentsFeatures.4Title'),
      description: t('agentsFeatures.4Description'),
    }, 
    {
      id: 5,
      icon: "/images/icon/undraw_active.svg",
      title: t('agentsFeatures.5Title'),
      description: t('agentsFeatures.5Description'),
     },   
       
     {
      id: 6,
      icon: "/images/icon/undraw_product_iteration.svg",
      title: t('agentsFeatures.6Title'),
      description: t('agentsFeatures.6Description'),
    }, 
  
      {
      id: 7,
      icon: "/images/icon/undraw_chat-withai.svg",
      title: t('agentsFeatures.7Title'),
      description: t('agentsFeatures.7Description'),
    }, 
       {
      id: 8,
      icon: "/images/icon/undraw_online-community.svg",
      title: t('agentsFeatures.8Title'),
      description: t('agentsFeatures.8Description'),
    }, 
       {
      id: 9,
      icon: "/images/icon/undraw_chat-bot.svg",
      title: t('agentsFeatures.9Title'),
      description: t('agentsFeatures.9Description'),
    }, 
 
   
  ];

  return featuresData;
};

export default getTranslatedFeatures;





// import { Feature } from "@/types/feature";
// import { useTranslation } from 'react-i18next';

// const featuresData: Feature[] = [
//   {
//     id: 1,
//     icon: "/images/icon/icon-01.svg",
//     title: "Business Process Automation",
//     description:
//       "I implement advanced automation solutions to streamline and optimize business processes, reducing operational costs and increasing work efficiency.",
//   },
//   {
//     id: 2,
//     icon: "/images/icon/icon-02.svg",
//     title: "Marketing Automation",
//     description:
//       "I create and implement marketing automation systems that help acquire and retain customers more effectively while optimizing marketing campaigns.",
//   },
//   {
//     id: 3,
//     icon: "/images/icon/icon-03.svg",
//     title: "Sales Process Automation",
//     description:
//       "I automate sales processes to increase efficiency and conversion rates, allowing sales teams to focus on building relationships with customers.",
//   },
//   {
//     id: 4,
//     icon: "/images/icon/icon-04.svg",
//     title: "Customer Service Automation",
//     description:
//       "I implement automated customer service solutions that improve response times and customer satisfaction while reducing operational costs.",
//   },
//   {
//     id: 5,
//     icon: "/images/icon/icon-05.svg",
//     title: "Document Management Automation",
//     description:
//       "I create automated document management systems that streamline workflow and improve document organization and accessibility.",
//   },
//   {
//     id: 6,
//     icon: "/images/icon/icon-06.svg",
//     title: "Supply Chain Automation",
//     description:
//       "I use artificial intelligence algorithms to optimize supply chain and logistics processes, minimizing order fulfillment time and costs.",
//   },
// ];

// export default featuresData;

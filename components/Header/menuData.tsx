import { Menu } from "@/types/menu";
import { useTranslation } from 'react-i18next';

const getTranslatedMenuData = () => {
  const { t } = useTranslation();

  const menuData: Menu[] = [
    {
      id: 1,
      title: t('header.menu1'),
      newTab: false,
      path: "/",
      icon: "/images/icon/home.svg",
    },
    {
      id: 2,
      title: t('header.menu2'),
      newTab: false,
      path: "/portfolio",
      icon: "/images/icon/bag.svg",
    },
    {
      id: 3,
      title: t('header.menuServices'),
      newTab: true,
      path: "/portfolio",
      icon: "/images/icon/phone.svg",
    },
    // {
    //   id: 3,
    //   title: t('header.menu11'),
    //   newTab: true,
    //   path: "https://ainsider.tools",
    //   icon: "/images/icon/phone.svg",
    // },
    // {
    //   id: 3,
    //   title: t('header.menu3'),
    //   newTab: true,
    //   path: "/#headerWeb",
    //   icon: "/images/icon/phone.svg",
    // },
    // {
    //   id: 3,
    //   title: t('header.menu3'),
    //   newTab: true,
    //   path: "#",
    //   icon: "/images/icon/phone.svg",
    //   submenu: [
    //     {
    //       id: 31,
    //       title:  t('header.menu5'),
    //       newTab: true,
    //       path: "/#headerWeb",
    //     },
    //     {
    //       id: 32,
    //       title:  t('header.menu6'),
    //       newTab: true,
    //       path: "/#headerAi",
    //     },
    //     {
    //       id: 33,
    //       title:  t('header.menu7'),
    //       newTab: true,
    //       path: "/#headerAi",
    //     },
    //     {
    //       id: 34,
    //       title:  t('header.menu10'),
    //       newTab: true,
    //       path: "/#headerMarketing",
    //     },
    //     {
    //       id: 35,
    //       title:  t('header.menu8'),
    //       newTab: true,
    //       path: "/generativeai",
    //     },
    //   ],
    // },
    {
      id: 4,
      title: t('header.menu4'),
      newTab: false,
      path: "/contact",
      icon: "/images/icon/phone.svg",
    },
  ];

  return menuData;
};

export default getTranslatedMenuData;


// const menuData: Menu[] = [
//   {
//     id: 1,
//     title: "Home",
//     newTab: false,
//     path: "/",
//     icon: "/images/icon/home.svg",
//   },
//   {
//     id: 2,
//     title: "Portfolio",
//     newTab: false,
//     path: "/portfolio",
//     icon: "/images/icon/bag.svg",
//   },
//   {
//     id: 3,
//     title: "Services",
//     newTab: true,
//     path: "#",
//     icon: "/images/icon/phone.svg",
//     submenu: [
//       {
//         id: 31,
//         title: "Web & Ecommerce",
//         newTab: true,
//         path: "/apps/web",
//       },
//       {
//         id: 32,
//         title: "AI Assistants & Agents",
//         newTab: true,
//         path: "/apps/support-chatbot",
//       },
//       {
//         id: 33,
//         title: "Automations",
//         newTab: true,
//         path: "/apps/automation",
//       },
//       {
//         id: 34,
//         title: "Generative AI",
//         newTab: true,
//         path: "/generativeai",
//       },
  
//     ],
//   },

//   {
//     id: 4,
//     title: "Contact",
//     newTab: false,
//     path: "/contact",
//     icon: "/images/icon/phone.svg",
//   },
// ];

// export default menuData;

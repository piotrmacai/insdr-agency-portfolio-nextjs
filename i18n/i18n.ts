// i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import pl from './pl.json';

const resources = {
  en: {
    translation: en
  },
  pl: {
    translation: pl
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pl", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;



// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// const resources = {
//   en: {
//     translation: {
//       "welcome": "Welcome to My website!",
//       "description": "This is an example description."
//     }
//   },
//   pl: {
//     translation: {
//       "welcome": "Witamy na naszej stronie!",
//       "description": "To jest przykładowy opis."
//     }
//   }
// };

// i18n
//   .use(initReactI18next)
//   .init({
//     resources,
//     lng: "en", 
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false 
//     }
//   });

// export default i18n;





// // src/i18n.ts
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// const resources = {
//   en: {
//     translation: {
//       "welcome": "Welcome to our website!",
//       "description": "This is an example description."
//     }
//   },
//   pl: {
//     translation: {
//       "welcome": "Witamy na naszej stronie!",
//       "description": "To jest przykładowy opis."
//     }
//   }
// };

// i18n
//   .use(initReactI18next)
//   .init({
//     resources,
//     lng: "en", // Default language
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false // React already escapes values
//     }
//   });

// export default i18n;

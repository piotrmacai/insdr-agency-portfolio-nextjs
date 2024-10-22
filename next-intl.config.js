const path = require('path');

module.exports = {
  locales: ['en', 'pl'],
  defaultLocale: 'en',
  localeDetection: false,
  localePath: path.resolve('./i18n/messages'),
};
const { DateTime } = require('luxon');
const site = require('../_data/site.js');
const locales = require('../_data/locales.js');

module.exports = {
  /**
   * Prefixes the given URL with the site's base URL.
   * @param {string} url
   */
  absoluteUrl: (url) => {
    return new URL(url, site.baseUrl).href;
  },
  /**
   * Get the corresponding label for a given language code
   * @param {string} locale Locale code
   * @returns Label for given locale
   */
  getLocaleLabel: (locale) => {
    return locales.find((d) => d.code === locale)?.label;
  },
  readableDate: (dateObj, format, zone) => {
    // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    return DateTime.fromJSDate(dateObj, { zone: zone || 'utc' }).toFormat(
      format || 'LLLL dd, yyyy'
    );
  },
  filterTagList: (tags) => {
    return (tags || []).filter(
      (tag) =>
        ['all', 'nav', 'post', 'posts', 'story', 'stories'].indexOf(tag) === -1
    );
  }
};

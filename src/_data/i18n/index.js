const en = require('./en.json');
const es = require('./es.json');

const locales = {
  en,
  es
};

const localizedStrings = {};

for (const lang in locales) {
  if (Object.hasOwnProperty.call(locales, lang)) {
    const strings = locales[lang];

    Object.keys(strings).forEach((string) => {
      if (!localizedStrings[string]) {
        localizedStrings[string] = {};
      }

      localizedStrings[string][lang] = strings[string];
    });
  }
}

module.exports = localizedStrings;

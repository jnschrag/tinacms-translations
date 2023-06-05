const isDev = process.env.ELEVENTY_RUN_MODE !== 'build';

module.exports = {
  isDev,
  abbr: 'GNDEM',
  title: 'Global Network of Domestic Election Monitors',
  email: 'gndem09@gmail.com',
  description:
    'The Global Network of Domestic Election Monitors connects over 245 regional networks and individual nonpartisan citizen observation groups to share best practices and further our common aspirations for representative, responsive, transparent, democratic governance.',
  facebook_username: 'GNDEM',
  twitter_username: 'gndemexchanges',
  baseurl: '',
  url: isDev ? 'http://localhost:8080' : 'https://gndem.org'
};

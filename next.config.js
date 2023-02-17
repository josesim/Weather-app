const withPWA = require("next-pwa");
startUrl: '/other-page'
disabled: true
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  reactStrictMode: true,
  images: {
    domains: ["openweathermap.org"],
  },
});

const nextTranslate = require("next-translate");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "www.themealdb.com"],
  },
  ...nextTranslate(),
};

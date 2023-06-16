/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      // Add more route mappings here if needed
    };
  },
  exportTrailingSlash: true, // Enable trailing slashes in exported URLs
};

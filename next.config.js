/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  generateStaticParams: function () {
    return {
      "/": { page: "/" },
      // Add more route mappings here if needed
    };
  },
  trailingSlash: true, // Enable trailing slashes in exported URLs
};

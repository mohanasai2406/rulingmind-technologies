
/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,

  // Generate a static website
  output: "export",

  // Required for GitHub Pages
  ...(isProduction && {
    basePath: "/rulingmind-technologies",
  }),

  // GitHub Pages does not support Next.js image optimization
  images: {
    unoptimized: true,
  },

  // Generate URLs ending with /
  trailingSlash: true,
};

export default nextConfig;

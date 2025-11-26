/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // تحسينات السرعة
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // تحسين الصور
  images: {
    formats: ['image/webp'],
  },
  // Experimental features للسرعة
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // تجاهل تحذيرات الـ hydration الناتجة عن إضافات المتصفح
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  // Suppress hydration warnings in development caused by browser extensions
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;


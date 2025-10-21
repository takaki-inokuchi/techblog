import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.qiita.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'images.microcms-assets.io', 
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

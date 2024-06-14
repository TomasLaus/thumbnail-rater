import { hostname } from 'os';

/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 hostname: 'fleet-wombat-27.convex.cloud'
//             }
//         ]
//     }
// };

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.imgur.com',
      'imgur.com',
      'photos.marinetraffic.com',
      'images2.imgbox.com',
      'farm5.staticflickr.com',
      'fleet-wombat-27.convex.cloud',
    ],
    remotePatterns: [{ hostname: 'fleet-wombat-27.convex.cloud' }],
  },
};

export default nextConfig;

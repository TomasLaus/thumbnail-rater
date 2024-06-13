import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'fleet-wombat-27.convex.cloud'
            }
        ]
    }
};

export default nextConfig;

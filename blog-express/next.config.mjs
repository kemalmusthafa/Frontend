/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
            },
            {
                protocol: "https",
                hostname: "reddit-blog.vercel.app",
            },
            {
                protocol: "https",
                hostname: "assets.mycast.io",
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
            },
            {
                protocol: "https",
                hostname: "d2nzqyyfd6k6c7.cloudfront.net",
            },
            {
                protocol: "https",
                hostname: "www.dailysia.com",
            },
            { 
                hostname: "localhost",
            }
        ]
    },
};

export default nextConfig;

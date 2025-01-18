/** @type {import('next').NextConfig} */
const nextConfig = {
    target: 'server',
    output: "standalone",
    env: {
        API_HOST_URL: process.env.API_HOST_URL
    },
    eslint: {
        ignoreDuringBuilds: true, // 跳过构建时的 ESLint 检查
    },
};

module.exports = nextConfig;

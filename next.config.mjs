/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "intranet.infoajara.com",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;

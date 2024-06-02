/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vmqbxyjbseyzzunklpmm.supabase.co",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains:
    ['lncugkvgbsouxezwgmdx.supabase.co']
  }
}

export default nextConfig;

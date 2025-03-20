import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == "development";

const nextConfig: NextConfig = {
  basePath: isProd? '/therkels.github.io' : '',
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;

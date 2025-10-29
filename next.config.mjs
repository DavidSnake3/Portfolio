import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    unoptimized: true,
  },
  // IGNORAR ERRORES durante el build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMDX(nextConfig);
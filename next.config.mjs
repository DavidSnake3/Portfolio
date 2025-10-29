import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⚠️ CONFIGURACIÓN PARA GITHUB PAGES
  output: 'export',
  trailingSlash: true,
  basePath: '/Portfolio', // ⚠️ NOMBRE EXACTO DE TU REPO
  assetPrefix: '/Portfolio/', // ⚠️ MISMO NOMBRE
  
  // Tu configuración existente
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    unoptimized: true, // ⚠️ IMPORTANTE para GitHub Pages
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
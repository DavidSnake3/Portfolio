// Static export for GitHub Pages (https://davidsnake3.github.io/Portfolio).
// If the repo is ever renamed to davidsnake3.github.io, set BASE_PATH="" .
const basePath = process.env.BASE_PATH ?? "/Portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;

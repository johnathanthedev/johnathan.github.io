/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 enables static HTML export
  images: { unoptimized: true }, // required if using <Image>
};

export default nextConfig;
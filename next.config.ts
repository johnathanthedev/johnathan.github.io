/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'out', // 👈 enables static HTML export
  images: { unoptimized: true }, // required if using <Image>
};

export default nextConfig;
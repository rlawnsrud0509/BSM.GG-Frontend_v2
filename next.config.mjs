import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff2)$/i,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
};

export default withVanillaExtract(nextConfig);

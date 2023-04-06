/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // openAiKey: "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",
    openAiKey: process.env.OPEN_AI_KEY,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    openAiKey: process.env.OPEN_AI_KEY, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
  },
};

module.exports = nextConfig;

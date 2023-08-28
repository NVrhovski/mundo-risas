/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  }
}

module.exports = nextConfig

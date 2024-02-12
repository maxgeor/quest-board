/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_ACCESS_TOKEN,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID
  }
}

module.exports = nextConfig

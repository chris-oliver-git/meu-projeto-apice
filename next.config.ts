import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; img-src 'self' data: blob: https://ezchatbot.ai https://*.ezchatbot.ai; font-src 'self' data: https://ezchatbot.ai https://*.ezchatbot.ai; style-src 'self' 'unsafe-inline' https://ezchatbot.ai https://*.ezchatbot.ai; script-src 'self' 'unsafe-inline' https://ezchatbot.ai https://*.ezchatbot.ai; connect-src 'self' https://ezchatbot.ai https://*.ezchatbot.ai wss://ezchatbot.ai wss://*.ezchatbot.ai; frame-src https://www.google.com https://ezchatbot.ai https://*.ezchatbot.ai; upgrade-insecure-requests" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

// Nagłówki bezpieczeństwa przeniesione z aplikacji produkcyjnej. Zostawiam je
// w demo, bo pokazują sposób pracy: 'unsafe-inline' dla script/style jest tu
// konieczny (Next wstrzykuje inline bootstrap hydracji, Tailwind v4 inline
// style — bez tego psuje się wygląd i hydracja), więc zamiast udawać, że CSP
// jest szczelny, zaciskam to, co realnie hartuje: frame-ancestors 'none'
// przeciw clickjackingowi, object-src 'none', connect-src ograniczony do siebie.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false, // nie zdradzaj frameworka
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;

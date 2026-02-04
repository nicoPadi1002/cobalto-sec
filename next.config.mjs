import * as contentlayer from "next-contentlayer2"
import bundleAnalyzer from "@next/bundle-analyzer"

const withContentlayer =
  typeof contentlayer?.withContentlayer === "function"
    ? contentlayer.withContentlayer
    : typeof contentlayer?.default === "function"
    ? contentlayer.default
    : (cfg) => cfg

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" })
const isDev = process.env.NODE_ENV !== "production"

// Normaliza host de Umami (sin protocolo ni path)
const UMAMI_HOST = (process.env.NEXT_PUBLIC_UMAMI_HOST || "analytics.umami.is")
  .replace(/^https?:\/\//, "")
  .replace(/\/.*$/, "")

// Flags: abren permisos SOLO si existen las envs pÃºblicas
const USE_GISCUS = !!process.env.NEXT_PUBLIC_GISCUS_REPO
const USE_UMAMI = !!process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID

// ðŸ‘‡ Ajuste clave: permitir 'unsafe-inline' siempre; 'unsafe-eval' solo en dev
const ContentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${USE_GISCUS ? " giscus.app" : ""}${
    USE_UMAMI ? " " + UMAMI_HOST : ""
  }`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "media-src https://*.s3.amazonaws.com",
  `connect-src 'self' ${isDev ? "ws:" : ""} https:`,
  "font-src 'self' data:",
  USE_GISCUS ? "frame-src giscus.app" : "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  !isDev ? "upgrade-insecure-requests" : "",
]
  .filter(Boolean)
  .join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy.replace(/\n/g, "") },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
]

const output = process.env.EXPORT ? "export" : undefined
const basePath = process.env.BASE_PATH || undefined
const unoptimized = process.env.UNOPTIMIZED ? true : undefined

const config = () => {
  // Aplica ambos plugins; Contentlayer primero
  const plugins = [withContentlayer, withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), {
    output,
    basePath,
    reactStrictMode: true,
    trailingSlash: false,
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    eslint: { dirs: ["app", "components", "layouts", "scripts"] },
    images: {
      remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
      unoptimized,
    },
    async headers() {
      return [{ source: "/(.*)", headers: securityHeaders }]
    },
    webpack: (config) => {
      config.module.rules.push({ test: /\.svg$/, use: ["@svgr/webpack"] })
      return config
    },
  })
}

export default config

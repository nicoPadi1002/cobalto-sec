import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "cobalto-sec.tech";

export function middleware(req: NextRequest) {
  const isProd = process.env.VERCEL_ENV === "production";
  if (isProd && req.nextUrl.host !== CANONICAL_HOST) {
    const url = new URL(req.url);
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

// Excluir _next/assets/api para evitar trabajo innecesario
export const config = {
  matcher: ["/((?!_next|api|assets|favicon\\.ico).*)"],
};

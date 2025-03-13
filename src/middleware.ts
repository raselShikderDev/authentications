import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const url = request.nextUrl;

  if (
    token &&
    (url.pathname.startsWith("/sign-in") || url.pathname.startsWith("/signup"))
  ) {
    return NextResponse.redirect(new URL("dashboard", request.url));
  }
  if (
    !token &&
    (url.pathname.startsWith("/dashboard") ||
      url.pathname.startsWith("/settingsuser") ||
      url.pathname.startsWith("/performance"))
  ) {
    return NextResponse.redirect(new URL("sign-in", request.url));
  }

  NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/settingsuser",
    "/performance",
    "/sign-in",
    "/sinup",
  ],
};

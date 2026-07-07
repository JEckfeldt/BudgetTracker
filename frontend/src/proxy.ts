import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  const response = await fetch("http://localhost:8000/auth/verify", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });

  if (!response.ok) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/transactions/:path*",
    "/budgets/:path*",
  ],
};
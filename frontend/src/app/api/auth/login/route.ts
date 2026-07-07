// responsible for fwding the JWT as an HTTP only cookie, the browser cannot access but the middleware can.

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const response = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      username: body.email,
      password: body.password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { detail: data.detail },
      { status: response.status }
    );
  }

  const res = NextResponse.json({
    message: "Login successful",
  });

  res.cookies.set("token", data.access_token, {
    httpOnly: true,
    secure: false, // change to true in production with HTTPS
    sameSite: "lax",
    path: "/",
  });

  return res;
}
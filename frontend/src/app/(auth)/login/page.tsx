"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Login page

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // sends the login credentials to the middleware, which handles the jwt saving as http only cookie
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      router.push("/dashboard");
    } else {
      const data = await response.json();
      alert(data.detail);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white text-gray-900 p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Budget Tracker
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-800">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-gray-900 placeholder-gray-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-800">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-gray-900 placeholder-gray-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4CAF7A] text-white py-2 rounded-lg hover:bg-[#3f9468] transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-700">
          Don't have an account?{" "}
          <a href="/register" className="text-[#4CAF7A] font-medium">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}


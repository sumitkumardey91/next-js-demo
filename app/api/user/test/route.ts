import { NextResponse } from "next/server";

export async function GET() {

  const res = NextResponse.json({ message: "Logged in" });

  return res;
}
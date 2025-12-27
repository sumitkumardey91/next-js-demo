import { NextResponse } from "next/server";

export async function GET() {
   const token = "abc123";
  const res = NextResponse.json({ message: "Logged in" });

  res.cookies.set("token", token, { httpOnly: true, secure: true, path: "/" });
  return res;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const auth = req.headers.get("authorization");


    if (!body.email) {
      return Response.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    return Response.json({
      message: "User created successfully",
      auth,
      data: body,
    });
  } catch (err) {
    return Response.json(
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }
}

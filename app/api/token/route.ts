import { auth0 } from '@/app/lib/auth0';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    //   const session = await auth0.getSession();
    //     console.log("session", session)
    //     const user = session?.user;

    // return NextResponse.json({ accessToken: session });

   const store = await cookies();
   const data = store.get("free");
   return NextResponse.json({ data: data });
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
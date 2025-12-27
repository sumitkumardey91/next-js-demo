'use server'
import { auth0 } from '@/app/lib/auth0';
import { cookies } from 'next/headers';

export const getToken = async () => {
    const session = await auth0.getSession();
    const user = session?.use
    return session;
} 

export async function getCookieData() {
  const cookieStore = cookies();

  const oneCookie = (await cookieStore).get('__session'); // example

  return { oneCookie };
}

export async function setCookieData(val: string) {
  const cookieStore = cookies();

  const oneCookie = (await cookieStore).set("sumit", val, {
  path: "/",
  httpOnly: true,
  secure: true
  }); 

  return { oneCookie: "success" };
}
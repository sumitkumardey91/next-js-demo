import Image from "next/image";
import { auth0 } from "./lib/auth0";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { getToken, getCookieData, setCookieData } from "./actions/token";

export default async function Home() {

   console.log("Server Action", await getToken())
  await fetch("http://localhost:3000/api/token").then((res) => res.json()).then((data) => console.log("BFF route.ts",data))

   console.log("======", await getCookieData())
  const session = await auth0.getSession();
  console.log("session", session)
  const user = session?.user;

  return (
      <div className="app-container">
      <div className="main-card-wrapper">
        <h1 className="main-title">Next.js + Auth0</h1>
        
        <div className="action-card">
          {user ? (
            <div className="logged-in-section">
              <p className="logged-in-message">✅ Successfully logged in!</p>
              <Profile></Profile>
              <LogoutButton />
            </div>
          ) : (
            <>
              <p className="action-text">
                Welcome! Please log in to access your protected content.
              </p>
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";
// Import the useUserAuth hook
import HomeButton from "../components/HomeButton";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
 
export default function Page() {

  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };
 
  // Display some of the user's information
  return (
    <div>
      <div>
        {user ? (
          <div className="flex flex-col items-start">
            <button className="bg-green-800 p-5 m-5 rounded-lg border-none hover:bg-green-900 active:bg-green-950" 
              onClick={handleSignOut}>
              Sign out 
            </button>
            <p className="ml-5">Signed in as {user.displayName} ({user.email})</p>
            <Link className="bg-green-800 p-5 m-5 rounded-lg border-none hover:bg-green-900 active:bg-green-950" href="/week-10/shopping-list">Go To Shopping List</Link>
          </div>
        ) : (
          <div> 
            <button className="bg-green-800 p-5 m-5 rounded-lg border-none hover:bg-green-900 active:bg-green-950" 
              onClick={handleSignIn}>
              Sign in
            </button>
            <p className="ml-5">Please sign in to view your profile</p>
          </div>
        )}
      </div>
      <HomeButton/> 
    </div>
  );
};

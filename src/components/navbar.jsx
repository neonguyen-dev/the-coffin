"use client";

// Third party library imports
import Link from "next/link";

// Local imports from project
import { UserAuth } from "@/context/AuthContext";

export function Navbar() {
  const { user, logout } = UserAuth(); // Not the most MVP friendly perhapse, could solve by creating a navbar presenter

  return (
    <div className="bg-gray-900 border-solid border-bottom-b-2 border-white px-8 py-4">
      <nav className="flex items-center justify-between text-3xl font-semibold">
        <Link href="/" className="hover:underline ">
          <h3>Home</h3>
        </Link>
        {user && 
          <Link href="/schedule" className="hover:underline">
            <h3>Schedule</h3>
          </Link>}
        {!user && 
          <Link href="/upcoming" className="hover:underline">
            <h3>Upcoming</h3>
          </Link>}
        <Link href="/about" className="hover:underline">
          <h3>About</h3>
        </Link>
        {user && 
          <p onClick={() => logout()} className="hover:underline cursor-pointer"> 
            Log out
          </p>}
        {!user && 
          <Link href="/login" className="hover:underline">
            <h3>Login</h3>
          </Link>}
      </nav>
    </div>
  )
}
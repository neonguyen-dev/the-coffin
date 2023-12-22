"use client";

// Third party library imports
import { useEffect } from "react";

// Local imports from project
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({children}) => {
    const { user } = UserAuth();
    const router = useRouter();

    useEffect(() => {
      // If user is not authenticated, redirect to login page
      if (!user) {
        router.push("/login");
      }
    }, []);

    // If user is not authenticated, render nothing
    if (!user) {
      return null;
    }

    // If user is authenticated, return the child components
    return children;
};

export default ProtectedRoute;

"use client";

// Third party library imports
import { useEffect } from "react";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import Loading from "@/components/loading";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    // If user info is still loading, do nothing
    if (isLoading) {
      return;
    }

    // If user is not authenticated, redirect to login page
    if (!user) {
      router.push("/login");
    }
  }, [user, isLoading]);

  // If user info is still loading, you can render a loading spinner or message
  if (isLoading) {
    return <Loading/>;
  }

  // If user is not authenticated, render nothing
  if (!user) {
    return null;
  }

  // If user is authenticated, return the child components
  return children;
};

export default ProtectedRoute;


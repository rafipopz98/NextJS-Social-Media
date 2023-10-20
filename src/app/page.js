"use client";
import Auth from "@/components/Auth/page";
import Feed from "@/components/Feed/page";
import React, { useState } from "react";

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div className="App">
      isAuthenticated?
      <Feed />:<Auth />;
    </div>
  );
};

export default HomePage;

"use client";
import Auth from "@/components/Auth/page";
import Feed from "@/components/Feed/page";
import Navb from "@/components/Navbar/Navb";
import React, { useState } from "react";

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    // <div className="App">
    //   isAuthenticated?
    //   <Feed />:<Auth />;
    // </div>
    <>
      <header>
        <Navb />
      </header>
      {isAuthenticated ? <Feed /> : <Auth />}
    </>
  );
};

export default HomePage;

import React from "react";
import "./profile.css";
import ProfileLeft from "@/components/ProfileLeft/ProfileLeft";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import PostSide from "@/components/PostSide/PostSide";
import Suggestions from "@/components/Suggestion/page";
import RightSide from "@/components/RightSide/RightSide";
const Profile = () => {
  return (
    <div className="App">
      <div className="Profile">
        <ProfileLeft />
        <div className="Profile-center">
          <ProfileCard />
          <PostSide />
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default Profile;

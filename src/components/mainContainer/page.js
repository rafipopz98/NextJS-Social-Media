import React from "react";
import "./MainContainer.css";

import Post from "../Post/page";
import Suggestions from "../Suggestion/page";
const MainContainer = () => {
  return (
    <section className="mainPS containerPS">
      <div className="postttt">
        <Post />
      </div>
      <div className="suggCon">
        <div className="suggestionHeading">
          <h2>Suggestions for you</h2>
          <a href="#">See all</a>
        </div>
        <div className="sugggessttionss">
          <Suggestions />
        </div>
      </div>
    </section>
  );
};

export default MainContainer;

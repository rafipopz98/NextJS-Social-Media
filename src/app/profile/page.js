import React from "react";
import "./profile.css";
import Navb from "@/components/Navbar/Navb";
const page = () => {
  return (
    <>
      <header>
        <Navb />
      </header>
      <div className="body">
        <div class="header__wrapper">
          <div class="cols__container">
            <div class="left__col">
              <div class="img__container">
                <img
                  src="https://wallpaperaccess.com/full/5045061.jpg"
                  alt="Anna Smith"
                />
                {/* <span></span> */}
              </div>
              <h2>Anna Smith</h2>
              <p>UX/UI Designer</p>
              <p>anna@example.com</p>

              <ul class="about">
                <li>
                  <span>4,073</span>Followers
                </li>
                <li>
                  <span>322</span>Following
                </li>
                <li>
                  <span>200,543</span>Attraction
                </li>
              </ul>

              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aliquam erat volutpat. Morbi imperdiet, mauris ac auctor
                  dictum, nisl ligula egestas nulla.
                </p>

                <ul>
                  <li>
                    <i class="fab fa-twitter"></i>
                  </li>
                  <i class="fab fa-pinterest"></i>
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-dribbble"></i>
                </ul>
              </div>
            </div>
            <div class="right__col">
              <nav>
                <ul>
                  <li>
                    <a href="">photos</a>
                  </li>
                  <li>
                    <a href="">videos</a>
                  </li>
                </ul>
                <button>Follow</button>
              </nav>

              <div class="photos">
                <img
                  src="https://wallpaperaccess.com/full/5045061.jpg"
                  alt="Photo"
                />
                <img
                  src="https://wallpaperaccess.com/full/5045061.jpg"
                  alt="Photo"
                />
                <img
                  src="https://wallpaperaccess.com/full/5045061.jpg"
                  alt="Photo"
                />
                <img
                  src="https://wallpaperaccess.com/full/5045061.jpg"
                  alt="Photo"
                />
                <img
                  src="https://wallpaperaccess.com/full/5045061.jpg"
                  alt="Photo"
                />
                <img
                  src="https://wallpaperaccess.com/full/5045061.jpg"
                  alt="Photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

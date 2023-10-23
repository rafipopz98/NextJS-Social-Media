import React from "react";
import "./profile.css";
import Navb from "@/components/Navbar/Navb";
import Post from "@/components/Post/page";
const page = () => {
  return (
    <>
      <header>
        <Navb />
      </header>
      <main>
        <div className="containerjj">
          <div className="row m-b-r m-t-3">
            <div className="col-md-2 offset-md-1">
              <img
                src="https://mdbootstrap.com/images/avatars/img%20(1).jpg"
                alt=""
                className="img-circle img-fluid"
              />
            </div>
            <div className="col-md-9 p-t-2">
              <h2 className="h2-responsive">
                @janedoe{" "}
                <button
                  type="button"
                  className="btn btn-info-outline waves-effect"
                >
                  Follow
                </button>
              </h2>
              <p>Jane Doe</p>

              <ul className="flex-menu">
                <li>
                  <strong>41</strong> posts
                </li>
                <li>
                  <strong>47k</strong> followers
                </li>
                <li>
                  <strong>208</strong> following
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="view overlay hm-black-light m-b-2">
                <img
                  src="https://mdbootstrap.com/images/regular/nature/img%20(1).jpg"
                  className="img-fluid "
                  alt=""
                />
                <div className="mask flex-center">
                  <ul className="flex-menu">
                    <li>
                      <p className="white-text">
                        <i className="fa fa-comment" aria-hidden="true"></i> 32
                      </p>
                    </li>
                    <li>
                      <p className="white-text">
                        <i className="fa fa-heart" aria-hidden="true"></i> 1.2k
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 m-b-2">
              <div className="view overlay hm-black-light">
                <img
                  src="https://mdbootstrap.com/images/regular/nature/img%20(2).jpg"
                  className="img-fluid "
                  alt=""
                />
                <div className="mask flex-center">
                  <ul className="flex-menu">
                    <li>
                      <p className="white-text">
                        <i className="fa fa-comment" aria-hidden="true"></i> 32
                      </p>
                    </li>
                    <li>
                      <p className="white-text">
                        <i className="fa fa-heart" aria-hidden="true"></i> 1.2k
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 m-b-2">
              <div className="view overlay hm-black-light">
                <img
                  src="https://mdbootstrap.com/images/regular/nature/img%20(3).jpg"
                  className="img-fluid "
                  alt=""
                />
                <div className="mask flex-center">
                  <ul className="flex-menu">
                    <li>
                      <p className="white-text">
                        <i className="fa fa-comment" aria-hidden="true"></i> 32
                      </p>
                    </li>
                    <li>
                      <p className="white-text">
                        <i className="fa fa-heart" aria-hidden="true"></i> 1.2k
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 m-b-2">
              <div className="view overlay hm-black-light">
                <img
                  src="https://mdbootstrap.com/images/regular/nature/img%20(4).jpg"
                  className="img-fluid "
                  alt=""
                />
                <div className="mask flex-center">
                  <ul className="flex-menu">
                    <li>
                      <p className="white-text">
                        <i className="fa fa-comment" aria-hidden="true"></i> 32
                      </p>
                    </li>
                    <li>
                      <p className="white-text">
                        <i className="fa fa-heart" aria-hidden="true"></i> 1.2k
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 m-b-2">
              <div className="view overlay hm-black-light">
                <img
                  src="https://mdbootstrap.com/images/regular/nature/img%20(5).jpg"
                  className="img-fluid "
                  alt=""
                />
                <div className="mask flex-center">
                  <ul className="flex-menu">
                    <li>
                      <p className="white-text">
                        <i className="fa fa-comment" aria-hidden="true"></i> 32
                      </p>
                    </li>
                    <li>
                      <p className="white-text">
                        <i className="fa fa-heart" aria-hidden="true"></i> 1.2k
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;

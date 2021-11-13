import React from "react";
import "./home.css";

import Peach from "../../assets/images/peach.gif"

export default function Home() {
  return (
    <div>
      <div className="homePage">
        <div className="homeWrapper">
          <div className="home-text-Container">
            <div className="row justify-content-center">
              <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-9 col-sm-11 col-xs-11 col-11 type-write-wrapper">
                <h1 className="hero-header line-1 anim-typewriter">
                  Hello World,
                </h1>
                <h1 className="hero-header line-2 anim-typewriter2">
                  I am <span className="span-line2">Zahra</span>.
                </h1>
                <p className="hero-header line-3 anim-typewriter3 font-face-gm">
                  <span className="span-home-1">I'm</span><span className="span-home-2"> a</span> <span className="span-home-3">full-stack</span> <span className="span-home-4">web</span> <span className="span-home-5">developer</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={Peach} className="peach-gif" alt="Peach" />
    </div>
  );
}

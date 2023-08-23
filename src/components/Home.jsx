import React from "react";
import "./Home.scss";
import Typewriter from "typewriter-effect";
import "../Images/animation1.gif";

const Home = () => {
  return (
    <div className="home_content">
      <div className="home_content_container">
        <div className="name_container">
          <h1>
            <div class="wrapper">
              <h1>Hi, I'm</h1>
            </div>
          </h1>
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f44b.gif"
            alt=""
          />
        </div>
        <h1> Sudarshan </h1>
        <h1>Full Stack Web Developer</h1>

        <div className="sub_container">
          <Typewriter
            className="typewriter"
            options={{
              strings: [
                `<div class="wrapper">
                <h1>
                  Exploring DSA as a stepping 
                  <br /> 
                  stone into the world of
                  <br /> 
                  Software Engineering.
                </h1>
              </div>`,
              ],
              autoStart: true,
              loop: true,
              changeDelay: 10,
              delay: 20,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

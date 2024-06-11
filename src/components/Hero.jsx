import React from "react";
import "../styles/hero.css";
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="background">
          <img src={heroImage} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h1>TRAVEL TO EXPLORE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              officia labore ut est excepturi enim illo suscipit aut, eaque
              voluptate!officia labore ut est excepturi enim illo suscipit aut,
              eaque voluptate!
            </p>
          </div>
          <div className="search">
            <div className="container">
              <label htmlFor="">Where you want to go</label>
              <input type="text" placeholder="Search Your Location" />
            </div>
            <div className="container">
              <label htmlFor="">Check In</label>
              <input type="date" />
            </div>
            <div className="container">
              <label htmlFor="">Check Out</label>
              <input type="date" />
            </div>
            <button className="hero-btn">Explore Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

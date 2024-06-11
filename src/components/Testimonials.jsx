import React from "react";
import "../styles/testimonials.css";

import avatarImage from "../assets/avatarImage.jpeg";
const Testimonials = () => {
  return (
    <>
      <section id="test" className="test">
        <div className="title">
          <h2>Happy Customers</h2>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate asperiores eaque.
            </p>
            <div className="info">
              <img src={avatarImage} alt="" />
              <div className="details">
                <h4>Kishan Sheth</h4>
                <span>CEO - Shashaan Web Solutions</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate asperiores eaque.
            </p>
            <div className="info">
              <img src={avatarImage} alt="" />
              <div className="details">
                <h4>Kishan Sheth</h4>
                <span>CEO - Shashaan Web Solutions</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate asperiores eaque.
            </p>
            <div className="info">
              <img src={avatarImage} alt="" />
              <div className="details">
                <h4>Kishan Sheth</h4>
                <span>CEO - Shashaan Web Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

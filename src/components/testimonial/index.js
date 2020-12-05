import React from "react";
import arrow_left from "../../assets/images/left-arrow.png"
import arrow_right from "../../assets/images/right-arrow.png"
export default function Testimonial(props) {
  return (
    <div ref={props.reff} className="testimonial">
      <div className="testimonial-title">Testimonials</div>
      <div className="testimonial-text">
        "Calm, Serene, Retro – What a way to relax and enjoy"
      </div>
      <div className="testimonial-info"> Mr. and Mrs. Baxter, UK</div>
      <div className="arrow-container">
        <span className="arrow">
          {" "}
          <img src={arrow_left} alt="" />
        </span>
        <span className="arrow">
          {" "}
          <img src={arrow_right} alt="" />
        </span>
      </div>
    </div>
  );
}

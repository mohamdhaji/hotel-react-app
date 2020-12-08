import React from "react";
import facebook from "../../../assets/images/face.png";
import tweet from "../../../assets/images/tweet.png"
import insta from "../../../assets/images/insta.png"
export default function Footer() {
  return (
    <div className="footer">
    <div id="triangle-up"/>
      <section className="contact-info">
        <div className="logo--v2">
          <div className="pri-text--v2">
            LUXURY
            <div className="sec-text--v2">HOTELS</div>
          </div>
        </div>
        <div style={{ width: "300px" }}>
          497 Evergreen Rd. Roseville, CA 95673
          <div style={{ textAlign: "left" }}> +44 345 678 903</div>
          <div> luxury_hotels@gmail.com</div>
        </div>
      </section>
      <section className="about">
        <div>About us</div>
        <div>Contact</div>
        <div>Terms & Conditions</div>
      </section>
      <section className="find-us">
          <div><div style={{width:"30px"}}><img style={{marginTop:"5px"}} src={facebook} alt=""/></div><div style={{marginLeft:"10px"}}>facebook</div></div>
          <div><div style={{width:"30px"}}><img style={{marginTop:"5px"}}src={tweet} alt=""/></div><div style={{marginLeft:"10px"}}>twitter</div></div>
          <div><div style={{width:"30px"}}><img style={{marginTop:"5px"}}src={insta} alt=""/></div><div style={{marginLeft:"10px"}}>instagram</div></div>
      </section>
      <section className="email-us">
          <div>Subscribe to our newsletter</div>
          <div className="footer-email"><input type="text" placeholder="Email Address"></input><button>OK</button></div>
      </section>
    </div>
  );
}

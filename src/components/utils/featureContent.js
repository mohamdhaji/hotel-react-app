import React from "react";
import FormField from "../utils/form/formField";
import home_icon from "../../assets/images/home-icon.png"
export default function FeatureContent() {
  return (
    <div className="feature-content">
      <div className="feature__title">
        <span className="feature__title--pri">WELCOME TO </span>
        <span className="feature__title--sec">LUXURY</span>
        <span className="feature__title--thr">HOTELS</span>
        <span className="feature__text">
          <div>Book your stay and enjoy Luxury</div>{" "}
          <div>redefined at the most affordable rates.</div>
        </span>
      </div>
      <div className="feature-button__container">
        <FormField
          name="BOOK NOW"
          formData={{element:"feature-button"}}
          icon={home_icon}
        />
      </div>
    </div>
  );
}

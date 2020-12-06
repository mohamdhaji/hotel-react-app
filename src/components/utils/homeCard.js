import React from "react";
import FormField from "../utils/form/formField";
export default function HomeCard(props) {
  return (
    <div className="home-card">
      <div className="home-card__content">
        <div className="home-card__line"></div>
        <div className="home-card__title">{props.data.title}</div>
        <div className="home-card__text">{props.data.text}</div>
        <FormField
          className="home-button"
          formData={{ element: "button" }}
          name="EXPLORE"
        />
      </div>
      <img
        style={{
          width: "45%",
          border: "2px solid #14274a",
          borderRadius: "6px",
        }}
        src={props.data.url}
        alt=""
      ></img>
    </div>
  );
}

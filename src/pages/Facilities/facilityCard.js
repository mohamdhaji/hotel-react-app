import React from "react";

export default function FacilityCard(props) {
  const { description, urls, alt_description } = props.image;

  return (
    <div className="facility-card">
      <img src={urls.regular} alt={description} />
      <div className="facility-card__image-name">{alt_description}</div>
    </div>
  );
}

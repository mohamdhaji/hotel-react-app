import React from "react";

export default function FacilityCard(props) {
  const { description, urls } = props.image;

  return (
    <div className="facility-card">
      <img src={urls.regular} alt={description} />
      <div className="facility-card__image-name">{props.facilitiesName}</div>
    </div>
  );
}

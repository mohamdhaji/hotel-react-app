import React from "react";
import FormField from "../../components/utils/form/formField"
import plus from "../../assets/images/plus.png"
export default function RoomCard(props) {
  const { description, urls, alt_description } = props.image;

  return (
    <div className="room-card">
      <img src={urls.regular} alt={description} />
      <div className="room-card__image-name">{alt_description}</div>
      <div className="room-card__footer">
       
        <div className="room-card__footer-left">
          <div className="plus-icon__container">
            <img src={plus} alt="" />
          </div>
          <div className="room-card__footer-left__title">VIEW ROOM DETAILS</div>
        </div>

        <div className="room-card__footer-left__button" >

        <FormField formData={{element:"button"}} name="$147  Avg/night"/>
        </div>
        
      </div>
    </div>
  );
}

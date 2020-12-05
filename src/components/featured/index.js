import React from "react";
import FeatureContent from "../utils/featureContent";
import scroll_down from "../../assets/images/scroll-down.png";
export default function Feature(props) {
  const renderTemplate = () => {
    let template = "";
    switch (props.type) {
      case "main":
        template = (
          <div
            className="feature-container"
            style={{
              backgroundImage: `${props.gradient || ""}url(${
                props.background
              })`,
            }}
          >
            <FeatureContent></FeatureContent>
            <div className="scroll-button">
              <div>Scroll</div>
              <img
                onClick={props.scroll}
                width="45px"
                src={scroll_down}
                alt=""
              />
            </div>
          </div>
        );
        break;
      case "contact":
        template = <div className="feature-container--contact">CONTACT-US</div>;
        break;
      default:
        throw new Error("type not provided");
    }
    return template;
  };

  return renderTemplate();
}

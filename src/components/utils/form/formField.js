import React from "react";

export default function FormField(props) {
  const renderTemplate = () => {
    const { formData } = props;
    let template = "";
    switch (formData.element) {
      case "button":
        template = (
          <button className="button">
            {props.name}
          </button>
        );
        break;
      case "feature-button":
        template = (
          <button className="feature-button">
            <img src={props.icon} alt="" />
            {props.name}
          </button>
        );
        break;
      case "input":
        template = (
          <div className="formBlock">
            {formData.showlabel ? (
              <div className="form-label">{formData.config.label}</div>
            ) : null}
            <input
              onChange={props.onChange}
              className="formInput"
              name={formData.config.name}
              type={formData.config.type}
              value={formData.value}
            ></input>
          </div>
        );
        break;

      case "textarea":
        template = (
          <div className="formBlock">
            {formData.showlabel ? (
              <div className="form-label">{formData.config.label}</div>
            ) : null}

            <textarea
              onChange={props.onChange}
              className="formArea"
              value={formData.value}
              name={formData.config.name}
            ></textarea>
          </div>
        );
        break;
      default:
        throw new Error("element type not provided");
    }
    return template;
  };
  return renderTemplate();
}

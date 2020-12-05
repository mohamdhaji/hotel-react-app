import React, { useState } from "react";
import Feature from "../../components/featured";
import FormField from "../../components/utils/form/formField";
export default function ContactUs() {
  const [formData, setFormData] = useState(() => {
    const formData = {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Name",
          name: "name_input",
          type: "text",
        },
        showlabel: true,
      },
      email: {
        element: "input",
        value: "",
        config: {
          label: "Email Address",
          name: "email_input",
          type: "text",
        },
        showlabel: true,
      },
      Message: {
        element: "textarea",
        value: "",
        config: {
          label: "Message",
          name: "message_input",
        },
        showlabel: true,
      },
    };
    return formData;
  });

  const onChange = (e, key) => {
    const oldData = { ...formData };
    const newData = { ...oldData[key] };
    newData.value = e.target.value;
    oldData[key] = newData;
    setFormData(oldData);
  };

  return (
    <div className="contact-us">
      <Feature type="contact" />
      <section className="contact-us__container">
        <div className="contact-us__title">
          <div className="contact-us__title--pri">WE ARE HERE FOR YOU</div>
          <div className="contact-us__title--sec">
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, compaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </div>
        </div>
        <div className="contact-us__content">
          <div className="contact-us__content-info">
            <div className="contact-us__content-info--one">
              497 Evergreen Rd. Roseville, CA 95673
            </div>
            <div>
              <span style={{ fontSize: "25px", marginRight: "10px" }}>
                View map
              </span>{" "}
              <img width="30px" src="/assets/arrow.png" alt=""></img>
            </div>
            <div className="contact-us__phone">Phone: +44 345 678 903</div>
            <div className="contact-us__email">
              Email: luxury_hotels@gmail.com
            </div>
          </div>

          <div>
            <form className="contact-us__form">
              {Object.keys(formData).map((key, i) => (
                <FormField
                  onChange={(e) => onChange(e, key)}
                  key={i}
                  formData={formData[key]}
                />
              ))}
              <button className="contact-form__button">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

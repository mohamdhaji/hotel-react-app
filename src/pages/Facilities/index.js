import React, { useEffect, useReducer, useRef } from "react";
import Feature from "../../components/featured";
import unsplash from "../../api/unsplash";
import FacilityCard from "./facilityCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import Testimonial from "../../components/testimonial";
import facility from "../../assets/images/Facilities.png";

const initialState = { images: [], loading: false, errorMsg: "" };

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "success":
      return { ...state, loading: false, images: [...action.payload] };
    case "error":
      return { ...state, errorMsg: "something went wrong" };
    default:
      throw new Error();
  }
}

export default function Facilities() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const myDivToScroll = useRef(null);
  useEffect(() => {
    dispatch({ type: "loading" });
    unsplash
      .get("/search/photos", {
        params: { query: "hotel", per_page: "7" },
      })
      .then((response) => {
        dispatch({ type: "success", payload: response.data.results });
      })
      .catch((error) => {
        dispatch({ type: "error" });
      });
  }, []);

  const scroll = () => {
    if (myDivToScroll.current) {
      myDivToScroll.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <div className="facilities">
      <Feature
        scroll={scroll}
        type="main"
        background={facility}
      />
      <div className="facilities-title">FACILITIES</div>
      <div className="facilities-description">
        We want your stay at our lush hotel to be truly unforgettable. That is
        why we give special attention to all of your needs so that we can ensure
        an experience quite uniquw. Luxury hotels offers the perfect setting
        with stunning views for leisure and our modern luxury resort facilities
        will help you enjoy the best of all.{" "}
      </div>

      <section className="facilities-content">
        {state.images.length > 0 ? (
          state.images.map((image) => (
            <FacilityCard image={image} key={image.id} />
          ))
        ) : (
          <CircularProgress
            style={{ color: "#00bcd4" }}
            thickness={7}
            size="50px"
          />
        )}
      </section>
      <Testimonial reff={myDivToScroll} />

    </div>
  );
}

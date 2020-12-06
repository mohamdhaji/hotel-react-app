import React,  { useEffect, useReducer, useRef } from "react";
import Feature from "../../components/featured";
import unsplash from "../../api/unsplash";
import RoomCard from "./roomCard"
import CircularProgress from "@material-ui/core/CircularProgress";
import Testimonial from "../../components/testimonial";

import romes from "../../assets/images/Rooms.jpg";


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

export default function Rooms() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const myDivToScroll = useRef(null);
  useEffect(() => {
    dispatch({ type: "loading" });
    unsplash
      .get("/search/photos", {
        params: { query: "luxury rooms ", per_page: "3" },
      })
      .then((response) => {
        const images=response.data.results;
        // for slider later on
        // for(let i=0; i<res.length; i++){
        //   if( images[Math.floor(i%3)]){
        //     images[Math.floor(i%3)].push(res[i])
        //   }else {
        //     images[Math.floor(i%3)]=[res[i]]
        //   }

        // }
        dispatch({ type: "success", payload: images });
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
    <div className="Rooms">
      <Feature
        scroll={scroll}
        gradient="linear-gradient(
  to right bottom,
  rgb(60, 59, 63,0.4),
  rgb(96, 92, 60,0.4)
  ),"
        type="main"
        background={romes}
      />
      <div className="rooms-title">ROOMS AND RATES</div>
      <div className="rooms-description">
        Each of our bright, light-flooded rooms come with everything you could
        possibly need for a comfortable stay. And yes, comfort isn’t our only
        objective, we also value good design, sleek contemporary furnishing
        complemented by the rich tones of nature’s palette as visible from our
        rooms’ sea-view windows and terraces.{" "}
      </div>
      <section className="rooms-content">
      {state.images.length > 0 ? (
          state.images.map((image,i) => (
            <RoomCard image={image} key={i} />
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

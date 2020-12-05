import React, { useRef } from "react";
import Feature from "../../components/featured";
import HomeCard from "../../components/utils/homeCard";
import Testimonial from "../../components/testimonial";
import home from "../../assets/images/Home.jpg";
import homeOne from "../../assets/images/home-1.jpg";
import homeTwo from "../../assets/images/home-2.jpg";
export default function Home() {
  const myDivToScroll = useRef(null);
  const scroll = () => {
    if (myDivToScroll.current) {
      myDivToScroll.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };
  const homeCards = [
    {
      id: "1",
      title: "Luxury redefined",
      text:
        "Our rooms are designed to transport you into an environment made for\
  leisure. Take your mind off the day-to-day of home life and find a \
  private paradise for yourself.",
      url: homeOne,
    },
    {
      id: "2",
      title: "Leave your worries in \
  the sand",
      text:
        "We love life at the beach. Being close \
  to the ocean with access to endless sandy \
  beach ensures a relaxed state of mind. It \
  seems like time stands still watching the \
  ocean. ",
      url:homeTwo,
    },
  ];

  return (
    <div className="home">
      <Feature
        scroll={scroll}
        gradient="linear-gradient(
  to right bottom,
  rgb(60, 59, 63,0.4),
  rgb(96, 92, 60,0.4)
  ),"
        type="main"
        background={home}
      />
      <div className="home-welcome">
        {" "}
        All our room types are including complementary breakfast
      </div>
      <div className="home-content">
        {homeCards.map((el) => (
          <HomeCard key={el.id} data={el} />
        ))}
      </div>
      <Testimonial reff={myDivToScroll} />
    </div>
  );
}

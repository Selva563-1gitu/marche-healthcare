import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/carousel.css";

const CAROUSEL = {
  data: {
    image: "./videos/video-tumbnail.png",
    title: "Marche Robo",
    descrioption:
      "State-of-the-art technology designed for the demands of modern healthcare. Our innovative solutions are crafted to meet the highest standards, ensuring superior performance and improved patient outcomes in today's fast-paced medical environment ",
  },
  data1: {
    image: "./products/specification.png",
    title: "Headline 2",
    descrioption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed, ut quas magnam, aperiam dicta libero harum delectus nemo fuga eveniet? Corporis atque dignissimos, est laudantium itaque distinctio ratione nam? ",
  },
};

const Carousel = () => {
  const [carouselData, setCarouselData] = useState("data");

  const [activeIndex, setActiveIndex] = useState(0);

  
  function handleCarouselClick(params) {
    setCarouselData(params);
  }

    // Array of tab data keys to cycle through
    const tabKeys = Object.keys(CAROUSEL);

    useEffect(() => {
      // Function to switch to the next tab
      const switchToNextTab = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % tabKeys.length);
        setCarouselData(tabKeys[activeIndex]);
      };
  
      // Set interval to switch tabs every 5 seconds (5000ms)
      const interval = setInterval(switchToNextTab, 5000);
  
      // Clean up interval on component unmount
      return () => clearInterval(interval);
    }, [activeIndex, tabKeys]); // Dependency array ensures effect runs when activeIndex or tabKeys change
  

 
  return (
    <div className="carousel-wrapper ">
      <div
        className="carousel-contianer"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("${
            CAROUSEL[`${carouselData}`].image
          }")`,
        }}
      >
        <div className="carousel-content">
          <h1 className="carousel-heading">{CAROUSEL[carouselData].title}</h1>
          <p className="carousel-paragraph">
            {CAROUSEL[carouselData].descrioption}
          </p>
          <Link to={"/products"}>
            <button className="carousel-button-text">Know more</button>
          </Link>
        </div>
        <div className="tabs">
          <div
            className="tab"
            onClick={() => {
              handleCarouselClick("data");
            }}
          >
           Marche Robo
          </div>
          <div
            className="tab"
            onClick={() => {
              handleCarouselClick("data1");
            }}
          >
            Tab 2
          </div>
          <div
            className="tab"
            onClick={() => {
              handleCarouselClick("data");
            }}
          >
            Tab 3
          </div>
          <div
            className="tab"
            onClick={() => {
              handleCarouselClick("data1");
            }}
          >
            Tab 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;



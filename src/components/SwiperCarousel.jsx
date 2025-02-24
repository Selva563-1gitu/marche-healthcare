import { useState,useEffect } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./css/carousel.css";
import "swiper/swiper-bundle.css";
import NewsCard from "./NewsCard";

const blogCardDetails = [
  {
    id: 1,
    img: "./card3.png",

    title: "Blog title heading will go he",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros",
    profile: "./companyLogo.png",
    names: "Marche Healthcare",
    date: "11 Jan 2022 ",
    linkedin:"https://www.linkedin.com/company/marche-healthcare/",
  },
  {
    id: 2,
    img: "./card2.png",

    title: "Blog title heading will go here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros",
    profile: "./companyLogo.png",
    names: "Marche Healthcare",
    date: "11 Jan 2022 ",
    linkedin:"https://www.linkedin.com/company/marche-healthcare/",
  },
  {
    id: 3,
    img: "./card1.png",

    title: "Blog title heading will go here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros",
    profile: "./companyLogo.png",
    names: "Marche Healthcare",
    date: "11 Jan 2022 ",
    linkedin:"https://www.linkedin.com/company/marche-healthcare/",
  },
  {
    id: 1,
    img: "./card3.png",

    title: "Blog title heading will go hee",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros",
    profile: "./companyLogo.png",
    names: "Marche Healthcare",
    date: "11 Jan 2022 ",
    linkedin:"https://www.linkedin.com/company/marche-healthcare/",
  },
  {
    id: 2,
    img: "./card2.png",

    title: "Blog title heading will go here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros",
    profile: "./companyLogo.png",
    names: "Marche Healthcare",
    date: "11 Jan 2022 ",
    linkedin:"https://www.linkedin.com/company/marche-healthcare/",
  },
  {
    id: 3,
    img: "./card1.png",

    title: "Blog title heading will go here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros",
    profile: "./companyLogo.png",
    names: "Marche Healthcare",
    date: "11 Jan 2022 ",
    linkedin:"https://www.linkedin.com/company/marche-healthcare/",
  },
];

const videoCardDetials = [
  { id: 1, link: "./videos/card-thumbnail.png", name: "Video name1" },
  { id: 2, link: "./videos/card-thumbnail.png", name: "Video name2" },
  { id: 3, link: "./videos/card-thumbnail.png", name: "Video name3" },
  { id: 1, link: "./videos/card-thumbnail.png", name: "Video name1" },
  { id: 2, link: "./videos/card-thumbnail.png", name: "Video name2" },
  { id: 3, link: "./videos/card-thumbnail.png", name: "Video name3" },
];



const SwiperCarousel = ({ news }) => {

  const [slideState,setSlideState] = useState({noOfSlide:3,navigation:true})

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSlideState((prevState) => ({ ...prevState, noOfSlide: 1, navigation: false }));
      } else if (window.innerWidth > 600 && window.innerWidth <= 770) {
        setSlideState((prevState) => ({ ...prevState, noOfSlide: 2, navigation: false }));
      } else {
        setSlideState((prevState) => ({ ...prevState, noOfSlide: 3, navigation: true }));
      }
    };

    // Initial call to set initial state based on window width
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      spaceBetween={0}
      slidesPerView={slideState.noOfSlide}
      navigation = {slideState.navigation}
      pagination={{ clickable: true }}
    >
      {news
        ? blogCardDetails.map((item, idx) => {
            return (
              <SwiperSlide key={Math.random() * idx}>
                <NewsCard {...item} />
              </SwiperSlide>
            );
          })
        : videoCardDetials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="card">
                <img src={item.link} alt="card" />
                <div className="card-body">
                  <h2>{item.name}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
};
export default SwiperCarousel;

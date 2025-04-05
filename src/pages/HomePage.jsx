import { useState } from "react";
import "./css/homepage.css";

import { SplitStringUsingRegex } from "../utils/SplitStringUsingRegex";
import { motion } from "framer-motion";

import { Layouts } from "../Layouts/Layouts";
import VideoPlayer from "../components/VideoPlayer";
import SectionHeader from "../components/SectionHeader";
import VideoTabButton from "../components/VideoTabButton";

import Author from "../assets/home/author.png";
import Carousel from "../components/Carousel";
import CaruselTwo from "../components/CaruselTwo";
import NewsCard from "../components/NewsCard";
import SwiperSingle from "../components/SwiperSingle";

import { Link } from "react-router-dom";
import { SwiperSlide,Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
// animation
const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

// card datas
const blogCardDetails = [
  {
    img: "./card1.png",
    title: "Blog title heading will go here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros",
    profile: "./companyLogo.png",
    names: "Full name1",
    date: "11 Jan 2022 ",
    linkedin: "https://www.linkedin.com/company/marche-healthcare/",
  },
  {
    img: "card2.png",
    title: "Blog title heading will go here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros",
    profile: "./companyLogo.png",
    names: "Full name2",
    date: "11 Jan 2022 ",
    linkedin: "https://www.linkedin.com/company/marche-healthcare/",
  },
];

const VIDEODATA = {
  productvideo: {
    src: "./home/background-video.mp4",
  },
  trainingvideo: {
    src: "./videos/videobg.mp4",
  },
  surgeryvideo: {
    src: "./home/background-video.mp4",
  },
};
const BlockText = "Innovation";
const HeroText = " is at the ";
const BlockText3 = "heart";
const HeroText2 = ` of
everything we `;
const BlockText4 = "do.";
const HeroText3 = ` We believe that
groundbreaking `;
const BlockText5 = "ideas";
const HeroText4 = `
 and state-of-the-
art `;
const BlockText6 = "technology";
const HeroText5 = ` have the power to
`;
const BlockText7 = "transform";
const HeroText6 = ` healthcare and
promote `;
const BlockText2 = "health equality.";

const SubText = "- Marche";

export default function HomePage() {
  const scrollToProduct = () => {
    scroll.scrollTo("/news", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const [videoLink, setVideoLink] = useState("productvideo");

  const heroText = SplitStringUsingRegex(HeroText);
  const heroText2 = SplitStringUsingRegex(HeroText2);
  const heroText3 = SplitStringUsingRegex(HeroText3);
  const heroText4 = SplitStringUsingRegex(HeroText4);
  const heroText5 = SplitStringUsingRegex(HeroText5);
  const heroText6 = SplitStringUsingRegex(HeroText6);
  const blockText = SplitStringUsingRegex(BlockText);
  const blockText2 = SplitStringUsingRegex(BlockText2);
  const blockText3 = SplitStringUsingRegex(BlockText3);
  const blockText4 = SplitStringUsingRegex(BlockText4);
  const blockText5 = SplitStringUsingRegex(BlockText5);
  const blockText6 = SplitStringUsingRegex(BlockText6);
  const blockText7 = SplitStringUsingRegex(BlockText7);
  const subText = SplitStringUsingRegex(SubText);

  function videoTabHandle(selectedButton) {
    setVideoLink(selectedButton);
  }

  return (
    <Layouts title={"Home-Page"}>
      {/* <div className="main-content ">
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.01 }}
        >
          {blockText.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
              style={{ fontWeight: "600" }}
            >
              {char}
            </motion.span>
          ))}
          {heroText.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
          {blockText3.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
              style={{ fontWeight: "600" }}
            >
              {char}
            </motion.span>
          ))}
          {heroText2.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
          {blockText4.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
              style={{ fontWeight: "600" }}
            >
              {char}
            </motion.span>
          ))}
          {heroText3.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
          {blockText5.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
              style={{ fontWeight: "600" }}
            >
              {char}
            </motion.span>
          ))}
          {heroText4.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
          {blockText6.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
              style={{ fontWeight: "600" }}
            >
              {char}
            </motion.span>
          ))}
          {heroText5.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
          {blockText7.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
              style={{ fontWeight: "600" }}
            >
              {char}
            </motion.span>
          ))}
          {heroText6.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
          {blockText2.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
              style={{ fontWeight: "600" }}
            >
              {char}
            </motion.span>
          ))}
          <motion.b
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.04 }}
          >
            {subText.map((char) => (
              <motion.span
                key={Math.random() * 255}
                transition={{ duration: 1 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.b>
        </motion.p>
      </div> */}

      <div className="home-top">
        <Carousel />
      </div>

      <div className="value-proposition">
        <div className="value-column">
          <SectionHeader
            title={`Videos`}
            content={`Gain insights into our product's functionality and benefits via
              our video showcase`}
          />
        </div>
        <div className="video-player">
          <div className="video-wrapper">
            <VideoPlayer src={VIDEODATA[videoLink].src} />
            <ul className="videotabbuttons">
              <VideoTabButton
                state={videoLink}
                title="Product Video"
                onSelect={() => {
                  videoTabHandle("productvideo");
                }}
              />

              <VideoTabButton
                state={videoLink}
                title="Training Video"
                onSelect={() => {
                  videoTabHandle("trainingvideo");
                }}
              />

              <VideoTabButton
                state={videoLink}
                title="Surgery Video"
                onSelect={() => {
                  videoTabHandle("surgeryvideo");
                }}
              />

              <a href={"/marche-healthcare/videos"}>
                <VideoTabButton title={"View All"}></VideoTabButton>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="marche-values-div">
        <h2 className="team-heading">Marche’s Values</h2>
        <div className="home-our-team">
          <video autoPlay muted loop className="background-video">
            <source src={`./home/background-video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="overlay">
            <div className="team-header">
              <p className="team-paragraph">
                At the heart of our mission, our values guide us in every step.
                Discover the principles that drive our commitment to improving
                lives globally
              </p>
            </div>

            <div className="team-cards-container">
              <div className="team-cards">
                <motion.div
                  initial={{ x: -100, y: 100 }}
                  whileInView={{ x: 0, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="team-card"
                >
                  <div className="team-icon-container">
                    <img
                      src={`./money.png`}
                      alt="Team Icon"
                      className="team-icon"
                    />
                  </div>

                  <div className="card-content">
                    <h3 className="card-heading">Innovation</h3>
                    <p className="card-paragraph">
                      Pushing Boundaries, Bridging Health Disparities
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -100, y: 100 }}
                  whileInView={{ x: 0, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="team-card"
                >
                  <div className="team-icon-container">
                    <img
                      src={`./Collab.png`}
                      alt="Team Icon"
                      className="team-icon"
                    />
                  </div>

                  <div className="card-content">
                    <h3 className="card-heading">Collaboration</h3>
                    <p className="card-paragraph">
                      Unite diverse expertise to create impactful innovations
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -100, y: 100 }}
                  whileInView={{ x: 0, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="team-card"
                >
                  <div className="team-icon-container">
                    <img
                      src={`./Access.png`}
                      alt="Team Icon"
                      className="team-icon"
                    />
                  </div>

                  <div className="card-content">
                    <h3 className="card-heading">Accessibility</h3>
                    <p className="card-paragraph">
                      Bringing Modern Healthcare to Everyone
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: -100, y: 100 }}
                  whileInView={{ x: 0, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="team-card"
                >
                  <div className="team-icon-container">
                    <img
                      src={`./Compassion.png`}
                      alt="Team Icon"
                      className="team-icon"
                    />
                  </div>

                  <div className="card-content">
                    <h3 className="card-heading">Compassion</h3>
                    <p className="card-paragraph">
                      Empathy at Our Core Enhancing Lives Worldwide
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testmonial */}
      <div className="testmonialslide">
        {/* <SwiperSingle /> */}
        <div className="swipersingle-div">
          <div className="wording-div">
            <p>
              Marche's innovative biomedical products have revolutionized our
              medical procedures. Their commitment to excellence and
              cutting-edge technology is evident in every product we use. The
              team at Marche is responsive and dedicated to ensuring we have the
              best tools for patient care. We highly recommend Marche for their
              outstanding contributions to healthcare innovation.
            </p>
            <div className="author-div">
              <div>
                <h3>Dr. John Doe</h3>
                <p>Director, Medical Center</p>
              </div>
              <a href="https://www.linkedin.com/company/marche-healthcare/">
                <motion.svg
                  whileHover={{ scale: 1.2 }}
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.25h-3v-5.5c0-1.38-.56-2-1.75-2-1.14 0-1.75.79-1.75 2v5.5h-3v-11h3v1.62c.41-.79 1.27-1.62 2.75-1.62 1.94 0 3.5 1.12 3.5 4.01v6.99z" />
                </motion.svg>
              </a>
            </div>
          </div>
          <div className="photo-div">
            <img
              src="./home/testmonial-profile.jpg"
              alt="testimonial-picture"
              style={{ width: "400px" }}
            />
          </div>
        </div>
      </div>

      <div className="our-partners">
        <SectionHeader
          title={`Our Partners`}
          content={`Your support fuels our mission to innovate and ensure health equity worldwide. Together, we are making advanced healthcare accessible for all.`}
        />
        <div className="partners-logos">
          <Swiper
            slidesPerView={3} // Number of slides visible
            slidesPerGroup={1} // Moves 1 slide at a time
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto slide every 2 sec
            loop={true} // Enables infinite scrolling
            modules={[Autoplay]} // Import Autoplay module
          >
            <SwiperSlide>
              <motion.div
                // initial={{ opacity: 0, y: 100 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: .7, ease: "easeInOut", delay: 0.1 }}
                className="logo-container"
              >
                <img src={`./home/partner1.png`} alt="birac Logo" />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                // initial={{ opacity: 0, y: 100 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: .7, ease: "easeInOut", delay: 0.1 }}
                className="logo-container"
              >
                <img src={`./home/partner2.png`} alt="aic-pecf Logo" />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                // initial={{ opacity: 0, y: 100 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: .7, ease: "easeInOut", delay: 0.1 }}
                className="logo-container"
              >
                <img src={`./home/partner3.png`} alt="incubation Logo" />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                // initial={{ opacity: 0, y: 100 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: .7, ease: "easeInOut", delay: 0.1 }}
                className="logo-container"
              >
                <img src={`./home/partner4.png`} alt="startupTn Logo" />
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="blogs-and-events">
        <div className="blogs-and-events-container">
          <div className="blog-event">
            <div className="blog-event-column">
              <SectionHeader
                title={"Broadcast"}
                content={` Stay updated with our latest innovations and initiatives on our blog. Join us at upcoming events to collaborate and drive health equality forward`}
              />
            </div>

            <div className="blogs-cards-container">
            <a
          href="https://www.linkedin.com/company/marche-healthcare/"
          target="_blank"
        >
          <div className="blog-card-1">
            <img src="./home/surgery.jpg" alt="Blog" className="blog-image-1" />
            <div className="blog-content">
              <div className="blog-content-inside">
                <h3 className="blog-title">Blog title heading will go here</h3>
                <div className="blog-footer">
                  <div className="author-container">
                    <div className="img-container">
                      <img
                        src="./companyLogo.png"
                        alt="author"
                        className="author"
                      />
                    </div>
                    <div className="author-content">
                      <p className="author-name">Marche Healthcare</p>
                      <div className="author-time">
                        <p className="blog-date">12-12-2022</p>
                      </div>
                    </div>
                  </div>
                  <motion.svg
                    whileHover={{ scale: 1.2 }}
                    width="42"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="card-social"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.25h-3v-5.5c0-1.38-.56-2-1.75-2-1.14 0-1.75.79-1.75 2v5.5h-3v-11h3v1.62c.41-.79 1.27-1.62 2.75-1.62 1.94 0 3.5 1.12 3.5 4.01v6.99z" />
                  </motion.svg>
                  {/* <a
                  href="https://www.linkedin.com/company/marche-healthcare/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a> */}
                </div>
                <p className="blog-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  labore eos hic, doloremque quasi sed! Et enim debitis alias
                  non perferendis labore voluptas tenetur, veniam placeat iusto
                  culpa officia ea. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. A labore eos hic, doloremque quasi sed! Et
                  enim debitis alias non perferendis labore voluptas tenetur,
                  veniam placeat iusto culpa officia ea.
                  <span className="read-more">Read more...</span>
                </p>
              </div>
            </div>
          </div>
        </a>
            </div>
          </div>

          <Link
            to="/news"
            onClick={scrollToProduct}
            className="learn-more-button"
          >
            More Update
          </Link>
        </div>
      </div>
    </Layouts>
  );
}

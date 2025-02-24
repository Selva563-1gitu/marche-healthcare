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

const HeroText = `Innovation is at the heart of
everything we do. We believe that
groundbreaking ideas and state-of-the-
art technology have the power to
transform healthcare and
promote health equality.`;

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
  const subText = SplitStringUsingRegex(SubText);

  function videoTabHandle(selectedButton) {
    setVideoLink(selectedButton);
  }

  return (
    <Layouts title={"Home-Page"}>
      <div className="main-content ">
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: .01 }}
        >
          {heroText.map((char) => (
            <motion.span
              key={Math.random() * 255}
              transition={{ duration: 1 }}
              variants={charVariants}
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
      </div>

      <div>
        <Carousel />
      </div>

      <div className="value-proposition">
        <div className="value-column">
          <div className="value-content">
            <h2 className="value-heading">Videos</h2>
            <p className="value-paragraph">
              Gain insights into our product's functionality and benefits via
              our video showcase
            </p>
          </div>
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

              <a href={"/videos"}>
                <VideoTabButton title={"View All"}></VideoTabButton>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="home-our-team">
        <video autoPlay muted loop className="background-video">
          <source src={`./home/background-video.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay" >
          <div className="team-header">
            <h2 className="team-heading">Marche’s Values</h2>
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
                transition={{ delay: 0.3, duration: 0.5 }}
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
                transition={{ delay: 0.3, duration: 0.5 }}
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
                transition={{ delay: 0.3, duration: 0.5 }}
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
                transition={{ delay: 0.3, duration: 0.5 }}
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

      {/* testmonial */}
      <div className="testmonialslide">
        <SwiperSingle />
      </div>

      <div className="our-partners">
        <SectionHeader
          title={`Our Partners`}
          content={`Your support fuels our mission to innovate and ensure health equity worldwide. Together, we are making advanced healthcare accessible for all.`}
        />
        <div className="partners-logos">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="logo-container"
          >
            <img src={`./home/partner1.png`} alt="birac Logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="logo-container"
          >
            <img src={`./home/partner2.png`} alt="aic-pecf Logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="logo-container"
          >
            <img src={`./home/partner3.png`} alt="incubation Logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="logo-container"
          >
            <img src={`./home/partner4.png`} alt="startupTn Logo" />
          </motion.div>
        </div>
      </div>

      <div className="blogs-and-events">
        <div className="blogs-and-events-container">
          <div className="blog-event">
            <div className="blog-event-column">
              <SectionHeader
                title={"Social Media"}
                content={` Stay updated with our latest innovations and initiatives on our blog. Join us at upcoming events to collaborate and drive health equality forward`}
              />
            </div>

            <div className="blogs-cards-container">
              <div className="blog-card-1">
                <img
                  src="./home/surgery.jpg"
                  alt="Blog"
                  className="blog-image-1"
                />
                <div className="blog-content">
                  <div className="blog-content-inside">
                    <h3 className="blog-title">
                      Blog title heading will go here
                    </h3>
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
                          <p className="author-name">Mari</p>
                          <div className="author-time">
                            <p className="blog-date">12-12-2022</p>
                          </div>
                        </div>
                      </div>

                      <a
                        href="https://www.linkedin.com/company/marche-healthcare/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="card-social"
                          src="./linkedIn.svg"
                          alt="linkedin"
                        />
                      </a>
                    </div>
                    <p className="blog-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A labore eos hic, doloremque quasi sed! Et enim debitis
                      alias non perferendis labore voluptas tenetur, veniam
                      placeat iusto culpa officia ea. Lorem ipsum dolor, sit
                      amet consectetur adipisicing elit. A labore eos hic,
                      doloremque quasi sed! Et enim debitis alias non
                      perferendis labore voluptas tenetur, veniam placeat iusto
                      culpa officia ea.
                      <span className="read-more">Read more...</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-frame-column">
                {blogCardDetails.map((card, i) => (
                  <NewsCard key={i} {...card} />
                ))}
              </div>
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

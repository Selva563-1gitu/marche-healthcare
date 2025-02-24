import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { Layouts } from "../Layouts/Layouts";
import "./css/aboutpage.css";
// import banner from "../assets/about/aboutbanner.png";

import CardUserProfile from "../components/CardUserProfile";
import UserFullDetails from "../components/UserFullDetails";
import ScrollingContainer from "../components/ScrollingContainer";

const USERS = {
  boardofdirectors: [
    {
      id: 1,
      isActive: false,
      profileImg: "./profilePic.png",
      name: "Dr. M. Mari Raj",
      position: "Founder & CEO",
      twitter:"https://x.com/dr_mariraj?t=VuX2qMmZH_aW1omgQP0UQQ&s=08",
      linkedin: "https://www.linkedin.com/in/dr-mariraj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/dr.mariraj?igsh=MXRraXl6NG54aGs0ZA==",
    },
    {
      id: 2,
      isActive: false,
      profileImg: `./about/Photo.png`,
      name: "John Carter",
      position: "Founder & CEO",
      twitter: "https://x.com/info_march49738",
      linkedin: "https://www.linkedin.com/company/marche-healthcare/",
      instagram:
        "https://www.instagram.com/invites/contact/?igsh=jcoo1221g882&utm_content=uh81aej",
    },
  ],
  scientificadvisors: [
    {
      id: 1,
      isActive: false,
      profileImg: `./about/Photo.png`,
      name: "John Carter",
      position: "Founder & CEO",
      twitter: "https://x.com/info_march49738",
      linkedin: "https://www.linkedin.com/company/marche-healthcare/",
      instagram:
        "https://www.instagram.com/invites/contact/?igsh=jcoo1221g882&utm_content=uh81aej",
    },
    {
      id: 2,
      isActive: false,
      profileImg: "./profilePic.png",
      name: "Dr. M. Mari Raj",
      position: "Founder & CEO",
      twitter: "https://x.com/dr_mariraj?t=VuX2qMmZH_aW1omgQP0UQQ&s=08",
      linkedin: "https://www.linkedin.com/in/dr-mariraj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/dr.mariraj?igsh=MXRraXl6NG54aGs0ZA==",
    },
    {
      id: 3,
      isActive: false,
      profileImg: `./about/Photo.png`,
      name: "John Carter",
      position: "Founder & CEO",
      twitter: "https://x.com/info_march49738",
      linkedin: "https://www.linkedin.com/company/marche-healthcare/",
      instagram:
        "https://www.instagram.com/invites/contact/?igsh=jcoo1221g882&utm_content=uh81aej",
    },
    {
      id: 4,
      isActive: false,
      profileImg: "./profilePic.png",
      name: "Dr. M. Mari Raj",
      position: "Founder & CEO",
      twitter: "https://x.com/info_march49738",
      linkedin: "https://www.linkedin.com/company/marche-healthcare/",
      instagram:
        "https://www.instagram.com/invites/contact/?igsh=jcoo1221g882&utm_content=uh81aej",
    },
  ],
};

export default function AboutPage() {
  const [selectdTab, setSelectdTab] = useState("boardofdirectors");

  const [selctedCardList, setSelctedCardList] = useState(USERS[selectdTab]);

  function handleSelectUserBlog(username) {
    setSelectdTab(username);

    setSelctedCardList(USERS[username.toString()]);
  }

  // navigaiton
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Layouts title={"About-Page"}>
      <section className="abt-banner"></section>
        <div id="ourstory" className="aboutCompany">
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3 }}
            className="aboutCompany-content"
          >
            <p className="about-subheading">
              <img src="./about/companyLogo.png" alt="about" />
            </p>
            <h3 className="abtcom-heading">Our story</h3>
            <p className="abtcom-para">
              Welcome to Marche Health Care, where innovation meets dedication.
              Founded in 2020, we are a forward-thinking startup committed to
              revolutionizing the biomedical field. Our primary focus is on the
              innovation and development of cutting-edge biomedical instruments
              designed to empower healthcare professionals.
              <br />
              <br /> At Marche Health Care, we believe in pushing the boundaries
              of medical technology to enhance the capabilities of those on the
              frontlines of healthcare. Our team of experts is dedicated to
              creating solutions that improve patient outcomes and streamline
              medical processes. Join us on our journey to transform healthcare
              through innovation and excellence.
            </p>
          </motion.div>
          <motion.img
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3 }}
            src="./about/aboutside.png"
            className="abt-img"
          />
        </div>


        <div id="ourpurpose" className="purpose-container">
          <img
            src={`./about/bgpurpose.png`}
            alt="Purpose Background"
            className="purpose-image"
          />
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1.2 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="purpose-overlay"
          >
            <h2 className="purpose-heading">Our Purpose</h2>
            <p className="purpose-text">
              "Marche Healthcare is dedicated to addressing health disparities
              by developing innovative medical devices that ensure equal access
              to high-quality care for all"
            </p>
            <div className="author-info">
              <img src={"./author.png"} alt="Author" className="author-image" />
              <div className="author-details">
                <p className="author-name">Dr. Mari Raj</p>
                <p className="author-position">Founder & CEO</p>
              </div>
              <div className="divider"></div>
              <div className="social-icons">
             <a href="https://x.com/info_march49738" target="_blank" rel="noopener noreferrer">   <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0308 28.5H13.9692C6.26667 28.5 0 22.2333 0 14.5308V14.4692C0 6.76665 6.26667 0.5 13.9692 0.5H14.0308C21.7333 0.5 28 6.76665 28 14.4692V14.5308C28 22.2333 21.7333 28.5 14.0308 28.5ZM13.9692 1.44777C6.78889 1.44777 0.947771 7.28888 0.947771 14.4692V14.5308C0.947771 21.7111 6.78889 27.5522 13.9692 27.5522H14.0308C21.2111 27.5522 27.0522 21.7111 27.0522 14.5308V14.4692C27.0522 7.28888 21.2111 1.44777 14.0308 1.44777H13.9692Z"
                    fill="#131between313"
                  />
                  <path
                    d="M5.96074 7.09766L12.199 15.438L5.92188 22.2194H7.33501L12.8311 16.2825L17.2714 22.2194H22.0795L15.4906 13.4098L21.3336 7.09766H19.9205L14.8594 12.5654L10.7697 7.09766H5.96167H5.96074ZM8.03824 8.13833H10.2466L20.0001 21.1787H17.7918L8.03824 8.13833Z"
                    fill="#131313"
                  />
                </svg></a>

          <a href="https://www.linkedin.com/company/marche-healthcare/" target="_blank" rel="noopener noreferrer">      <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                >
                  <path
                    d="M14.5308 28.5H14.4692C6.76667 28.5 0.5 22.2333 0.5 14.5308V14.4692C0.5 6.76666 6.76667 0.5 14.4692 0.5H14.5308C22.2333 0.5 28.5 6.76666 28.5 14.4692V14.5308C28.5 22.2333 22.2333 28.5 14.5308 28.5ZM14.4692 1.44777C7.28889 1.44777 1.44777 7.28888 1.44777 14.4692V14.5308C1.44777 21.7111 7.28889 27.5522 14.4692 27.5522H14.5308C21.7111 27.5522 27.5522 21.7111 27.5522 14.5308V14.4692C27.5522 7.28888 21.7111 1.44777 14.5308 1.44777H14.4692Z"
                    fill="#3B83CB"
                  />
                  <path
                    d="M7.42421 9.96561C7.06785 9.63484 6.89062 9.22541 6.89062 8.73825C6.89062 8.2511 7.06879 7.82365 7.42421 7.49193C7.78057 7.16116 8.23929 6.9953 8.80132 6.9953C9.36335 6.9953 9.80407 7.16116 10.1595 7.49193C10.5158 7.8227 10.6931 8.23878 10.6931 8.73825C10.6931 9.23773 10.5149 9.63484 10.1595 9.96561C9.80312 10.2964 9.35103 10.4622 8.80132 10.4622C8.25161 10.4622 7.78057 10.2964 7.42421 9.96561ZM10.3936 11.8631V22.0042H7.18916V11.8631H10.3936Z"
                    fill="#3B83CB"
                  />
                  <path
                    d="M21.062 12.865C21.7605 13.6232 22.1093 14.6639 22.1093 15.9888V21.8252H19.066V16.4002C19.066 15.732 18.8926 15.2126 18.5466 14.843C18.2007 14.4733 17.7344 14.2876 17.1506 14.2876C16.5667 14.2876 16.1004 14.4724 15.7545 14.843C15.4085 15.2126 15.2351 15.732 15.2351 16.4002V21.8252H12.1738V11.8348H15.2351V13.1597C15.545 12.7181 15.963 12.3693 16.4881 12.1125C17.0131 11.8556 17.6036 11.7277 18.2604 11.7277C19.43 11.7277 20.3644 12.1068 21.062 12.865Z"
                    fill="#3B83CB"
                  />
                </svg></a>
              </div>
            </div>
          </motion.div>
        </div>
  

   
        <div id="ourmission" className="aboutMission">
        <ScrollingContainer heading="Our Mission" subHeading="Marche Healthcare's mission is to unite talented minds and
                foster collaboration, leveraging cutting-edge technology to
                tackle health disparities. By harnessing innovation and
                expertise, we aim to empower healthcare professionals and to
                create equitable access to advanced healthcare solutions,
                ensuring better health outcomes for all" bgimg="./about/ourmissionimg.png">

        </ScrollingContainer>
          <div className="abtMission-frame2">
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="abtframe-card"
            >
              <div className="card-body">
                <h3>Uniting Talented Minds</h3>
                <p>
                  Together, we create transformative solutions that promote
                  health equality
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.5, duration: 1 * 0.5 }}
              className="abtframe-card"
            >
              <div className="card-body">
                <h3>Empower Healthcare Professionals</h3>
                <p>
                  Our innovative solutions enhance their capabilities and
                  streamline workflows
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.7, duration: 2 * 0.5 }}
              className="abtframe-card"
            >
              <div className="card-body">
                <h3>Advancing Health Equality</h3>
                <p>
                  Ensure that everyone, regardless of their background, receives
                  the highest standard of healthcare
                </p>
              </div>
            </motion.div>
          </div>
        </div>


  
        <div id="ourvision" className="aboutVision">
          <div className="vision-frame">
            <motion.img
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              src={`./about/ourvisionimg.png`}
              alt="Vision"
            />
            <motion.div
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="vision-content"
            >
              <h2 className="vision-heading">Our Vision</h2>
              <p className="vision-paragraph">
                Our vision is a world where health equality is not just an
                aspiration but a fundamental human right, where every
                individual, regardless of background or circumstance, has access
                to equitable healthcare and opportunities for a healthy life."
              </p>
            </motion.div>
          </div>
        </div>
 

        <div id="ourteam" className="about-team">
          <div className="team-header">
            <h2 className="team-heading">Our Team</h2>
            <p className="team-paragraph">
              With a shared passion for improving global health outcomes, our
              team is dedicated to making a meaningful impact in the healthcare
              industry
            </p>
          </div>

          <div className="team-container">
            <div className="team-button">
              <button
                className={selectdTab === "boardofdirectors" ? "active" : ""}
                onClick={() => {
                  handleSelectUserBlog("boardofdirectors");
                }}
              >
                Board of Directors
              </button>
              <button
                className={selectdTab === "scientificadvisors" ? "active" : ""}
                onClick={() => {
                  handleSelectUserBlog("scientificadvisors");
                }}
              >
                Scientific Advisors
              </button>
            </div>
            <div className="team-cards-container">
              {selctedCardList ? (
                selctedCardList.map((userdetails, idx) => {
                  return (
                    <CardUserProfile
                      isActive={userdetails.isActive ? true : ""}
                      key={idx}
                      profileimg={userdetails.profileImg}
                      profilename={userdetails.name}
                      profiledesigination={userdetails.position}
                      twitter={userdetails.twitter}
                      linkedin={userdetails.linkedin}
                      instagram={userdetails.instagram}
                      onSelected={() => {
                        setSelctedCardList((prevList) => {
                          return [
                            {
                              ...prevList[0],
                              ...selctedCardList.filter(
                                (value) => value.id === userdetails.id
                              )[0],
                              isActive: "true",
                            },
                          ];
                        });
                      }}
                    />
                  );
                })
              ) : (
                <></>
              )}
            </div>

            {selctedCardList[0].isActive ? (
              <UserFullDetails
                setCardList={setSelctedCardList}
                selectedCardState={selctedCardList}
                footerCard={USERS[selectdTab].filter((obj) => {
                  const removeValue = selctedCardList[0].id;
                  return obj["id"] !== removeValue;
                })}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
   
    </Layouts>
  );
}

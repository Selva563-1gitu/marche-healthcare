import{ useState } from "react";
import { motion } from "framer-motion";
import "./css/contactpage.css";
import { Layouts } from "../Layouts/Layouts";
import ContactCards from "../components/ContactCards";
import emailImg from "../assets/contact/email.png";
import internetImg from "../assets/contact/internet.png";
import locationImg from "../assets/contact/location.png";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const cardDetails = [
    {
      img: emailImg,
      header: "Email",
      content: "Hi, our team is here to assist you, just mail us!",
      link: "info@marchehealthcare.org",
    },
    {
      img: internetImg,
      header: "Join our Community",
      content:
        "Stay informed with our latest news and events. Follow us to be part of the conversation",
      link: [
        { lin: "https://www.linkedin.com/company/marche-healthcare/", img: "./linkedIn.svg" },
        { lin: "https://x.com/info_march49738", img: "./X.svg" },
        { lin: "https://www.instagram.com/invites/contact/?igsh=jcoo1221g882&utm_content=uh81aej", img: "./instagram.svg" },
        { lin: "https://youtube.com/@marchehealthcare?si=Nktj1VOLNtZBrdmS", img: "./youtube.svg" },
      ],
    },
    {
      img: locationImg,
      header: "Locate us",
      content: "Find our office and location to reach us",
      link: "13, Near Auroville, Pondicherry- Tindivanam highways, Thiruchitrambalam , Vanur, Tamilnadu-605111",
    },
  ];
  return (
    <Layouts title={"Contact-Page"}>
      <section className="banner">
        <div className="banner-text">
          <h3>Contact us</h3>
          <p>
          Kindly submit you details and share your message to us, thankyou
          </p>
        </div>
      </section>
      <motion.section initial={{scale:.9 ,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{delay:0.5,duration:0.5}} id="cards">
        {cardDetails.map((card) => (
          <ContactCards key={card.header} {...card} />
        ))}
      </motion.section>
      <section id="form">
        <h3>Hello! Feel free to get in touch with us</h3>
        <p>
          Discover how we can support your needs by reaching out to us we're
          here to provide assistance and guidance.
        </p>
        <div  className="splitter">
          <form className="contact-form">
            <div >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                rows={10}
                placeholder="Type ypur message..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>

            <button type="button">Submit</button>
          </form>
          <motion.div initial={{x:100,opacity:0}} whileInView={{opacity:1,x:0}} transition={{delay:0.5,duration:0.5}}  className="group-images">
            <img src="./contact/contact-group-img.png" alt="contact images" />
          </motion.div>
        </div>
      </section>
    </Layouts>
  );
};

export default ContactPage;

import "./css/newscard.css";
import { motion } from "framer-motion";

const NewsCard = ({
  id,
  img,
  title,
  content,
  profile,
  names,
  date,
  linkedin,
}) => {
  return (
    <a
      href="https://www.linkedin.com/company/marche-healthcare/"
      target="_blank"
    >
      <div className="blog-card">
        <img src={img} alt="Blog" className="blog-image-3" />
        <div className="blog-content">
          <h3 className="blog-title">{title}</h3>
          <p className="blog-text">{content}</p>
        </div>
        <div className="blog-footer">
          <div className="author-container">
            <div className="img-container">
              <img src={profile} alt="author" className="author" />
            </div>
            <div className="author-content">
              <p className="author-name">{names}</p>
              <div className="author-time">
                <p className="blog-date">{date}</p>
              </div>
            </div>
          </div>
          <a href={linkedin} target="_blank">
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
          </a>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;

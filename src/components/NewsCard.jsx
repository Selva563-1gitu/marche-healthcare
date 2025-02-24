import "./css/newscard.css";

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
          <img className="card-social" src="./linkedIn.svg" alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;

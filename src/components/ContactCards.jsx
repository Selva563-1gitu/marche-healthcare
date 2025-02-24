const ContactCards = ({ img, header, content, link }) => {
  return (
    <div className="contact-card">
      <img src={img} alt={header} />
      <h3>{header}</h3>
      <p>{content}</p>
      {Array.isArray(link) ? (
        link.map((item, index) => (
          <a style={{
            margin:'0 .2em',
            width:'24px',
            height:'24px',
          }} href={item.lin} target="_blank" key={index}>
            <img width={'30px'} src={item.img} alt={item.lin} />
          </a>
        ))
      ) : (
        <a href={link} target="_blank">{link}</a>
      )}
    </div>
  );
};

export default ContactCards;

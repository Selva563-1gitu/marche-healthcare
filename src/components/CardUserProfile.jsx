import { motion } from "framer-motion";
import "./css/carduserprofile.css";

const CardUserProfile = ({
  isActive,
  profileimg,
  profilename,
  profiledesigination,
  twitter,
  linkedin,
  instagram,
  onSelected,
}) => {
  return (
    <motion.div
      whileHover={{ x: [0, -20, 20, -20, 20, 0] }}
      transition={{ delay: 0.3 }}
      onClick={onSelected}
      className={
        isActive ? `card-user-profile user-card-active` : `card-user-profile`
      }
    >
      <div className="profile-img">
        <img src={profileimg} alt="Profile Image" />
      </div>
      <h3>{profilename}</h3>
      <h4>{profiledesigination}</h4>
      <div className="card-social-link">
        <a href={instagram} target="_blank">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="instagram-svgrepo-com 1" clipPath="url(#clip0_877_3056)">
              <g id="Group">
                <path
                  id="Vector"
                  d="M18 2H6C3.8 2 2 3.8 2 6V18C2 20.2 3.8 22 6 22H18C20.2 22 22 20.2 22 18V6C22 3.8 20.2 2 18 2ZM12 17C9.25 17 7 14.75 7 12C7 9.25 9.25 7 12 7C14.75 7 17 9.25 17 12C17 14.75 14.75 17 12 17ZM17.5 7.5C16.95 7.5 16.5 7.05 16.5 6.5C16.5 5.95 16.95 5.5 17.5 5.5C18.05 5.5 18.5 5.95 18.5 6.5C18.5 7.05 18.05 7.5 17.5 7.5Z"
                  fill="black"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_877_3056">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href={linkedin} target="_blank">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon / LinkedIn">
              <path
                id="Vector"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
                fill="black"
              />
            </g>
          </svg>
        </a>
        <a href={twitter} target="_blank">
          <svg
            className="twitter"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
          >
            <path
              d="M0.956831 0.560425L7.19506 8.90081L0.917969 15.6821H2.3311L7.82722 9.74529L12.2675 15.6821H17.0756L10.4867 6.87259L16.3297 0.560425H14.9165L9.85544 6.02814L5.76582 0.560425H0.957768H0.956831ZM3.03434 1.6011H5.24265L14.9962 14.6415H12.7879L3.03434 1.6011Z"
              fill="#131313"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default CardUserProfile;

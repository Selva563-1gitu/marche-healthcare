import { useRef, useState } from "react";
import { motion, reverseEasing } from "framer-motion";
import "./css/videoplayer.css";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  function tooglePlayPause() {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(!isPlaying);
      } else {
        videoRef.current.pause();
        setIsPlaying(!isPlaying);
      }
    }
  }

  return (
    <>
      <motion.video
     initial={{scale:0.7}}
     whileInView={{scale:1}}
     transition={{duration:2}}
    //  viewport={{amount:"all"}}
        ref={videoRef}
        className="video-thumbnail"
        src={src}
        controls={isPlaying}
      ></motion.video>
      <div >
        <img
        className={isPlaying ? `play-hide` : "play-button"}
          src="./home/VectorPlayButton.png"
          alt="playButton"
          onClick={tooglePlayPause}
        />
      </div>
    </>
  );
};

export default VideoPlayer;

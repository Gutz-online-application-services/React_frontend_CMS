import { motion } from "framer-motion"; // Import Framer Motion
import "./Header.scss";
import PlayVideoModal from "./PlayVideoModal";
import { AppWrap } from "../../wrapper";
import Scene from "./../../assets/header-assets/27.png";
import item1 from "./../../assets/header-assets/30.png";
import item2 from "./../../assets/header-assets/31.png";
import item3 from "./../../assets/header-assets/35.png";
import { BsPlayCircle, BsFillPlayCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";

function Header() {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Gutz Online Hiring Page"; // The text you want to "type"

  const videoUrl = "https://www.youtube.com/embed/yii7ACa6VIs"; // Replace with your YouTube video URL

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = 100; // Adjust the typing speed (milliseconds)

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingInterval);
      }
    };

    typeText();
  }, []);

  return (
    <div id="home" className="app__header app__flex">
      <div className="app__header-container">
        <motion.div
          className="container-right"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "tween" }}
        >
          <img className="scene" src={Scene} alt="" />
          <img src={item1} className="item one" alt="" />
          <img src={item2} className="item two" alt="" />
          <img src={item3} className="item three" alt="" />
        </motion.div>
        <motion.div
          className="container-left"
          initial={{ opacity: 0, x: -10 }} // Starting position (unchanged)
          animate={{ opacity: 1, x: 0 }} // Slide in from the left to the right
          transition={{ duration: 1, type: "tween" }}
        >
          <h2>
            {typedText}
            <span className="blinking-cursor">|</span>
          </h2>
          <p className="p-text">
            GUTZ Online Communication Services, founded in 2018 in the
            Philippines, delivers top-tier BPO solutions worldwide, led by CEO
            Regine Mae E. Gutierrez and COO Katherine J. Agripa.
          </p>
          <button
            onClick={openModal}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <span>{hover ? <BsFillPlayCircleFill /> : <BsPlayCircle />}</span>
            Play Video
          </button>
        </motion.div>
      </div>
      <PlayVideoModal isOpen={modal} onClose={closeModal} videoUrl={videoUrl} />
    </div>
  );
}

export default AppWrap(Header, "home");

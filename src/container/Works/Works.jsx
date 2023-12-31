import { useState, useEffect } from "react";
import { AiFillInfoCircle, AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import BookkeeperModal from "../../components/static_pages/BookkeeperModal";
import WebDeveloperModal from "../../components/static_pages/WebDeveloperModal";
import GraphicDesignerModal from "../../components/static_pages/GraphicDesignerModal";
import CopywriterModal from "../../components/static_pages/CopywriterModal";
import TechSupportModal from "../../components/static_pages/TechSupportModal";
import TelemarketerModal from "../../components/static_pages/TelemarketerModal";
import VirtualAssistantModal from "../../components/static_pages/VirtualAssistant";
import ESLTutorModal from "../../components/static_pages/ESLTutorModal";

import "./Works.scss";

function Works() {
  const [toggle, setToggle] = useState(false);
  const [targetModal, setTargetModal] = useState(null);

  const descriptions = {
    "Book keeper": <BookkeeperModal toggle={setToggle} />,
    "Web Developer": <WebDeveloperModal toggle={setToggle} />,
    "Graphic Designer": <GraphicDesignerModal toggle={setToggle} />,
    Copywriter: <CopywriterModal toggle={setToggle} />,
    "IT/Tech Support": <TechSupportModal toggle={setToggle} />,
    Telemarketer: <TelemarketerModal toggle={setToggle} />,
    "Virtual Assistant": <VirtualAssistantModal toggle={setToggle} />,
    "ESL Tutor": <ESLTutorModal toggle={setToggle} />,
  };

  const toggleModal = (targetDescrition) => {
    setToggle(true);
    setTargetModal(descriptions[targetDescrition]);
    console.log(targetDescrition);
  };

  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [works, setWorks] = useState([]);
  const [filterWork, setFilerWork] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const getWorks = await client.fetch('*[_type == "works"]');
      setWorks(getWorks);
      setFilerWork(getWorks);
    }

    getPosts();
  }, []);

  const handelWorkFiler = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilerWork(works);
      } else {
        setFilerWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      {toggle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {targetModal}
        </motion.div>
      )}
      <h2 className="head-text">
        Build your <span>Career</span> with us
      </h2>

      <div className="app__work-filter">
        {[
          "General Operations",
          "Creatives",
          "IT/Production",
          "Language",
          "All",
        ].map((item, index) => (
          <div
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""
              }`}
            key={index}
            onClick={() => handelWorkFiler(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        className="app__work-portfolio"
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              {work.imgUrl ? (
                <img src={urlFor(work.imgUrl)} alt={work.name} />
              ) : null}

              <div
                className="app__work-info"
                onClick={() => toggleModal(work.title)}
              >
                <AiFillInfoCircle />
              </div>

              <motion.div
                className="app__work-hover app__flex"
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
              >
                <a
                  href={`${work.codeLink}?stringValue=${encodeURIComponent(
                    work.title,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    className="app__flex"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <AiOutlineLink />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Works, "app__works"),
  "career",
  "app__primarybg",
);

import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";

import { urlFor, client } from "../../client";
import "./Works.scss";

function Works() {
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
              {console.log(work)}
              {work.imgUrl ? (
                <img src={urlFor(work.imgUrl)} alt={work.name} />
              ) : null}
              <motion.div
                className="app__work-hover app__flex"
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    className="app__flex"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a
                  href={`${work.codeLink}?stringValue=${encodeURIComponent(
                    work.name,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {console.log(work.codeLink)}
                  {console.log(work.workname)}
                  <motion.div
                    className="app__flex"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <AiFillGithub />
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

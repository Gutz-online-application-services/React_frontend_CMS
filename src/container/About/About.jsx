import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";

import { urlFor, client } from "../../client";

function About() {
  const [abouts, setAbout] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const getAbouts = await client.fetch('*[_type == "abouts"]');
      setAbout(getAbouts);
    }

    getPosts();
  }, []);

  return (
    <>
      <h2 className="head-text">
        Turning <span>Coffee</span> into <span>Code</span> one at time.
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg",
);

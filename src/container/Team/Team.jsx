import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Team.scss";

import { urlFor, client } from "../../client";

function Team() {
  const [teams, setAbout] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const getAbouts = await client.fetch('*[_type == "team"]');
      setAbout(getAbouts);
    }

    getPosts();
  }, []);

  return (
    <>
      <h2 className="head-text">
        Meet our <span>Devoted</span> team <span>Changing</span> the{" "}
        <span>World</span>.
      </h2>

      {console.log(teams.name)}

      <div className="app__profiles">
        {teams.map((member, index) => (
          <motion.div
            key={member.name + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={urlFor(member.imgUrl)} alt={member.name} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {member.name}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {member.position}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(MotionWrap(Team, "app__about"), "team", "app__whitebg");

import React from "react";
import "./SocialMedia.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/your-linkedin-profile-url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/joshua-jonelle-espocia-949667239">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/ccdev.facebook?mibextid=ZbWKwL">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;

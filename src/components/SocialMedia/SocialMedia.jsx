import React from "react";
import "./SocialMedia.scss";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="#">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="#">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;

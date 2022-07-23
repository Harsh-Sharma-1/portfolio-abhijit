import React from "react";
import "./Social.css";
import { AiOutlineBehance } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
function Social() {
  return (
    <div className="social-container">
      <div className="s-icons">
        <a href="https://www.linkedin.com/in/abhijit-panchal/">
          <AiOutlineLinkedin size={30} />
        </a>
        <a href="https://github.com/abhi-j/">
          <GoMarkGithub size={30} />
        </a>
        <a href="https://www.behance.net/abhijitpanchal">
          <AiOutlineBehance size={30} />
        </a>
        <a href="https://www.behance.net/abhijitpanchal">
          <FiTwitter size={30} />
        </a>
      </div>
    </div>
  );
}

export default Social;

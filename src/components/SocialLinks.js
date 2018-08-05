import React from "react";
import {
  FaGithub,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://twitter.com/FMMRicardo">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://github.com/fmmricardo">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;

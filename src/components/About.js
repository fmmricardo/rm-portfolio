import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/RM_3.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          selftaught frontend developer since 2016, looking for freelancing jobs as well looking for a part-time or full-time. 
          based in Porto with knowledge in html, css and javascript. 
          Skills: HTML, CSS, Sass, Javascript jQuery, Git, Github, Gulp, npm, Command line Wordpress, Responsive design Website Performance, nodejs, react(basics), 
          photoshop, Ilustrator, Bootstrap, shopify.
          study Frontend Development, UX/UI @ The New Digital School

        </p>
        {/* <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Jonathan Doe</span>
              <br />
              <span>
                1600 Amphitheatre Parkway
                <br /> Mountain View, CA 94043 US
              </span>
              <br />
              <span>(123)456-7890</span>
              <br />
              <span>anyone@website.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default About;

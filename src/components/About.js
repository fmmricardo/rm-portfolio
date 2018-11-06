import React from 'react';
import { FaCloudDownload } from 'react-icons/lib/fa';

import profilePic from '../assets/images/RM_3.jpg';

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          <p>
            I worked as a Chemical Engineer in Detmold, Germany for 4 years.
            During this time I had an opportunity to deal not only with the
            professional challenges but also with a new culture and a new
            language. During this time I started learning code by myself. At
            first, it started as a hobby but soon became more than that and the
            interest for the tech industry grew exponentially. Since 2016 I was
            already into the game and I learned skills like CSS, HTML,
            Javascript, jQuery and Node js on Treehouse.
          </p>
          <p>
            In 2017 I decided to come back to Portugal for reasons of major
            force, and it was the perfect time to take and to pursue my passion
            – Frontend development and since I moved I started to do some client
            projects using WordPress and Shopify. In January 2018 I join in The
            New Digital School program that is a tailored to and driven by each
            student’s professional goals and personal needs. It’s a place to
            work on both personal and client projects, with the support and
            guidance of industry experts, a network of mentors, a team of
            facilitators and your fellow students. Throw the school wit have bee
            the opportunity to make client projects, some during school time
            others on ower free time, which allow us to prepare for a
            professional environment.
          </p>
          <p>
            During this time I've been collect Design skills that complement me
            Frontend developer and help especially on the problem-solving
            approach and having a better an understanding of the collaborative
            work between Designers and Developers.
          </p>
        </p>
        <p>
          Study Frontend Development and UX/UI Design @ The New Digital School
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

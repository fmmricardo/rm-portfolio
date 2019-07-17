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
            I worked as a Chemical Engineer in Detmold, Germany, for four years.
            During this time, I had an opportunity to deal not only with the
            professional challenges but also with a new culture and a new
            language. During this time, I started learning code by myself. At
            first, it began as a hobby but soon became more than that, and the
            interest for the tech industry grew exponentially. Since 2016 I was
            already into the game, and I learned skills like CSS, HTML,
            Javascript, jQuery and Node js on Treehouse.{' '}
          </p>
          <p>
            In 2017 I found the timing to pursue my passion – Frontend
            development and then I started to do some client projects using
            WordPress and Shopify. In January 2018, I joined The New Digital
            School program that is tailored to and driven by each student's
            professional goals and personal needs. It was a place to work on
            both own and client projects, with the support and guidance of
            industry experts, a network of mentors, a team of facilitators and
            your fellow students. Throw the school we had the opportunity to
            make client projects, some during school time others on ower free
            time, which allowed us to prepare for a professional environment.
          </p>
          <p>
            I learned Design skills that complement me as a Frontend developer,
            especially on the problem-solving approach and having a better
            understanding of the collaborative work between Designers and
            Developers.{' '}
          </p>
        </p>
      </div>
    </div>
  </section>
);

export default About;

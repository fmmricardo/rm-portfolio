import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>UX/UI Design / Frontend Development</h3>
          <p className="info">
          The New Digital School
            <span>&bull;</span>
            <em className="date">January - December 2018</em>
          </p>

          <p>
          TNDS is tailored to and driven by each student’s professional goals and personal needs. It’s a place to work on both personal and client projects, with the support and guidance of industry experts, 
          a network of mentors, a team of facilitators and your fellow students. 

          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Treehause</h3>
          <p className="info">
            Online couser platform.
            <a href="https://teamtreehouse.com/tracks/front-end-web-development"> Frontend Track</a> and
            <a href="https://teamtreehouse.com/tracks/full-stack-javascript"> Javascript Fullstack track </a>   
            <span>&bull;</span>
            <em className="date">2016-2017</em>
          </p>
          <p>
          besides of learning a lot with the great content they provide
          I develop my self-discipline in order to pursue a new career change.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;

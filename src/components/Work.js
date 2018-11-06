import React from 'react';

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work Experience</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>UTRUST</h3>
          <p className="info">
            Frontdend developer
            <span>&bull;</span>
            <em className="date">October 2018 - Present</em>
          </p>
          <p>
            Mantaining and improving the website project. Using react technology
            through Gatsbyjs. Workinng with netlify continuous integrations and
            implementing netlify cms.
          </p>
        </div>
        <div className="twelve columns">
          <h3>Freelancing</h3>
          <p className="info">
            Frontdend developer
            <span>&bull;</span>
            <em className="date">March 2010 - Present</em>
          </p>
          <p>
            <li>Wordpress websites</li>
            <li>Webcomerce websites using Shopify</li>
            <li>Starting develop an app with react - on going</li>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;

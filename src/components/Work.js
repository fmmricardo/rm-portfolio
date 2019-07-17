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
            Working on cross funcitonal team, involved in multiple projoects,
            improving the dashboard used by the merchants and maintaining
            websites, by Using technologies like react,gatsby, redux, graphql,
            Cypressjs. Working with netlify, netlify cms.
            <br />
            Implementing customer data infrastructure (CDI) like Segment wich
            allow to collect data and send to analytic tools used .{' '}
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
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;

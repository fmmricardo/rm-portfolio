import React from 'react';
import SocialLinks from './SocialLinks';

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Ricardo Martins</h1>
      <h3>
        Frontend developer with focus on user experience and a flair for design.
        Always looking for something new to learn and willing to help those
        around me. On my free time, I like to ride my bike and “get lost” in the
        mountains.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;

import React from "react";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import Websites from "./Websites";

const Resume = () => (
  <section id="resume">
    <Education />
    <Work />
    <Skills />
    <Websites />
  </section>
);

export default Resume;

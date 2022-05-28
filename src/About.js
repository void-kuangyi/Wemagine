import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  padding-top: 63px;
  padding-left: 103px;
  padding-right: 192px;
  padding-bottom: 113px;
`;

const About = () => (
  <StyledAbout id="about">
    <h1>About us</h1>
    <p>
      We are a group of TU/e master of industry design students studying design
      innovation strategy. This is a landing page we designed to test our
      hypothesis.
    </p>
  </StyledAbout>
);

export default About;

import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeadText = styled.div`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 48px;
`;

const StyledButton = styled.a`
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #d40f92;
  border: none;
  color: white;
  font-weight: 600;
  text-decoration: none;
`;

const StyledHeadline = styled.div`
  padding: 340px;
  margin-right: 20px;
  margin-left: 20px;
  text-align: center;
  background-image: url("background.png");
  color: white;
`;
const StyledSecondaryHeadline = styled.div`
  display: flex;
  padding: 100px;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  justify-content: flex-start;
  text-decoration: none;
  margin-left: 32px;
  padding: 48px;
`;

const StyledImage = styled.rect`
  width: 592px;
  background-color: #f3f4f6;
  flex-basis: 1;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #d40f92;
`;

const Headline = () => (
  <div id="features">
    <StyledHeadline>
      <HeadText>Dynamic office art display powered by OpenAI</HeadText>
      <StyledButton href="#prices">Get Started Now</StyledButton>
    </StyledHeadline>
    <StyledSecondaryHeadline>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src="0.jpeg" />
        </div>
        <div>
          <img src="1.jpeg" />
        </div>
        <div>
          <img src="2.jpeg" />
        </div>
      </Carousel>
      <StyledText>
        <h1>Co-create your office artwork</h1>
        <p>
          Instead of having a static image in the office, we reimagine the
          future of the office decorative art. We offer dynamic art display
          powered by OpenAI. The art becomes a co-creation space for your
          employees.{" "}
        </p>
        <StyledLink href="#prices">
          <b>
            Get Started <span>&#8594;</span>
          </b>
        </StyledLink>
      </StyledText>
    </StyledSecondaryHeadline>
  </div>
);

export default Headline;

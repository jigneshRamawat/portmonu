import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/1.png";
import img2 from "../assets/Images/2.png";
import img3 from "../assets/Images/3.png";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  position: relative;
  display: flex;

  background-color: #500018;
  color: #fff0df;

  @media (max-width: 64em) {
    width: 90vw;
    min-height: auto;
    display: block;
    padding: 5rem 0 6rem;
  }

  @media (max-width: 30em) {
    width: 92vw;
    padding: 4rem 0 5rem;
  }
`;
const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 15%;
  color: #fff0df;

  /* KEEP DESKTOP/THE ORIGINAL TABLET DESIGN */
  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }

  /* NEW MOBILE/TABLET LAYOUT */
  @media (max-width: 64em) {
    position: relative;
    top: auto;
    left: auto;
    transform: none !important;

    width: 100%;
    margin: 3rem auto 0;
    padding: 0;

    background: none;
    backdrop-filter: none;
    border-radius: 0;

    font-weight: 400;
    line-height: 1.7;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    width: 100%;
    margin-top: 2.5rem;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.7;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  background-color: #500018;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }

  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }

  /* ORIGINAL TABLET */
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }

    .small-img-2 {
      width: 30%;
      height: auto;
      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }

  /* NEW TABLET + MOBILE */
  @media (max-width: 64em) {
    width: 100%;
    display: block;
    position: relative;
    min-height: auto;
  }

  /* MAIN IMAGE */
  img:first-child {
    @media (max-width: 64em) {
      display: block;
      width: 75%;
      height: 65vh;
      margin: 0 auto;
      object-fit: cover;
      object-position: center;
    }

    @media (max-width: 48em) {
      width: 82%;
      height: 65vh;
    }

    @media (max-width: 30em) {
      width: 88%;
      height: 58vh;
    }
  }

  /* DECORATIVE IMAGE 1 */
  .small-img-1 {
    @media (max-width: 64em) {
      width: 28%;
      height: auto;
      position: absolute;
      left: 0;
      bottom: 5%;
      z-index: 3;
    }

    @media (max-width: 30em) {
      width: 32%;
      left: -2%;
      bottom: 3%;
    }
  }

  /* DECORATIVE IMAGE 2 */
  .small-img-2 {
    @media (max-width: 64em) {
      width: 30%;
      height: auto;
      position: absolute;
      left: auto;
      right: 0;
      top: 55%;
      z-index: 3;
    }

    @media (max-width: 30em) {
      width: 32%;
      right: -2%;
      top: 60%;
    }
  }
`;

const Title = styled.h1`
  font-size:9rem;
  font-family: "Kaushan Script";
  font-weight: 900;
  color: #ff4fa8;
  position: absolute;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  /* ORIGINAL */
  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }

  /* NEW MOBILE + TABLET */
  @media (max-width: 64em) {
    position: relative;
    top: auto;
    left: auto;

    width: 100%;
    margin: 0 0 3rem;

    text-align: center;

    font-size: clamp(4rem, 10vw, 7rem);
    line-height: 1;
  }

  @media (max-width: 48em) {
    margin-bottom: 2.5rem;
    font-size: clamp(3.5rem, 14vw, 5.5rem);
  }

  @media (max-width: 30em) {
    margin-bottom: 2rem;
    font-size: clamp(3.2rem, 16vw, 5rem);
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Me
      </Title>

      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Graphic Designer with 8 years of experience specializing in FMCG and
        beauty brand visuals. I bridge the gap between strategic brand
        positioning and premium packaging design.
        <br />
        <br />
        My expertise spans haircare, makeup, and skincare — from retail shelves
        to professional salon-exclusive lines. I design with a deep
        understanding of skin science aesthetics, material textures, and the
        subtle psychology of beige & brown luxury.
        <br />
        <br />
        Haircare, Makeup, Skincare Retail,
        <br />
        Professional Salon, Skin Science
      </Left>

      <Right>
        <img
          width="400"
          height="600"
          src={img1}
          alt="About Us"
          style={{
            border: "10px solid #ebb0f8",
            borderTopLeftRadius: "70%",
            borderTopRightRadius: "30%",
          }}
        />

        <img
          width="400"
          height="600"
          className="small-img-1"
          src={img2}
          alt="About Us"
          data-scroll
          data-scroll-speed="5"
        />

        <img
          width="400"
          height="600"
          className="small-img-2"
          src={img3}
          alt="About Us"
          data-scroll
          data-scroll-speed="-2"
        />
      </Right>
    </Section>
  );
};

export default About;

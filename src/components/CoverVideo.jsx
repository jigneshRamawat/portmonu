import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import MainVideo from "../assets/Walking Girl.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }

    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }

  /* MOBILE ONLY */
  @media (max-width: 48em) {
    height: 100svh;

    video {
      height: 100svh;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};

    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      font-size: clamp(3.5rem, 16vw, 6rem);
      line-height: 0.95;
    }
  }

  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;

    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: -1.5rem;
    }
  }

  /* MOBILE ONLY */
  @media (max-width: 48em) {
    padding: 0 1.2rem;
    box-sizing: border-box;

    > div {
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 0 0.5rem;
    }

    h1 {
      text-align: center;
      white-space: nowrap;
    }

    h2 {
      max-width: 90%;
      text-align: center;
      line-height: 1.2;
    }
  }

  /* SMALL MOBILE ONLY */
  @media (max-width: 30em) {
    justify-content: center;

    > div {
      flex-direction: column;
      gap: 0;
    }

    h1 {
      font-size: clamp(3.5rem, 17vw, 5.5rem);
      line-height: 0.9;
    }

    h2 {
      max-width: 95%;
      font-size: 1rem;
      line-height: 1.3;
      margin-top: 1rem;
    }

    h2:last-child {
      margin-top: 1.5rem;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  return (
    <VideoContainer data-scroll>
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            Graphic
          </motion.h1>

          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            Designer
          </motion.h1>
        </div>

        <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          MONA ASWAL
        </motion.h2>

        <motion.h2
          className="pt-10"
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          Skip traditional agencies. Premium beauty visuals delivered with
          precision.
        </motion.h2>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
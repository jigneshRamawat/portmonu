import { motion } from "framer-motion";
import React from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 45%, 49%, 100% {
    transform: scaleY(1);
  }
  47% {
    transform: scaleY(0.08);
  }
`;

const pupilMove = keyframes`
  0%, 100% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(3px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const VideoContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  position: relative;
  overflow: hidden;
  background: #500018;
  color: #fff0df;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 5%;
  box-sizing: border-box;

  @media (max-width: 48em) {
    padding: 2rem 5%;
  }

  @media (max-width: 30em) {
    padding: 1.5rem 5%;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 2;
  font-family: Arial, sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1.2rem);
  color: #fff0df;

  .name {
    text-align: left;
  }

  .designation {
    text-align: right;
  }

  @media (max-width: 30em) {
    font-size: 0.75rem;
  }
`;

const Main = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  font-family: "Sirin Stencil", sans-serif;
  font-size: clamp(3rem, 11vw, 13rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.045em;
  color: #ff4fa8;
  text-align: center;

  @media (max-width: 48em) {
    font-size: clamp(2.5rem, 10.5vw, 6.5rem);
    letter-spacing: -0.05em;
  }

  @media (max-width: 30em) {
    font-size: clamp(2rem, 10vw, 3.5rem);
  }
`;

const Letter = styled.span`
  display: inline-block;
`;

const Eye = styled.span`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 0.8em;
  height: 0.8em;
  margin: 0 0.025em;
  border-radius: 50%;
  background: #fff0df;
  border: 0.035em solid #ff4fa8;
  box-shadow: 0 0 0.04em #ff4fa8;
  animation: ${blink} 4s infinite;
  transform-origin: center;

  &::before {
    content: "";
    width: 0.37em;
    height: 0.25em;
    border-radius: 50%;
    background: #a0001b;
    animation: ${pupilMove} 3s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0.08em;
    height: 0.08em;
    top: 25%;
    left: 28%;
    border-radius: 50%;
    background: white;
  }
`;

const Subtitle = styled(motion.p)`
  max-width: 750px;
  margin-top: 2rem;
  color: #fff0df;
  font-family: "Sirin Stencil", sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.3rem);
  line-height: 1.9;
  text-align: center;
  animation: ${fadeIn} 1.5s ease both;

  @media (max-width: 48em) {
    max-width: 90%;
    margin-top: 1.5rem;
    font-size: 0.9rem;
  }
`;

const Footer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  color: #fff0df;
  font-family: "Sirin Stencil", sans-serif;
  font-size: clamp(0.8rem, 1.3vw, 1.1rem);
  line-height: 1.4;

  .contact {
    text-align: left;
  }

  .date {
    text-align: right;
  }

  @media (max-width: 30em) {
    font-size: 0.7rem;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer id="home">
      <Header>
        <div className="name"></div>

      </Header>

      <Main>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Letter>P</Letter>
          <Eye />
          <Letter>R</Letter>
          <Letter>T</Letter>
          <Letter>F</Letter>
          <Eye />
          <Letter>L</Letter>
          <Letter>I</Letter>
          <Eye />
        </Title>

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Letter>M</Letter>
          <Eye />
          <Letter>N</Letter>
          <Letter>A</Letter>
          <span style={{padding:"30px"}}></span>
          <Letter>A</Letter>
          <Letter>S</Letter>
          <Letter>W</Letter>
          <Letter>A</Letter>
          <Letter>L</Letter>
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Skip traditional agencies. Premium beauty visuals
          delivered with precision.
        </Subtitle>
      </Main>

      <Footer>
        <div className="contact">
          Contact:
          <br />
          mona.aswal@gmail.com
        </div>

        <div className="date">Graphic Designer</div>
      </Footer>
    </VideoContainer>
  );
};

export default CoverVideo;
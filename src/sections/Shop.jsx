import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.png";
import img5 from "../assets/Images/5.jpg";
import img6 from "../assets/Images/6.png";
import img7 from "../assets/Images/7.jpg";
import img8 from "../assets/Images/8.jpg";
import img9 from "../assets/Images/9.jpg";
import img10 from "../assets/Images/10.jpg";
import img11 from "../assets/Images/11.jpg";
import img12 from "../assets/Images/12.jpg";

gsap.registerPlugin(ScrollTrigger);

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  background-color: #ff4fa8;

  @media (max-width: 64em) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: auto;
    overflow: visible;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 900;
  color: #500118;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
  margin: 0;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 1.5rem 0;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: clamp(3rem, 14vw, 5rem);
    padding-top: 1rem;
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: #ff4fa8;
  color: #500018;
  min-height: 100vh;
  z-index: 10;
  position: fixed;
  left: 0;


  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
    line-height: 1.7;
    padding-top:85px;
  }

  @media (max-width: 64em) {
    position: relative;
    left: auto;
    width: 100%;
    min-height: auto;
    height: auto;
    display: block;
    padding: 1.5rem 2rem 2rem;
    box-sizing: border-box;
    background-color: #ff4fa8;

    p {
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
      font-size: ${(props) => props.theme.fontmd};
      line-height: 1.7;
      font-weight: 300;
    }
  }

  @media (max-width: 48em) {
    padding: 1.5rem 1.5rem 2rem;

    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    padding: 1rem 1.5rem 1.5rem;

    p {
      font-size: 0.9rem;
      line-height: 1.65;
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  background-color: #ff4fa8;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 64em) {
    position: relative;
    left: auto;
    width: 100%;
    max-width: 100%;
    min-height: auto;
    height: auto;
    padding: 1rem 2rem 2rem;
    margin-top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-x: contain;
    scrollbar-width: thin;
    scrollbar-color: #500118 #ff4fa8;
  }

  @media (max-width: 48em) {
    padding: 1rem 1.5rem 2rem;
  }

  @media (max-width: 30em) {
    padding: 0.75rem 1rem 1.5rem;
  }
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 22rem;
  margin-right: 7rem;
  flex-shrink: 0;

  background-color: #fff0df;
  color: #500018;
  padding-bottom: 1.5rem;

  img {
    width: 100%;
    height: 28rem;
    object-fit: cover;
    display: block;
    cursor: pointer;
    box-sizing: border-box;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    color: #500018;
    padding: 1rem 0.5rem 0;
    margin: 0;
  }

  &:nth-child(even) {
    background-color: #500018;
    color: #fff0df;

    h1 {
      color: #fff0df;
    }
  }

  @media (max-width: 48em) {
    width: 15rem;
    margin-right: 3rem;

    img {
      height: 20rem;
    }
  }

  @media (max-width: 30em) {
    width: 14rem;
    margin-right: 1.5rem;

    img {
      height: 19rem;
    }

    h1 {
      font-size: 1rem;
      padding-top: 0.8rem;
    }
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img
        width="400"
        height="600"
        src={img}
        alt={title}
        loading="lazy"
        style={{ border: "solid 1px white" }}
      />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  const ref = useRef(null);
  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    const section = ref.current;
    const scrollingElement = Horizontalref.current;

    if (!section || !scrollingElement) return;

    const mm = gsap.matchMedia();

    // Desktop: preserve the original pinned horizontal scroll.
    mm.add("(min-width: 1025px)", () => {
      const distance = () =>
        Math.max(
          0,
          scrollingElement.scrollWidth - window.innerWidth
        );

      const tween = gsap.to(scrollingElement, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scroller: ".App",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    // Mobile/tablet: native horizontal scrolling.
    // No pinning or artificial section height.

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        My Work
      </Title>

      <Left>
        <p>
          TRUSTED BY BRANDS FOR PREMIUM AI VISUALS AND CREATIVE
          QUALITY.
          <br />
          <br />
          I specialize in designing social media creatives,
          marketing banners, promotional graphics, branding
          materials, and campaign visuals that communicate ideas
          clearly and maintain strong brand consistency. I work
          closely with marketing and creative teams to understand
          requirements, develop concepts, and deliver high-quality
          designs within deadlines. My approach combines creativity,
          visual storytelling, typography, color, and clean
          composition to create designs that are both visually
          appealing and effective.
        </p>
      </Left>

      <Right data-scroll ref={Horizontalref}>
        <Product img={img3} title="KinetQ" />
        <Product img={img4} title="Hair Serum" />
        <Product img={img5} title="Model Shot" />
        <Product img={img6} title="Oil Shot" />
        <Product img={img7} title="Makeup" />
        <Product img={img8} title="Charlie" />
        <Product img={img9} title="Hair Color Creatives" />
        <Product img={img10} title="Super Lustrous Lipstick" />
        <Product img={img11} title="Perfume" />
        <Product img={img12} title="Niacinamide BB Cream" />
      </Right>
    </Section>
  );
};

export default Shop;
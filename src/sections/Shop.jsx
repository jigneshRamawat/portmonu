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

  /* MOBILE + TABLET ONLY */
  @media (max-width: 64em) {
    display: block;
    min-height: 100vh;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  /* MOBILE/TABLET */
  @media (max-width: 64em) {
    position: relative;
    top: auto;
    left: auto;

    width: 100%;
    box-sizing: border-box;

    padding: 1rem 1.5rem 0;
    margin: 0;

    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: clamp(3rem, 14vw, 5rem);
    padding-top: 1rem;
  }
`;
const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

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
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
    @media (max-width: 30em) {
  p {
    font-size: 1.15rem;
    line-height: 1.7;
  }
}
  

  @media (max-width: 48em) {
    width: 40%;

    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }

  /* MOBILE/TABLET ONLY */
  @media (max-width: 64em) {
    position: relative;
    left: auto;

    width: 100%;
    min-height: auto;

    display: block;

    padding: 1.5rem 2rem 2rem;
    box-sizing: border-box;

    background-color: ${(props) => props.theme.body};

    p {
      width: 100%;
      max-width: 700px;
      margin: 0 auto;

      text-align: center;
      line-height: 1.7;
      font-weight: 300;
    }
  }

  @media (max-width: 30em) {
    padding: 1rem 1.5rem 2rem;

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
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  /* MOBILE/TABLET */
  @media (max-width: 64em) {
    position: relative;

    left: auto;

    width: max-content;
    min-height: auto;

    padding-left: 2rem;
    padding-right: 2rem;

    margin-top: 1rem;

    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme.grey};
  }

  @media (max-width: 48em) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-top: 1rem;
  }

  @media (max-width: 30em) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;



const Item = styled(motion.div)`
  display: inline-block;
  width: 22rem;
  margin-right: 7rem;

  flex-shrink: 0;

  img {
    width: 100%;
    height: 28rem;
    object-fit: cover;
    display: block;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
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
      margin-top: 0.8rem;
    }
  }

  @media (max-width: 64em) {
  img:first-child {
    filter: grayscale(100%);

    border: 3px solid #000 !important;
    outline: 3px solid #fff;
    outline-offset: -8px;

    transition: filter 0.4s ease;
  }
}
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

useLayoutEffect(() => {
  const element = ref.current;
  const scrollingElement = Horizontalref.current;

  if (!element || !scrollingElement) return;

  const isMobile = window.innerWidth <= 1024;

  let pinWrapWidth = scrollingElement.offsetWidth;

  const t1 = gsap.timeline();

  setTimeout(() => {
    pinWrapWidth = scrollingElement.scrollWidth;

    t1.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: () => `${scrollingElement.scrollWidth} bottom`,
        scroller: ".App",
        scrub: 1,
        pin: true,
      },

      height: isMobile
        ? `${scrollingElement.scrollWidth}px`
        : `${scrollingElement.scrollWidth}px`,

      ease: "none",
    });

    t1.to(scrollingElement, {
      scrollTrigger: {
        trigger: scrollingElement,
        start: "top top",
        end: () => `${scrollingElement.scrollWidth} bottom`,
        scroller: ".App",
        scrub: 1,
      },

      x: () => -(
        scrollingElement.scrollWidth - window.innerWidth
      ),

      ease: "none",
    });

    ScrollTrigger.refresh();
  }, 500);

  return () => {
    t1.kill();

    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill();
    });
  };
}, []);

  return (
    <Section ref={ref} id="shop">
      <Title style={{paddingTop:"10px"}} data-scroll data-scroll-speed="-1">
       My Work 
      </Title>
      <Left>
        <p style={{paddingTop:"10px"}}>
        RUSTED BY BRANDS FOR PREMIUM AI VISUALS AND CREATIVE QUALITY.
          <br /> <br />
         I specialize in designing social media creatives, marketing banners, promotional graphics, branding materials, and campaign visuals that communicate ideas clearly and maintain strong brand consistency. I work closely with marketing and creative teams to understand requirements, develop concepts, and deliver high-quality designs within deadlines. My approach combines creativity, visual storytelling, typography, color, and clean composition to create designs that are both visually appealing and effective.
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product img={img3} title="KinetQ" />
        <Product img={img4} title="Hair Serum" />
        <Product img={img5} title="Model Shot" />
        <Product img={img6} title="Oil Shot" />
        <Product img={img7} title="Makeup" />
        <Product img={img8} title="Charlie" />
        <Product img={img9} title="Hair Color creatives" />
        <Product img={img10} title="Super Lustrous Lipstick" />
        <Product img={img11} title="Perfume" />
        <Product img={img12} title="Niacinamide BB Cream" />
      </Right>
    </Section>
  );
};

export default Shop;

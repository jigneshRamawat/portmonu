import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
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

/* =========================================================
   SECTION
========================================================= */

const Section = styled(motion.section)`
  width: 100%;
  height: 100vh;
  min-height: 600px;

  position: relative;

  display: flex;
  align-items: stretch;

  overflow: hidden;

  margin: 0;
  padding: 0;

  box-sizing: border-box;

  background-color: #ff4fa8;

  @media (max-width: 64em) {
    width: 100%;
    height: auto;
    min-height: 100vh;

    flex-direction: column;

    overflow: visible;
  }
`;

/* =========================================================
   TITLE
========================================================= */

const Title = styled.h1`
  position: absolute;

  top: 1rem;
  left: 5%;

  z-index: 20;

  margin: 0;

  font-size: ${(props) => props.theme.fontxxxl};

  font-family: "Kaushan Script", cursive;

  font-weight: 900;

  color: #500118;

  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  pointer-events: none;

  @media (max-width: 64em) {
    position: relative;

    top: auto;
    left: auto;

    width: 100%;

    padding: 1rem 1.5rem 0;

    margin: 0;

    box-sizing: border-box;

    text-align: center;

    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: clamp(3rem, 14vw, 5rem);
    padding-top: 1rem;
  }
`;

/* =========================================================
   LEFT
========================================================= */

const Left = styled.div`
  width: 35%;
  height: 100%;

  flex: 0 0 35%;

  position: relative;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  background-color: #ff4fa8;
  color: #500118;

  p {
    width: 80%;

    margin: 0 auto;

    font-size: ${(props) => props.theme.fontlg};

    font-weight: 300;

    line-height: 1.7;
  }

  @media (max-width: 64em) {
    width: 100%;

    height: auto;

    min-height: auto;

    flex: none;

    display: block;

    padding: 1.5rem 2rem 1rem;

    box-sizing: border-box;

    p {
      width: 100%;

      max-width: 700px;

      margin: 0 auto;

      text-align: center;

      font-size: ${(props) => props.theme.fontmd};

      line-height: 1.7;
    }
  }

  @media (max-width: 48em) {
    padding: 1.5rem;

    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    padding: 1rem 1.5rem;

    p {
      font-size: 0.9rem;

      line-height: 1.65;
    }
  }
`;

/* =========================================================
   RIGHT HORIZONTAL CONTAINER
========================================================= */

const Right = styled.div`
  width: 65%;
  height: 100%;

  flex: 0 0 65%;

  min-width: 0;

  position: relative;

  display: flex;
  align-items: center;

  padding: 2rem 0;

  box-sizing: border-box;

  background-color: #ff4fa8;

  /*
    IMPORTANT
    Horizontal scrolling container.
  */
  overflow-x: auto;
  overflow-y: hidden;

  -webkit-overflow-scrolling: touch;

  overscroll-behavior-x: contain;

  scrollbar-width: thin;

  scrollbar-color: #500118 #ff4fa8;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #ff4fa8;
  }

  &::-webkit-scrollbar-thumb {
    background: #500118;
    border-radius: 20px;
  }

  @media (max-width: 64em) {
    width: 100%;

    height: auto;

    min-height: auto;

    flex: none;

    display: block;

    padding: 1rem 2rem 2rem;

    overflow-x: auto;
    overflow-y: hidden;

    -webkit-overflow-scrolling: touch;

    overscroll-behavior-x: contain;
  }

  @media (max-width: 48em) {
    padding: 1rem 1.5rem 2rem;
  }

  @media (max-width: 30em) {
    padding: 0.75rem 1rem 1.5rem;
  }
`;

/* =========================================================
   TRACK
========================================================= */

const Track = styled.div`
  display: flex;

  align-items: center;

  width: max-content;

  min-width: max-content;

  padding-left: 3rem;
  padding-right: 5rem;

  box-sizing: border-box;

  @media (max-width: 64em) {
    padding-left: 0;
    padding-right: 1rem;
  }
`;

/* =========================================================
   ITEM
========================================================= */

const Item = styled(motion.div)`
  display: block;

  width: 22rem;

  min-width: 22rem;

  flex: 0 0 22rem;

  margin-right: 7rem;

  padding-bottom: 1.5rem;

  box-sizing: border-box;

  background-color: #fff0df;

  color: #500018;

  img {
    width: 100%;

    height: 28rem;

    object-fit: cover;

    display: block;

    cursor: pointer;

    box-sizing: border-box;

    border: 1px solid white;
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

  @media (max-width: 64em) {
    width: 18rem;

    min-width: 18rem;

    flex: 0 0 18rem;

    margin-right: 3rem;

    img {
      height: 24rem;
    }
  }

  @media (max-width: 48em) {
    width: 15rem;

    min-width: 15rem;

    flex: 0 0 15rem;

    margin-right: 3rem;

    img {
      height: 20rem;
    }
  }

  @media (max-width: 30em) {
    width: 14rem;

    min-width: 14rem;

    flex: 0 0 14rem;

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

/* =========================================================
   PRODUCT
========================================================= */

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{
        filter: "grayscale(100%)",
      }}
      whileInView={{
        filter: "grayscale(0%)",
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
    >
      <img
        width="400"
        height="600"
        src={img}
        alt={title}
        loading="lazy"
      />

      <h1>{title}</h1>
    </Item>
  );
};

/* =========================================================
   SHOP
========================================================= */

const Shop = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const right = rightRef.current;

    if (!section || !right) {
      return;
    }

    /* =====================================================
       WHEEL HANDLER

       Desktop:
       vertical mouse wheel -> horizontal product scroll

       Mobile:
       normal native swipe
    ===================================================== */

    const handleWheel = (event) => {
      if (window.innerWidth <= 1024) {
        return;
      }

      /*
        Make sure Shop is actually visible.
      */

      const rect = section.getBoundingClientRect();

      const visible =
        rect.bottom > 0 &&
        rect.top < window.innerHeight;

      if (!visible) {
        return;
      }

      /*
        Calculate available horizontal scroll.
      */

      const maxScroll = Math.max(
        0,
        right.scrollWidth - right.clientWidth
      );

      if (maxScroll <= 0) {
        return;
      }

      /*
        Mouse wheel normally uses deltaY.

        Trackpad may provide deltaX.
      */

      let delta = event.deltaY;

      if (
        Math.abs(event.deltaX) >
        Math.abs(event.deltaY)
      ) {
        delta = event.deltaX;
      }

      if (delta === 0) {
        return;
      }

      const currentScroll = right.scrollLeft;

      const nextScroll = Math.max(
        0,
        Math.min(
          maxScroll,
          currentScroll + delta
        )
      );

      /*
        ===================================================
        SCROLL RIGHT
        ===================================================
      */

      if (
        delta > 0 &&
        currentScroll < maxScroll
      ) {
        /*
          STOP VERTICAL PAGE SCROLL
        */

        event.preventDefault();
        event.stopPropagation();

        /*
          MOVE PRODUCTS HORIZONTALLY
        */

        right.scrollLeft = nextScroll;

        return;
      }

      /*
        ===================================================
        SCROLL LEFT
        ===================================================
      */

      if (
        delta < 0 &&
        currentScroll > 0
      ) {
        /*
          STOP VERTICAL PAGE SCROLL
        */

        event.preventDefault();
        event.stopPropagation();

        /*
          MOVE PRODUCTS BACK
        */

        right.scrollLeft = nextScroll;

        return;
      }

      /*
        ===================================================
        IMPORTANT

        When:
        - last image reached + wheel DOWN
        OR
        - first image reached + wheel UP

        We intentionally DON'T preventDefault.

        So the normal page scrolling can continue.
        ===================================================
      */
    };

    /*
      Capture phase is important because your project
      uses smooth/Locomotive-style scrolling.
    */

    section.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
        capture: true,
      }
    );

    /*
      Keep horizontal position valid after resize.
    */

    const handleResize = () => {
      const maxScroll = Math.max(
        0,
        right.scrollWidth - right.clientWidth
      );

      if (right.scrollLeft > maxScroll) {
        right.scrollLeft = maxScroll;
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    /*
      Recalculate when images finish loading.
    */

    const images =
      right.querySelectorAll("img");

    const handleImageLoad = () => {
      handleResize();
    };

    images.forEach((image) => {
      image.addEventListener(
        "load",
        handleImageLoad
      );
    });

    return () => {
      section.removeEventListener(
        "wheel",
        handleWheel,
        true
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      images.forEach((image) => {
        image.removeEventListener(
          "load",
          handleImageLoad
        );
      });
    };
  }, []);

  return (
    <Section
      ref={sectionRef}
      id="shop"
    >
      {/* =================================================
          TITLE
      ================================================= */}

      <Title>
        My Work
      </Title>

      {/* =================================================
          LEFT CONTENT
      ================================================= */}

      <Left>
        <p>
          TRUSTED BY BRANDS FOR PREMIUM AI VISUALS AND
          CREATIVE QUALITY.

          <br />
          <br />

          I specialize in designing social media creatives,
          marketing banners, promotional graphics, branding
          materials, and campaign visuals that communicate
          ideas clearly and maintain strong brand consistency.
          I work closely with marketing and creative teams to
          understand requirements, develop concepts, and
          deliver high-quality designs within deadlines. My
          approach combines creativity, visual storytelling,
          typography, color, and clean composition to create
          designs that are both visually appealing and
          effective.
        </p>
      </Left>

      {/* =================================================
          RIGHT / HORIZONTAL PRODUCTS
      ================================================= */}

      <Right ref={rightRef}>
        <Track>
          <Product
            img={img3}
            title="KinetQ"
          />

          <Product
            img={img4}
            title="Hair Serum"
          />

          <Product
            img={img5}
            title="Model Shot"
          />

          <Product
            img={img6}
            title="Oil Shot"
          />

          <Product
            img={img7}
            title="Makeup"
          />

          <Product
            img={img8}
            title="Charlie"
          />

          <Product
            img={img9}
            title="Hair Color Creatives"
          />

          <Product
            img={img10}
            title="Super Lustrous Lipstick"
          />

          <Product
            img={img11}
            title="Perfume"
          />

          <Product
            img={img12}
            title="Niacinamide BB Cream"
          />
        </Track>
      </Right>
    </Section>
  );
};

export default Shop;
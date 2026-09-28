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
   RIGHT VIEWPORT
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

  overflow: hidden;

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

  will-change: transform;

  @media (max-width: 64em) {
    padding-left: 0;

    padding-right: 1rem;

    transform: none !important;
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
       whileHover={{
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
        src={img}
        alt={title}
        width="400"
        height="600"
        loading="eager"
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
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const right = rightRef.current;
    const track = trackRef.current;

    if (!section || !right || !track) {
      return;
    }

    const mm = gsap.matchMedia();

    /* =====================================================
       DESKTOP GSAP HORIZONTAL SCROLL
    ===================================================== */

    mm.add("(min-width: 1025px)", () => {
      let scrollTween = null;

      /*
        Calculate exact horizontal distance.
      */

      const getDistance = () => {
        if (!right || !track) {
          return 0;
        }

        return Math.max(
          0,
          track.scrollWidth - right.clientWidth
        );
      };

      /*
        Wait for all images.
        This prevents the width from changing while
        ScrollTrigger is already running.
      */

      const images = Array.from(
        track.querySelectorAll("img")
      );

      const waitForImages = () => {
        const promises = images.map((image) => {
          if (image.complete) {
            return Promise.resolve();
          }

          return new Promise((resolve) => {
            const done = () => {
              image.removeEventListener(
                "load",
                done
              );

              image.removeEventListener(
                "error",
                done
              );

              resolve();
            };

            image.addEventListener(
              "load",
              done
            );

            image.addEventListener(
              "error",
              done
            );
          });
        });

        return Promise.all(promises);
      };

      /*
        Create animation only once.
      */

      const createScroll = () => {
        const distance = getDistance();

        if (distance <= 0) {
          return;
        }

        /*
          Reset track only once before creating tween.
        */

        gsap.set(track, {
          x: 0,
        });

        /*
          GSAP horizontal animation.
        */

        scrollTween = gsap.to(track, {
          x: () => -getDistance(),

          ease: "none",

          scrollTrigger: {
            trigger: section,

            start: "top top",

            /*
              The vertical scroll duration is exactly
              the horizontal distance.
            */

            end: () => `+=${getDistance()}`,

            /*
              Your project is using .App as the scroll
              container.
            */

            scroller: ".App",

            /*
              Smooth interpolation.
              Increase to 1.5 for slower/smoother movement.
            */

            scrub: 1.2,

            /*
              Keep Shop on screen while horizontal
              animation is running.
            */

            pin: true,

            pinSpacing: true,

            anticipatePin: 1,

            invalidateOnRefresh: true,

            fastScrollEnd: true,

            preventOverlaps: true,
          },
        });

        ScrollTrigger.refresh();
      };

      let cancelled = false;

      /*
        Wait until images are ready.
      */

      waitForImages().then(() => {
        if (cancelled) {
          return;
        }

        /*
          One frame after images/layout are ready.
        */

        requestAnimationFrame(() => {
          if (cancelled) {
            return;
          }

          createScroll();
        });
      });

      /*
        Resize should refresh the existing ScrollTrigger,
        NOT recreate the animation.
      */

      let resizeTimer = null;

      const handleResize = () => {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 150);
      };

      window.addEventListener(
        "resize",
        handleResize
      );

      /*
        Cleanup.
      */

      return () => {
        cancelled = true;

        clearTimeout(resizeTimer);

        window.removeEventListener(
          "resize",
          handleResize
        );

        if (scrollTween) {
          scrollTween.scrollTrigger?.kill();

          scrollTween.kill();

          scrollTween = null;
        }

        gsap.set(track, {
          clearProps: "transform",
        });
      };
    });

    /* =====================================================
       MOBILE / TABLET
    ===================================================== */

    mm.add("(max-width: 1024px)", () => {
      /*
        No GSAP horizontal animation on mobile/tablet.

        Native touch scrolling.
      */

      gsap.set(track, {
        clearProps: "transform",
      });

      return () => {
        gsap.set(track, {
          clearProps: "transform",
        });
      };
    });

    return () => {
      mm.revert();
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
          RIGHT / PRODUCTS
      ================================================= */}

      <Right ref={rightRef}>
        <Track ref={trackRef}>
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
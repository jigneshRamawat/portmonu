import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/01.jpg";
import img2 from "../assets/Images/02.png";
import img3 from "../assets/Images/03.png";
import img4 from "../assets/Images/04.png";
import img5 from "../assets/Images/05.png";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   COLORS
========================================================= */

const C = {
  pink: "#FF4FA8",
  cream: "#FFF0DF",
  burgundy: "#500018",
  orange: "#FF5A00",
};

/* =========================================================
   SECTION
========================================================= */

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100vh;

  margin: 0;
  padding: 0;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${C.burgundy};
  color: ${C.cream};

  box-sizing: border-box;

  overflow: hidden;

  @media (max-width: 64em) {
    display: block;

    width: 100%;

    min-height: 100vh;
    height: auto !important;

    padding: 1rem 0 2rem;

    overflow: visible;

    box-sizing: border-box;
  }
`;

/* =========================================================
   CONTAINER
========================================================= */

const Container = styled.div`
  width: 25vw;

  position: absolute;

  top: 1%;
  left: 50%;

  transform: translateX(-50%);

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  box-sizing: border-box;

  will-change: transform;

  @media (max-width: 70em) {
    width: 30vw;
  }

  @media (max-width: 64em) {
    position: relative;

    top: auto;
    left: auto;

    transform: none;

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;

    gap: 2rem;

    padding: 1rem 1rem 2rem;

    box-sizing: border-box;

    will-change: auto;
  }

  @media (max-width: 30em) {
    gap: 1.5rem;

    padding: 0.75rem 1rem 1.5rem;
  }
`;

/* =========================================================
   TITLE
========================================================= */

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};

  font-family: "Kaushan Script";

  font-weight: 900;

  color: ${C.pink};

  text-shadow: 2px 0px 6px white;

  position: absolute;

  top: 2rem;
  left: 1rem;

  z-index: 15;

  margin: 0;

  line-height: 1.1;

  pointer-events: none;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 64em) {
    position: relative;

    top: auto;
    left: auto;

    display: block;

    width: 100%;

    margin: 0;

    padding: 1rem 0.75rem 1.5rem;

    box-sizing: border-box;

    text-align: center;

    line-height: 1.2;
  }

  @media (max-width: 30em) {
    font-size: clamp(2.5rem, 12vw, 3.5rem);

    padding: 0.75rem 0.5rem 1.25rem;
  }
`;

/* =========================================================
   RIGHT TEXT
========================================================= */

const Text = styled.div`
  width: 20%;

  font-size: ${(props) => props.theme.fontlg};

  font-weight: 300;

  line-height: 1.7;

  position: absolute;

  padding: 2rem;

  top: 0;
  right: 0;

  z-index: 11;

  color: ${C.cream};

  box-sizing: border-box;

  @media (max-width: 64em) {
    display: none;
  }
`;

/* =========================================================
   ITEM
========================================================= */

const Item = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border: solid 10px ${C.pink};

  margin: 5rem 0;

  box-sizing: border-box;

  overflow: hidden;

  background-color: ${C.burgundy};

  h2 {
    width: 100%;

    color: ${C.cream};

    font-weight: 400;

    text-align: center;

    line-height: 1.5;

    padding: 0.5rem;

    margin: 0;

    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: auto;

    display: block;

    z-index: 5;

    object-fit: contain;

    box-sizing: border-box;
  }

  @media (max-width: 64em) {
    width: 100%;

    max-width: 30rem;

    margin: 0;

    border-width: 7px;

    overflow: hidden;

    img {
      width: 100%;
      height: auto;

      max-height: none;

      object-fit: contain;
    }

    h2 {
      width: 100%;

      padding: 0.75rem 0.5rem;

      font-size: 1.1rem;

      box-sizing: border-box;
    }
  }

  @media (max-width: 30em) {
    max-width: 100%;

    border-width: 5px;

    h2 {
      font-size: 0.95rem;

      line-height: 1.5;

      padding: 0.65rem 0.4rem;
    }
  }
`;

/* =========================================================
   PHOTOS
========================================================= */

const Photos = ({ img, name }) => {
  return (
    <Item>
      <img
        width="400"
        height="600"
        src={img}
        alt={name}
        loading="lazy"
      />

      <h2>{name}</h2>
    </Item>
  );
};

/* =========================================================
   NEW ARRIVAL
========================================================= */

const NewArrival = () => {
  const ref = useRef(null);
  const scrollingRef = useRef(null);

  useLayoutEffect(() => {
    const section = ref.current;
    const scrollingElement = scrollingRef.current;

    if (!section || !scrollingElement) {
      return;
    }

    const mm = gsap.matchMedia();

    /* =====================================================
       DESKTOP
    ===================================================== */

    mm.add("(min-width: 64.01em)", () => {
      let animation = null;

      const createAnimation = () => {
        if (!section || !scrollingElement) {
          return;
        }

        /* -------------------------------------------------
           IMPORTANT:
           DO NOT manually increase section height here.

           Section stays 100vh.
           ScrollTrigger pin creates only the required
           scrolling duration.
        ------------------------------------------------- */

        section.style.height = "100vh";

        /*
          Reset previous animation.
        */

        if (animation) {
          animation.kill();
          animation = null;
        }

        /*
          Reset image column.
        */

        gsap.set(scrollingElement, {
          y: 0,
        });

        /*
          Get actual full content height.
        */

        const contentHeight =
          scrollingElement.scrollHeight;

        const viewportHeight =
          window.innerHeight;

        /*
          Move enough so the complete last item becomes
          visible near the bottom of the viewport.

          0.90 means the last item can finish around
          90% of the viewport rather than leaving huge
          unused space.
        */

        const moveDistance = Math.max(
          0,
          contentHeight - viewportHeight * 0.90
        );

        /*
          If there is nothing to scroll, don't create
          a ScrollTrigger.
        */

        if (moveDistance <= 0) {
          return;
        }

        /*
          Create the vertical image movement.
        */

        animation = gsap.to(
          scrollingElement,
          {
            y: -moveDistance,

            ease: "none",

            scrollTrigger: {
              trigger: section,

              start: "top top",

              /*
                Scroll distance is exactly equal to the
                image movement.

                This prevents unnecessary extra space.
              */

              end: () => `+=${moveDistance}`,

              /*
                Your project uses the .App scroller.
              */

              scroller: ".App",

              scrub: 1,

              pin: true,

              pinSpacing: true,

              anticipatePin: 1,

              invalidateOnRefresh: true,

              /*
                Make sure the animation finishes exactly
                at the end of the required scroll area.
              */

              onUpdate: (self) => {
                const progress =
                  self.progress;

                const y =
                  -moveDistance * progress;

                gsap.set(
                  scrollingElement,
                  {
                    y,
                  }
                );
              },
            },
          }
        );

        ScrollTrigger.refresh();
      };

      /*
        Wait until browser has calculated image dimensions.
      */

      const firstTimer = setTimeout(() => {
        createAnimation();
      }, 100);

      const secondTimer = setTimeout(() => {
        createAnimation();
      }, 600);

      const thirdTimer = setTimeout(() => {
        createAnimation();
      }, 1200);

      /*
        Images can change layout after loading.
      */

      const images =
        scrollingElement.querySelectorAll("img");

      const handleImageLoad = () => {
        createAnimation();
        ScrollTrigger.refresh();
      };

      images.forEach((image) => {
        image.addEventListener(
          "load",
          handleImageLoad
        );
      });

      /*
        Recalculate on resize.
      */

      let resizeTimer = null;

      const handleResize = () => {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
          createAnimation();
          ScrollTrigger.refresh();
        }, 150);
      };

      window.addEventListener(
        "resize",
        handleResize
      );

      return () => {
        clearTimeout(firstTimer);
        clearTimeout(secondTimer);
        clearTimeout(thirdTimer);
        clearTimeout(resizeTimer);

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

        if (animation) {
          animation.kill();
          animation = null;
        }

        /*
          Reset styles on unmount.
        */

        gsap.set(scrollingElement, {
          clearProps: "transform",
        });

        section.style.height = "";
      };
    });

    /* =====================================================
       MOBILE / TABLET
    ===================================================== */

    mm.add("(max-width: 64em)", () => {
      /*
        No desktop animation on mobile/tablet.
      */

      section.style.height = "auto";

      gsap.set(scrollingElement, {
        clearProps: "transform",
      });

      return () => {
        section.style.height = "auto";

        gsap.set(scrollingElement, {
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
      ref={ref}
      id="fixed-target"
      className="new-arrival"
    >
      {/* =================================================
          TITLE
      ================================================= */}

      <Title
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        Work
        <br />
        Experience
      </Title>

      {/* =================================================
          IMAGE CONTAINER
      ================================================= */}

      <Container ref={scrollingRef}>
        <Photos
          img={img1}
          name="Esme Consumer Pvt. Ltd. | 2023 – Present"
        />

        <Photos
          img={img2}
          name="Honasa Consumer Pvt. Ltd. | 2022 – 2023"
        />

        <Photos
          img={img3}
          name="Revlon | 2021 – 2022"
        />

        <Photos
          img={img4}
          name="Elofic Industries Pvt. Ltd. | 2019 – 2021"
        />

        <Photos
          img={img5}
          name="Kangaro Industries Pvt. Ltd. | 2018 – 2019"
        />
      </Container>

      {/* =================================================
          RIGHT TEXT
      ================================================= */}

      <Text>
        Design that connects brands, products, and people.

        <br />
        <br />

        A selection of work across brand identity,
        packaging, e-commerce, campaigns, and new
        product development.

        <br />
        <br />

        Creating packaging systems that balance brand
        aesthetics, functionality, and regulatory
        requirements.

        <br />
        <br />

        Designing high-impact e-commerce experiences
        that maintain brand consistency across multiple
        platforms and formats.
      </Text>
    </Section>
  );
};

export default NewArrival;
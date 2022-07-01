import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import { WrapperContainer } from "../../styles/Reusable/wrapperdiv.style";
import {
  ButtonWrapper,
  InnerWrapper,
  IntroParaWrapper,
  Styledintropara,
  StyledPlaybtn,
  StyledPlaybtnWrap,
  StyledPlaytext,
  StyledPlayWrapper,
} from "../../styles/intro.style";
import IntroVideo from "./video";
import { CTAButton } from "../../styles/Reusable/getinvolvedbtn.style";
import SectionHeader from "../reusable/sectionheader";

gsap.registerPlugin(scrollTrigger);

const Intro = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpener = () => {
    setModalOpen(true);
  };

  const innerRef = useRef(null);
  const introRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);
  const playRef = useRef(null);
  const ctaRef = useRef(null);

  const animateSections = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      introRef.current,
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top 25%",
          end: "top 15%",
          toggleActions: "play none none none",
          scrub: 3,
        },
        autoAlpha: 1,
        duration: 1,
        y: 0,
        ease: "Expo.easeOut",
      },
      "+=2.5"
    );
    tl.fromTo(
      para1Ref.current,
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top 25%",
          end: "top 15%",
          toggleActions: "play none none none",
          scrub: 4,
        },
        autoAlpha: 1,
        duration: 1,
        y: 0,
        ease: "Expo.easeOut",
      },
      "+=0.5"
    );
    tl.fromTo(
      para2Ref.current,
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top 25%",
          end: "top 15%",
          toggleActions: "play none none none",
          scrub: 5,
        },
        autoAlpha: 1,
        duration: 1,
        y: 0,
        ease: "Expo.easeOut",
      },
      "+=0.1"
    );
    tl.fromTo(
      para3Ref.current,
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top 25%",
          end: "top 15%",
          toggleActions: "play none none none",
          scrub: 6,
        },
        autoAlpha: 1,
        duration: 1,
        y: 0,
        ease: "Expo.easeOut",
      },
      "+=1.5"
    );
  };

  useEffect(() => {
    animateSections();
  }, []);

  return (
    <>
      <WrapperContainer>
        <InnerWrapper ref={innerRef}>
          <SectionHeader ref={introRef} text={`A new way of thinking`} />
          <IntroParaWrapper>
            <Styledintropara ref={para1Ref}>
              Our minds make connections all the time, trying to make sense of
              the patterns we see and the information we absorb.
            </Styledintropara>
            <Styledintropara ref={para2Ref}>
              These interconnections when taught to be viewed holistically, can
              open up young minds to immense possibilities, fuel curiosity and
              enhance their learning appetite.
            </Styledintropara>
            <Styledintropara
              ref={para3Ref}
              fontsize
              fontwght
              borderleft
              paddingleft
            >
              networkED is an initiative for children to discover how everything
              is interconnected in the world around them. The method uses
              principles of Network Theory, Complex Adaptive Systems and
              Relational Thinking to help children explore and navigate real
              life situations with ease.
            </Styledintropara>
          </IntroParaWrapper>
          <ButtonWrapper>
            <StyledPlayWrapper onClick={modalOpener} ref={playRef}>
              <StyledPlaytext>Play Video</StyledPlaytext>
              <StyledPlaybtnWrap>
                <StyledPlaybtn />
              </StyledPlaybtnWrap>
            </StyledPlayWrapper>
            <IntroVideo openModal={modalOpen} setOpenModel={setModalOpen} />
            <CTAButton
              to="getinvolved"
              smooth={true}
              offset={-50}
              duration={500}
              ref={ctaRef}
            >
              Get Involved
            </CTAButton>
          </ButtonWrapper>
        </InnerWrapper>
      </WrapperContainer>
    </>
  );
};

export default Intro;

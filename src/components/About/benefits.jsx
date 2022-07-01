import React, { useEffect, useRef } from "react";
import { benefit } from "../../assets/data/benefitsdata";
import SectionHeader from "../reusable/sectionheader";
import { BenefitContainer, CardWrapper } from "../../styles/about.style";
import Benefitcards from "./benefitcards";
import gsap from "gsap";

const Benefits = () => {
  const titleRef = useRef(null);

  const animateSections = (el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        end: "top 30%",
        toggleActions: "play pause reverse reverse",
        scrub: 3,
      },
      autoAlpha: 0,
      duration: 1,
      y: 100,
      ease: "Expo.easeOut",
    });
  };

  useEffect(() => {
    animateSections(titleRef.current);
  });

  return (
    <>
      <SectionHeader text="Community Benefits" ref={titleRef} />
      <BenefitContainer>
        <CardWrapper>
          {benefit.map((ben) => (
            <Benefitcards key={ben.id} benefitinfo={ben} />
          ))}
        </CardWrapper>
      </BenefitContainer>
    </>
  );
};

export default Benefits;

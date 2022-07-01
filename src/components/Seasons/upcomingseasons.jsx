import React, { useEffect, useRef } from "react";
import {
  UpcomingImageWrapper,
  UpcomingSeasonHeader,
  UpcomingSeasonsCard,
  UpcomingSeasonWrapper,
} from "../../styles/season.style";
import Epidemic from "../../assets/images/epidemic.png";
import BioInvest from "../../assets/images/bioinvestigate.png";
import fakenews from "../../assets/images/fakenews.png";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import SectionHeader from "../reusable/sectionheader";

gsap.registerPlugin(scrollTrigger);

const UpcomingSeasons = () => {
  const upcomingRef = useRef(null);
  const epiRef = useRef(null);
  const bioRef = useRef(null);
  const opsRef = useRef(null);

  useEffect(() => {
    gsap.from(upcomingRef.current, {
      scrollTrigger: {
        trigger: upcomingRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        scrub: 3,
      },
      autoAlpha: 0,
      duration: 1,
      y: 50,
      ease: "Expo.easeOut",
    });

    gsap.from([epiRef.current, bioRef.current, opsRef.current], {
      scrollTrigger: {
        trigger: epiRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
      autoAlpha: 0,
      duration: 0.7,
      y: 50,
      stagger: {
        amount: 0.2,
      },
      ease: "Expo.easeOut",
    });
  });

  return (
    <>
      <UpcomingSeasonWrapper>
        <SectionHeader text={`Future Seasons`} ref={upcomingRef} />
        <UpcomingSeasonsCard ref={epiRef}>
          <UpcomingImageWrapper>
            <img src={Epidemic} alt="" />
          </UpcomingImageWrapper>
          <UpcomingSeasonHeader>Epidemic Intelligence</UpcomingSeasonHeader>
        </UpcomingSeasonsCard>
        <UpcomingSeasonsCard ref={bioRef}>
          <UpcomingImageWrapper>
            <img src={BioInvest} alt="" />
          </UpcomingImageWrapper>
          <UpcomingSeasonHeader>Bio Investigators</UpcomingSeasonHeader>
        </UpcomingSeasonsCard>
        <UpcomingSeasonsCard ref={opsRef}>
          <UpcomingImageWrapper>
            <img src={fakenews} alt="" />
          </UpcomingImageWrapper>
          <UpcomingSeasonHeader>Operation Fake News</UpcomingSeasonHeader>
        </UpcomingSeasonsCard>
      </UpcomingSeasonWrapper>
    </>
  );
};

export default UpcomingSeasons;

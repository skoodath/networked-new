import React from "react";
import {
  UpcomingImageWrapper,
  UpcomingSeasonHeader,
  UpcomingSeasonsCard,
  UpcomingSeasonWrapper,
} from "../../styles/season.style";
import Epidemic from "../../assets/images/epidemic.png";
import BioInvest from "../../assets/images/bioinvestigate.png";
import fakenews from "../../assets/images/fakenews.png";
import SectionHeader from "../reusable/sectionheader";

const UpcomingSeasons = () => {
  return (
    <>
      <UpcomingSeasonWrapper>
        <SectionHeader text={`Future Seasons`} />
        <div>
        <UpcomingSeasonsCard>
          <UpcomingImageWrapper>
            <img src={Epidemic} alt="" />
          </UpcomingImageWrapper>
          <UpcomingSeasonHeader>Epidemic Intelligence</UpcomingSeasonHeader>
        </UpcomingSeasonsCard>
        <UpcomingSeasonsCard>
          <UpcomingImageWrapper>
            <img src={BioInvest} alt="" />
          </UpcomingImageWrapper>
          <UpcomingSeasonHeader>Bio Investigators</UpcomingSeasonHeader>
        </UpcomingSeasonsCard>
        <UpcomingSeasonsCard>
          <UpcomingImageWrapper>
            <img src={fakenews} alt="" />
          </UpcomingImageWrapper>
          <UpcomingSeasonHeader>Operation Fake News</UpcomingSeasonHeader>
        </UpcomingSeasonsCard>
      </div>
      </UpcomingSeasonWrapper>
      
    </>
  );
};

export default UpcomingSeasons;

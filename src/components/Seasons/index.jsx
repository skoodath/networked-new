import React from "react";
import { AboutSeasons } from "../../styles/season.style";
import SeasonOne from "./seasonone";
import UpcomingSeasons from "./upcomingseasons";
import { WrapperContainer } from "../../styles/Reusable/wrapperdiv.style";

const Seasons = () => {
  return (
    <WrapperContainer>
      <AboutSeasons hgt="auto">
        <SeasonOne />
      </AboutSeasons>
      <AboutSeasons hgt="auto">
        <UpcomingSeasons />
      </AboutSeasons>
    </WrapperContainer>
  );
};

export default Seasons;

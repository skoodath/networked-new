import React from "react";
import { AboutSeasons } from "../../styles/season.style";
import SeasonOne from "./seasonone";
import UpcomingSeasons from "./upcomingseasons";
import { WrapperContainer } from "../../styles/Reusable/wrapperdiv.style";

const Seasons = () => {
  return (
    <WrapperContainer name="home">
      <AboutSeasons>
        <SeasonOne />
        <UpcomingSeasons />
      </AboutSeasons>
    </WrapperContainer>
  );
};

export default Seasons;

import React from "react";
import {
  NameYearText,
  SeasonOneContainer,
  SeasonOneHeader,
  SeasonText,
  SeasonOneWrapper,
  StyledSluethPara1,
  StyledSluethPara2,
} from "../../styles/season.style";
import SectionHeader from "../reusable/sectionheader";
import socialsleuth from "../../assets/images/ss8.png";


const SeasonOne = () => {
  return (
    <SeasonOneContainer>
      <SectionHeader text={`Season One`} />
      
      <SeasonText>
      <img src={socialsleuth} alt="Social Sleuths" />
        <SeasonOneHeader>networkED 2021</SeasonOneHeader>
        <NameYearText>Social Sleuths</NameYearText>
      </SeasonText>
      <SeasonOneWrapper>
        <StyledSluethPara1 margintop>
          Children explore the world of communities..
        </StyledSluethPara1>
        <StyledSluethPara2>
          ..how relationships between people, artifacts, and ideas can be
          analyzed and interpreted through social network mapping
        </StyledSluethPara2>
        <StyledSluethPara1>
          They will investigate and generate data maps of these relationships to
          help understand how people communicate and exchange information...
        </StyledSluethPara1>
        <StyledSluethPara2>
          ...and even track down some critical power hubs that can bring massive
          social change through real world digital networks
        </StyledSluethPara2>
      </SeasonOneWrapper>
    </SeasonOneContainer>
  );
};

export default SeasonOne;

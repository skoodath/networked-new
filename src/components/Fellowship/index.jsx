import React from "react";
import {
  FellowshipText,
  StyledFellowship,
} from "../../styles/fellowship.style";
import { HeaderBig, HeaderSmall } from "../../styles/Reusable/subheader.style";
import { WrapperContainer } from "../../styles/Reusable/wrapperdiv.style";
import NewPathway from "./pathway";
import pathway from "../../assets/data/pathwaycards";
import SectionHeader from "../reusable/sectionheader";
import { PathwayList, PathwayWrap } from "../../styles/newpathway.style";


const Fellowship = () => {

  return (
    <WrapperContainer name="home">
      <StyledFellowship>
        <HeaderSmall>the</HeaderSmall>
        <HeaderBig>Fellowship</HeaderBig>

        <FellowshipText fontsize fontwght borderleft paddingleft>
          networkED will host a fellowship program every year bringing children
          from diverse backgrounds together to investigate real-world
          situations.
        </FellowshipText>
        <FellowshipText>
          It acts as a launchpad for children to explore real world complexity
          through various pathways.
        </FellowshipText>
        <FellowshipText>
          Children investigate real world biological, physical and social
          connections through a range of experiences, virtual and real.
        </FellowshipText>
        <FellowshipText>
          It is designed with the help of domain experts, researchers and
          educators, to craft a meaningful and explorative experience for
          children.
        </FellowshipText>
      </StyledFellowship>
      <StyledFellowship hgt="auto">
        <SectionHeader text={`Fellowship Pathway`} />
        <PathwayWrap>
          <PathwayList>
            {pathway.map((paths) => (
              <NewPathway key={paths.id} pathwaySteps={paths} />
            ))}
          </PathwayList>
        </PathwayWrap>
      </StyledFellowship>
    </WrapperContainer>
  );
};

export default Fellowship;

import React from "react";
import NetSciPara from "./netsciencepara";
import SubText from "../subtext";
import { AppListWrap, NetWorkScience } from "../../styles/netscience.style";
import Application from "./netapplication";
import NetCards from "../../assets/data/netcarddata";
import SectionHeader from "../reusable/sectionheader";
import { HeaderBig, HeaderSmall } from "../../styles/Reusable/subheader.style";

const NetScience = () => {
  return (
    <>
      <NetWorkScience>
        <HeaderSmall>What is</HeaderSmall>
        <HeaderBig>Network Science</HeaderBig>
        <SubText
          text={`Network Science is the study of patterns of connections in the real world`}
        />
      </NetWorkScience>
      <NetWorkScience>
        <NetSciPara />
      </NetWorkScience>
      <NetWorkScience hgt="auto">
        <SectionHeader text={"Applications of Network Science"} />
        <AppListWrap>
          {NetCards.map((apps) => (
            <Application netapp={apps} key={apps.id} />
          ))}
        </AppListWrap>
      </NetWorkScience>
    </>
  );
};

export default NetScience;

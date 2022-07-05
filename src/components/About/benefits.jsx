import React from "react";
import { benefit } from "../../assets/data/benefitsdata";
import SectionHeader from "../reusable/sectionheader";
import { BenefitContainer, CardWrapper } from "../../styles/about.style";
import Benefitcards from "./benefitcards";

const Benefits = () => {

  return (
    <>
      <SectionHeader text="Community Benefits" />
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

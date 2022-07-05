import React from "react";
import {
  CardHeader,
  CardHeaderWrapper,
  CardImage,
  CardItem,
  Overlay,
} from "../../styles/about.style";


const Benefitcards = ({ benefitinfo }) => {
  const { src, alt, title, para, colstart, colend, rowstart, rowend } =
    benefitinfo;

  return (
    <>
      <CardItem
        colstart={colstart}
        colend={colend}
        rowstart={rowstart}
        rowend={rowend}
      >
        <CardHeaderWrapper>
          <CardImage src={src} alt={alt} />
        </CardHeaderWrapper>
        <Overlay>
        <CardHeader>{title}</CardHeader>
          <p>{para}</p>
        </Overlay>
      </CardItem>
    </>
  );
};
export default Benefitcards;

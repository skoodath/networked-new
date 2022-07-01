import React from "react";
import {
  PathwayListItem,
  PathwayImgWrap,
  PathwayImg,
  PathwayText,
  PathwayCount,
  PathwayOverlay,
} from "../../styles/newpathway.style";

const NewPathway = ({ pathwaySteps }) => {
  const { id, image, alt, text } = pathwaySteps;

  return (
    <>
      <PathwayListItem>
        <PathwayOverlay></PathwayOverlay>
        <PathwayCount>{id}</PathwayCount>
        <PathwayImgWrap>
          <PathwayImg src={image} alt={alt} />
        </PathwayImgWrap>
        <PathwayText>{text}</PathwayText>
      </PathwayListItem>
    </>
  );
};

export default NewPathway;

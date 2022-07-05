import React from "react";
import { HeaderSmall, HeaderBig } from "../../styles/Reusable/subheader.style";

const SubHeader = ({ text, smalltext }) => {
  //const {text, smalltext} = props

  return (
    <>
      <HeaderSmall>{smalltext}</HeaderSmall>
      <HeaderBig>{text}</HeaderBig>
    </>
  );
};

export default SubHeader;

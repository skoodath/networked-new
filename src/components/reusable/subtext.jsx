import React from "react";
import { SubTextPara } from "../../styles/Reusable/subtext.style";

const SubText = React.forwardRef(({ text }, ref) => {
  return <SubTextPara ref={ref}>{text}</SubTextPara>;
});

export default SubText;

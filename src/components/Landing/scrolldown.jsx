import React from "react";
import { ScrollArrow, Scrolldown } from "../../styles/landing.style";

const Scroll = React.forwardRef((props, ref) => {
  return (
    <Scrolldown ref={ref}>
      <span>Scroll Down</span>
      <ScrollArrow />
    </Scrolldown>
  );
});

export default Scroll;

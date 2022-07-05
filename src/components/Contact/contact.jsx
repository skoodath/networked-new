import React from "react";
import { ContactLinks, MailIcon, MyEmail } from "../../styles/contact.style";

const ContactUs = (props) => {
  return (
    <ContactLinks>
      <MyEmail>
        <MailIcon />{" "}
        <a href="mailto:archana@networked.in">archana@networked.in</a>
      </MyEmail>
    </ContactLinks>
  );
};

export default ContactUs;

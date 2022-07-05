import React from "react";
import {
  ContactForm,
  InputFields,
  InputLabels,
  MessageBox,
  ContactWrapper,
  SendButton,
} from "../../styles/contact.style";


const Contact = (props) => {

  
  return (
    <>
      <ContactForm onSubmit={(e) => e.preventDefault()}>
        <ContactWrapper>
          <InputLabels htmlFor="fullname">Full Name</InputLabels>
          <InputFields
            type="text"
            name="fullname"
            id="fullName"
          />
        </ContactWrapper>
        <ContactWrapper>
          <InputLabels htmlFor="email">Email Address</InputLabels>
          <InputFields type="email" name="email" id="email"/>
        </ContactWrapper>
        <ContactWrapper>
          <InputLabels htmlFor="message">Send a note</InputLabels>
          <MessageBox
            type="text"
            name="message"
            id="message"
          />
  
        </ContactWrapper>
        <SendButton
          type="submit"
          name="submit"
          id="submit"
        >
          Send
        </SendButton>
      </ContactForm>
    </>
  );
};

export default Contact;

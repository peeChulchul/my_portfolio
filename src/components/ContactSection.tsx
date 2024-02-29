import React from "react";
import { Button } from "stcomponents/common/button";
import { FlexContainer, PaddingContainer } from "stcomponents/common/containers";
import { Heading } from "stcomponents/common/typography";
import { ContactForm, FormInput, FormLabel } from "stcomponents/sections/contactSection.styled";

const ContactSection = () => {
  return (
    <PaddingContainer $top="5%" $bottom="10%" id="Contact">
      <Heading as="h2" size="h2" $align="center" $top="0.5rem">
        CONTACT
      </Heading>

      <PaddingContainer $top="3rem">
        <FlexContainer justify="center">
          <ContactForm>
            <PaddingContainer $bottom="2rem">
              <FormLabel>Name:</FormLabel>
              <FormInput type="text" placeholder="이름을 입력해주세요" />
            </PaddingContainer>
            <PaddingContainer $bottom="2rem">
              <FormLabel>Email:</FormLabel>
              <FormInput type="text" placeholder="이메일을 입력해주세요" />
            </PaddingContainer>
            <PaddingContainer $bottom="2rem">
              <FormLabel>Message:</FormLabel>
              <FormInput
                style={{ resize: "none", minHeight: "10rem" }}
                as="textarea"
                placeholder="내용을 입력해주세요"
              />
            </PaddingContainer>

            <FlexContainer justify="center">
              <Button>Send Message</Button>
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default ContactSection;

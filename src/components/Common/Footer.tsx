import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`;

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      Thank you for visiting my blog, Have a good day 😇
      <br />© 2021 Developer Jiyeon, Powered By Gatsby.
    </FooterWrapper>
  );
};

export default Footer;

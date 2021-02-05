import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/atoms/SectionHeader";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px;
  @media (max-width: 600px) {
    padding: 100px 30px;
  }
`;

const StyledDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 100%;
  text-align: center;
`;

const SectionTemplate = ({ title, children }) => (
  <StyledContainer>
    <StyledDiv>
      <SectionHeader title={title} />
      {children}
    </StyledDiv>
  </StyledContainer>
);

export default SectionTemplate;

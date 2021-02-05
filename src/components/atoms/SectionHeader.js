import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  font-size: 5vw;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: default;
  color: #fff;
  margin: auto;
`;
const SectionHeader = ({ title }) => <StyledWrapper>{title}</StyledWrapper>;

export default SectionHeader;

import React from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  position: relative;
  height: 45px;
  left: 30px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;
const StyledToggle = styled.div`
  display: none;
  color: ${({ theme }) => theme.blue};
  text-transform: uppercase;

  @media (max-width: 1000px) {
    font-size: 50px;
    display: block;
  }
  @media (max-width: 300px) {
    width: 30px !important;
    height: 30px !important;
  }
`;
const StyledCloseToggle = styled.div`
  display: none;
  text-transform: uppercase;
  font-size: 50px;
  color: ${({ theme }) => theme.blue};

  @media (max-width: 300px) {
    width: 30px !important;
    height: 30px !important;
  }
`;

const Toggle = ({ callback }) => (
  <IconWrapper>
    <StyledToggle className="toggle" onClick={callback}>
      Menu
    </StyledToggle>
    <StyledCloseToggle className="toggleX" onClick={callback}>
      Close
    </StyledCloseToggle>
  </IconWrapper>
);

export default Toggle;

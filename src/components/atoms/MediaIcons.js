import React from "react";
import styled from "styled-components";
import { Facebook } from "@styled-icons/remix-line/Facebook";
import { Instagram } from "@styled-icons/remix-fill/Instagram";

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  z-index: 100;
  @media (max-width: 600px) {
    flex-direction: row;
    top: 10px;
    right: 20px;
    bottom: unset;
    left: unset;
    transform: translateY(0%);
  }
`;

const IconWrapper = styled.a`
  margin: 5px;
  transition: 0.5s ease;
  > svg {
    color: ${({ theme }) => theme.green};
    transition: 0.5s ease;
    margin: 5px;
  }
  :hover {
    svg {
      color: #32b842;
    }
  }
`;

const MediaIcons = () => (
  <StyledWrapper id="mediaIcons">
    <IconWrapper href="" target="_blank" title="Facebook">
      <Facebook size="40" alt="Facebook" />
    </IconWrapper>
    <IconWrapper href="" target="_blank" title="Instagram">
      <Instagram size="40" alt="Instagram" />
    </IconWrapper>
  </StyledWrapper>
);

export default MediaIcons;

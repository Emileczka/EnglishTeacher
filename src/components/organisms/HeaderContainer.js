import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Toggle from "../atoms/Toggle";

const StyledHeaderContainer = styled.div`
  position: fixed;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 0 0 0;
  z-index: 101;
  @media (max-width: 1000px) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(0%);
    width: 100%;
    height: 0%;
    &.active {
      height: 100%;
      .toggle {
        display: none;
      }
      .toggleX {
        display: block;
      }
    }
  }
`;

const HeaderContainer = ({ swiperIndex, swiper }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const toggle = () => {
    setActiveMenu((x) => !x);
  };
  return (
    <StyledHeaderContainer className={activeMenu ? "active" : ""}>
      <Menu
        swiperIndex={swiperIndex}
        swiper={swiper}
        callback={() => toggle()}
        activeMenu={activeMenu}
      />
      <Toggle callback={() => toggle()} />
    </StyledHeaderContainer>
  );
};

export default HeaderContainer;

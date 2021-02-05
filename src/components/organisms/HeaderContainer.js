import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Toggle from "../atoms/Toggle";

const StyledHeaderContainer = styled.div`
  position: fixed;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  height: 80px;
  padding: 10px 0 0 0;
  z-index: 101;

  @media (max-width: 1000px) {
    /* width: 0; */
    left: 0px;
    transform: translateX(0%);

    &.active {
      backdrop-filter: blur(20px);
      width: 100%;
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

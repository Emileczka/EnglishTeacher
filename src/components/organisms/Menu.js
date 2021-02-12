import React from "react";
import styled from "styled-components";
import MenuElement from "../molecules/MenuElement";

const StyledWrapper = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 1000px) {
    #name {
      display: none;
    }
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 60px 0px;
    text-align: center;
    transform: scale(0);
    &.active {
      opacity: 1;
      transform: scale(1);
      backdrop-filter: blur(20px);
    }
  }
`;

const Menu = ({ swiperIndex, activeMenu, swiper, callback }) => (
  <StyledWrapper className={activeMenu ? "active" : ""} id="menu">
    <MenuElement
      callback={() => {
        callback();
        swiper.slideTo(0);
      }}
      active={swiperIndex === 0 ? "active" : ""}
      title="Home"
    />
    <MenuElement
      callback={() => {
        callback();
        swiper.slideTo(1);
      }}
      active={swiperIndex === 1 ? "active" : ""}
      title="O mnie"
    />
    <a
      id="name"
      style={{
        padding: "0 40px",
        fontSize: "65px",
        whiteSpace: "nowrap",
        textTransform: "uppercase",
        color: "#9292e8",
        cursor: "pointer",
      }}
      onClick={() => {
        swiper.slideTo(0);
      }}
    >
      Agata Gębska
    </a>
    <MenuElement
      callback={() => {
        callback();
        swiper.slideTo(2);
      }}
      active={swiperIndex === 2 ? "active" : ""}
      title="Oferta"
    />
    <MenuElement
      callback={() => {
        callback();
        swiper.slideTo(3);
      }}
      active={swiperIndex === 3 ? "active" : ""}
      title="Kontakt"
    />
  </StyledWrapper>
);

export default Menu;

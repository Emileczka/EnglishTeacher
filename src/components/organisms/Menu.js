import React from "react";
import styled from "styled-components";
import MenuElement from "../molecules/MenuElement";

const StyledWrapper = styled.ul`
  /* position: relative; */
  display: flex;
  margin: 0;
  padding: 0;
  @media (max-width: 1000px) {
    #name {
      display: none;
    }
    flex-direction: column;
    position: absolute;
    margin-left: 0;
    top: 60px;
    width: 100%;
    height: calc(100vh - 60px);
    padding: 60px 0px;
    text-align: center;
    overflow: auto;
    background: transparent;
    opacity: 0;
    display: none;
    /* transform: translateX(100%); */
    /* transition: 0.5s; */

    &.active {
      transform: translateX(0);
      width: 100%;
      height: calc(100vh - 60px);
      opacity: 1;
      display: block;
      top: 60px;
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

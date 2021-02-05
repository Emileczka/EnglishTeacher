import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";
import SEO from "../components/SEO.js";
import "swiper/swiper-bundle.css";
import Home from "../components/organisms/Home";
import Offer from "../components/organisms/Offer";
import AboutMe from "../components/organisms/AboutMe";
import Contact from "../components/organisms/Contact";
import Background from "../components/atoms/Background";
import MediaIcons from "../components/atoms/MediaIcons";
import HeaderContainer from "../components/organisms/HeaderContainer";

import Swiper, {
  Pagination,
  Mousewheel,
  Keyboard,
  Scrollbar,
  Navigation,
  HashNavigation,
} from "swiper";

const SwiperPagination = styled.div`
  left: 20px;
  right: unset;
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.green}!important;
  }
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background-color: #d8fddc;
    opacity: 1;
  }
`;

const SwiperScrollbar = styled.div`
  width: 10px !important;
  right: 0 !important;
  .swiper-scrollbar-drag {
    background-color: ${({ theme }) => theme.green} !important;
    width: 10px;
    opacity: 1;
  }
`;

const SwiperNavigation = styled.div`
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  top: unset;
  position: absolute;
  transform: translateX(-50%) rotate(90deg);
  color: ${({ theme }) => theme.green};
  &.swiper-button-disabled {
    display: none;
  }
`;

const ScrollTopSwiperNavigation = styled.div`
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  top: unset;
  display: none;
  transform: translateX(-50%) rotate(90deg);
  position: absolute;
  color: ${({ theme }) => theme.green};
`;

const IndexPage = () => {
  const [swiper, setSwiper] = useState();
  const [swiperIndex, setSwiperIndex] = useState();

  const SlideToSection = () => {
    switch (window.location.hash) {
      case "#home":
        swiper.slideTo(0);
        if (swiperIndex === undefined) setSwiperIndex(0);
        break;
      case "#omnie":
        swiper.slideTo(1);
        if (swiperIndex === undefined) setSwiperIndex(1);
        break;
      case "#oferta":
        swiper.slideTo(2);
        if (swiperIndex === undefined) setSwiperIndex(2);
        break;
      case "#kontakt":
        swiper.slideTo(3);
        if (swiperIndex === undefined) setSwiperIndex(3);
        break;
    }
  };

  useEffect(() => {
    if (window.location.hash === "" || window.location.hash === undefined) {
      window.location.hash = "#home";
    }
    Swiper.use([
      Pagination,
      Mousewheel,
      Scrollbar,
      Navigation,
      Keyboard,
      HashNavigation,
    ]);
    setSwiper(
      new Swiper(".swiper-container", {
        direction: "vertical",
        loop: false,
        speed: 500,
        grabCursor: false,
        mousewheel: true,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          draggable: true,
          el: ".swiper-scrollbar",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        hashNavigation: {
          replaceState: true,
        },
        on: {
          slideChange: function (e) {
            setSwiperIndex(e.realIndex);
            if (e.realIndex === 3)
              document.getElementsByClassName(
                "swiper-button-prev"
              )[0].style.display = "block";
            else
              document.getElementsByClassName(
                "swiper-button-prev"
              )[0].style.display = "none";
          },
        },
      })
    );
  }, []);

  useEffect(() => {
    if (!swiper) return;
    document.getElementById("menu").style.transition = "1s";
    SlideToSection();
    window.onhashchange = () => {
      SlideToSection();
    };
  }, [swiper]);

  return (
    <MainTemplate>
      <HeaderContainer swiperIndex={swiperIndex} swiper={swiper} />
      <SEO title="English teacher" />
      <div className="swiper-container" style={{ height: "100vh" }}>
        <Background />
        <MediaIcons />
        <div className="swiper-wrapper">
          <section data-hash="home" className="swiper-slide">
            <Home />
          </section>
          <section data-hash="omnie" className="swiper-slide">
            <AboutMe />
          </section>
          <section data-hash="oferta" className="swiper-slide">
            <Offer />
          </section>
          <section data-hash="kontakt" className="swiper-slide">
            <Contact />
          </section>
        </div>
        <SwiperPagination className="swiper-pagination" />
        <SwiperScrollbar className="swiper-scrollbar" />
        <SwiperNavigation className="swiper-button-next" />
        <ScrollTopSwiperNavigation
          className="swiper-button-prev"
          onClick={() => swiper.slideTo(0)}
        />
      </div>
    </MainTemplate>
  );
};

export default IndexPage;

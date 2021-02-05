import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  width: 120px;
  display: flex;
  justify-content: center;
  position: relative;
  list-style: none;
  margin: 15px 5px;
  @media (max-width: 1000px) {
    margin: 15px auto;
  }
  :first-child {
    margin-right: auto;
  }
  :last-child {
    margin-left: auto;
  }
`;

const StyledLink = styled.a`
  white-space: nowrap;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0px 10px;
  font-size: 35px;
  font-weight: 600;
  /* user-select: none; */
  /* -webkit-tap-highlight-color: transparent; */
  color: #fff;
  text-decoration: none;
  @media (max-width: 1000px) {
    font-size: 1.5em;
    width: 200px;
    height: 50px;
    padding: 0px;
    font-weight: 400;
    margin: 15px 0;
  }
  @media (max-width: 260px) {
    font-size: 1em;
    height: 35px;
  }
  :before {
    content: "";
    width: 0px;
    height: 3px;
    background: #9292e8;
    position: absolute;
    top: 120%;
    left: 0;
    transition: 0.5s;
  }
  :after {
    content: "";
    width: 0px;
    height: 3px;
    background: #9292e8;
    position: absolute;
    top: 120%;
    right: 0;
    transition: 0.5s;
  }
  :hover {
    :before {
      width: 49%;
      transform: translateX(100%);
    }
    :after {
      width: 49%;
      transform: translateX(-100%);
    }
  }
  &.active {
    :before {
      width: 49%;
      transform: translateX(100%);
    }
    :after {
      width: 49%;
      transform: translateX(-100%);
    }
  }
`;

const MenuElement = ({ style, active, title, callback }) => (
  <StyledLi className={`navigation`}>
    <StyledLink
      style={style}
      className={active}
      onClick={(e) => {
        e.preventDefault();
        callback();
      }}
    >
      {title}
    </StyledLink>
  </StyledLi>
);

export default MenuElement;

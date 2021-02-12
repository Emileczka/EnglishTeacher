import React from "react";
import styled, { keyframes } from "styled-components";

const MouseWheelAnimation = keyframes`
  0% { top: 1px;}
  25% { top: 2px;}
  50% { top: 3px;}
  75% { top: 2px;}
  100% { top: 1px;}
  }
`;

const MouseScrollAnimation = keyframes`
  0%   { opacity: 0;}
  50%  { opacity: .5;}
  100% { opacity: 1;}
`;

const MouseScroll = styled.div`
  width: 24px;
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
  &.last {
    height: 70px;
    #mouse {
      order: 2;
    }
    #arrows {
      order: 1;
      margin-bottom: 0px;
      transform: rotate(180deg);
    }
  }
`;

const MouseContainer = styled.div`
  height: 40px;
  width: 24px;
  border-radius: 14px;
  transform: none;
  border: 2px solid white;
  /* top: 170px; */
`;

const Wheel = styled.div`
  display: block;
  margin: 5px auto;
  background: white;
  position: relative;
  height: 4px;
  width: 4px;
  border: 2px solid #fff;
  border-radius: 8px;
  animation: ${MouseWheelAnimation} 0.6s linear infinite;
`;

const StyledArrow = styled.span`
  display: block;
  width: 5px;
  height: 5px;
  transform: rotate(45deg);
  border-right: 2px solid ${({ theme }) => theme.green};
  border-bottom: 2px solid ${({ theme }) => theme.green};
  margin: 0 0 -8px 4px;
  width: 16px;
  height: 16px;
  animation: ${MouseScrollAnimation} 1s infinite;

  &.first {
    animation-direction: alternate;
    animation-delay: alternate;
  }
  &.second {
    animation-direction: alternate;
    animation-delay: 0.2s;
  }
  &.third {
    animation-direction: alternate;
    animation-delay: 0.3s;
  }
`;

const Mouse = () => (
  <MouseScroll id="scrollMouse">
    <MouseContainer id="mouse">
      <Wheel />
    </MouseContainer>
    <div id="arrows">
      <StyledArrow className="first" />
      <StyledArrow className="second" />
      <StyledArrow className="third" />
    </div>
  </MouseScroll>
);

export default Mouse;

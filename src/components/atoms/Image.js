import React from "react";
import styled from "styled-components";
import image from "../../images/image-removebg.png";
import backgroundImage from "../../images/backgroundImage.png";

const StyledDiv = styled.div`
  grid-area: image;
  background-color: rgba(181, 255, 185, 0.2);
  width: 100%;
  display: flex;
`;

const StyledBorder = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  border: 3px solid ${({ theme }) => theme.green};
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 100%;
`;

const Image = () => (
  <StyledDiv>
    <StyledImage src={image} alt="Agata Gębska"></StyledImage>
    {/* <StyledBorder /> */}
  </StyledDiv>
);

export default Image;

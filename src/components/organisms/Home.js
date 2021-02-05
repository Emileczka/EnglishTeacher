import React from "react";
import styled from "styled-components";
import Image from "../atoms/Image";
import SectionHeader from "../atoms/SectionHeader";

const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 100px;
  grid-template-columns: minmax(350px, 1fr) 2fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px 20px;
  grid-template-areas:
    "image div1"
    "image div2";

  @media (max-width: 800px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 20px;
    grid-template-areas:
      "image div1"
      "div2 div2";
  }
  @media (max-width: 600px) {
    padding: 100px 30px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 1fr;
    gap: 20px 20px;
    grid-template-areas:
      "image div1"
      "div2 div2";
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px 10px;
    grid-template-areas:
      "image"
      "div1"
      "div2";
  }
`;

const StyledBox = styled.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Home = () => (
  <>
    <StyledContainer>
      <Image />
      <StyledBox style={{ gridArea: "div1" }}>
        <SectionHeader title="English teacher" />
      </StyledBox>
      <StyledBox style={{ gridArea: "div2" }}></StyledBox>
    </StyledContainer>
  </>
);

export default Home;

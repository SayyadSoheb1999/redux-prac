import React from "react";
import styled from "styled-components";
import { Row, Col, Accordion } from "react-bootstrap";

export const Main = ({ data }) => {
  return (
    <MainContainer>
      <p className="text-red-300 text-3xl font-bold underline text-center">
        Hello world!
      </p>{" "}
      {data?.map(
        ({ id, thumbnail, brand, description, price, rating, title }) => (
          <MainWrap
            id={id}
            thumbnail={
              thumbnail ||
              "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            }
          >
            <Row>
              <Col lg={4} md={4} sm={4}>
                <DivFlex img={true} style={{ paddingLeft: "20px" }}>
                  <StyledImg
                    src={thumbnail}
                    alt={id}
                    width="200"
                    height={"150"}
                  />
                </DivFlex>
              </Col>

              <Col lg={4} md={4} sm={4}>
                <DivFlex
                  style={{
                    flexDirection: "column",
                    padding: "15px 0px 10px 20px",
                  }}
                >
                  <StyledH6>
                    <TitleSpan> Brand </TitleSpan>:{" "}
                    <ValueSpan>{brand}</ValueSpan>
                  </StyledH6>
                  <StyledH6>
                    <TitleSpan> Description </TitleSpan>:{" "}
                    <ValueSpan>
                      {description?.split(" ").length > 11
                        ? description?.substring(10).concat("...")
                        : description}
                    </ValueSpan>
                  </StyledH6>
                  <StyledH6>
                    <TitleSpan> Rating </TitleSpan>:{" "}
                    <ValueSpan style={{ color: "tomato", fontSize: "15px" }}>
                      {Array(Math.round(rating)).fill("*").join(" ")}
                    </ValueSpan>
                  </StyledH6>
                </DivFlex>
              </Col>
            </Row>
          </MainWrap>
        )
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  z-index: 1;
  padding: 20px;
`;
const MainWrap = styled.div`
  /* background-image: ${({ thumbnail }) => thumbnail || `url(${thumbnail})`};
  background-repeat: no-repeat;
  background-size: cover; */
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  min-height: 80px;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3p;
  transition: all ease-in-out 0.1s;
  &:hover {
    transform: scale(1.01);
  }
`;

const DivFlex = styled.div`
  display: flex;
  @media (max-width: 600px) {
    ${({ img }) =>
      img &&
      `
  justify-content:center;

  `}
  } ;
`;
const StyledImg = styled.img`
  object-fit: contain;
  width: auto;
  min-height: 175px;
  max-height: 180px;
  @media (max-width) {
    margin: auto;
  }
`;
const StyledH6 = styled.h6`
  text-align: left;
  margin-bottom: 5px;
`;
const ValueSpan = styled.span`
  font-size: 13px;
`;
const TitleSpan = styled.span`
  font-size: 15px;
  text-decoration: underline;
`;

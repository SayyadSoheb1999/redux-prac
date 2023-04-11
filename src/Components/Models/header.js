import React from "react";
import styled from "styled-components";
export const Header = () => {
  return <HeaderContainer>header</HeaderContainer>;
};

const HeaderContainer = styled.div`
  width: 100%;
  min-height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

import React from "react";
import styled from "styled-components";
import { Row, Col, Accordion } from "react-bootstrap";
import { useGetAllPostsQuery } from "../RTK-Query/serviceApi";
import { Loader } from "../loader/Loader";
import { Main } from "./Main";

export const QuotesPage = () => {
  const { data, error, isLoading } = useGetAllPostsQuery();

  console.log({ error, data });
  return (
    <QuotesContainer>
      <Row>
        <Col lg={3} md={3}>
          <SideCard>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </SideCard>
        </Col>
        <Col lg={9} md={9} sm={12}>
          <Main data={data?.products} />
        </Col>
      </Row>
    </QuotesContainer>
  );
};

const QuotesContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  z-index: 1;
  padding: 20px;
`;
const SideCard = styled.div`
  width: 100%;
  z-index: 1;
`;

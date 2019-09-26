import React from "react";
import styled from "styled-components";
import { SharedContainer, SharedInnerContainer } from "../sharedStyle";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

const Container = styled(SharedContainer)<{ pathname: string }>`
  padding: 2rem 1rem;
  background: linear-gradient(180deg, #444dc8 0%, #4d2377 100%);
  align-items: flex-start;
  position: absolute;
  z-index: 1;
  transition: 0.5s ease-in-out;
  height: ${({ pathname }) =>
    pathname === "/issue-create" ? "7rem" : "12rem"};
`;

const CustomLink = styled(Link)`
  position: relative;
  z-index: 2;
  color: white;
  font-size: 3rem;
  font-weight: 700;
`;

const InnerContainer = styled(SharedInnerContainer)`
  justify-content: center;
  align-items: center;
`;

interface Props extends RouteComponentProps {}
interface State {}

class Header extends React.Component<Props, State> {
  render() {
    const {
      location: { pathname }
    } = this.props;
    return (
      <Container pathname={pathname}>
        <InnerContainer>
          <CustomLink to={"/"}>Fancy!</CustomLink>
        </InnerContainer>
      </Container>
    );
  }
}

export default withRouter(Header);

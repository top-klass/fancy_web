import React from "react";
import styled from "styled-components";
import { baseURL } from "../config/_mixin";

const Container = styled.button`
  font-weight: 700;
  padding: 1rem;
  background-color: black;
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
`;

const Icon = styled.i`
  color: white;
  font-size: 2rem;
  margin-right: 0.5rem;
`;

const Text = styled.div`
  font-size: 1.2rem;
  color: white;
`;

interface Props {}

interface State {}

export default class GitHubLogin extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Link
          href={`https://github.com/login/oauth/authorize?client_id=11a01d2229799eeedf98&redirect_uri=${baseURL}/oauth`}
        >
          <Icon className="fab fa-github" />
          <Text>GitHub Login</Text>
        </Link>
      </Container>
    );
  }
}

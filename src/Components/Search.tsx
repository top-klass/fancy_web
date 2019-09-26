import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  min-width: 10rem;
  display: flex;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
`;

const SearchIcon = styled.i`
  background-color: grey;
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;
`;

interface Props {}

interface State {}

export default class Search extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Input />
        <SearchIcon className="fas fa-search" />
      </Container>
    );
  }
}

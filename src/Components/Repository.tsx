import React from "react";
import styled from "styled-components";

const ArrowIcon = styled.i`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  transition: 0.5s ease-in-out;
`;

const Container = styled.div<{ isActive: boolean }>`
  animation: fadeIn 1s ease-in-out;
  width: 90%;
  height: 2.5rem;
  background-color: ${({ isActive }) => (isActive ? "#427cff" : "white")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: ltr;
  position: relative;
  border-radius: 0.5rem;
  transition: 0.5s ease-in-out;
  :after {
    content: "";
    position: absolute;
    border-style: solid;
    /* reduce the damage in FF3.0 */
    display: block;
    width: 0;
    top: 50%; /* controls vertical position */
    transform: translateY(-50%);
    transition: 0.5s ease-in-out;
    right: ${({ isActive }) =>
      isActive
        ? "-0.5rem"
        : "0rem"}; /* value = - border-left-width - border-right-width */
    bottom: auto;
    left: auto;
    border-width: 0.5rem 0 0.5rem 0.5rem;
    border-color: transparent
      ${({ isActive }) => (isActive ? "#427cff" : "white")};
  }
  cursor: pointer;
  &:hover {
    ${ArrowIcon} {
      margin-right: 0rem;
    }
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const GitHubIcon = styled.i`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

interface Props {
  repository: any;
  isActive: boolean;
  handleOnClickRepository: (repo: string) => void;
  key: number;
}

interface State {}

export default class Repository extends React.Component<Props, State> {
  render() {
    const {
      repository: { fullName, name },
      isActive
    } = this.props;
    return (
      <Container
        isActive={isActive}
        onClick={() => this.props.handleOnClickRepository(fullName)}
      >
        <LeftContainer>
          <GitHubIcon className="fab fa-github" />
          {name}
        </LeftContainer>
        {!isActive && <ArrowIcon className="fas fa-chevron-right" />}
      </Container>
    );
  }
}

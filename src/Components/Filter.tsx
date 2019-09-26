import React from "react";
import styled from "styled-components";
import PLTag from "./PLTag";
import { PLTags } from "../config/_mixin";

const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
`;

const TagContainer = styled.div`
  line-height: 2;
`;

const TagWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  toggleTag: (idx: number) => void;
  tags: number[];
}

interface State {}

export default class Filter extends React.Component<Props, State> {
  render() {
    const { tags } = this.props;
    return (
      <Container>
        <Title>태그</Title>
        <TagContainer>
          {PLTags.map((tag, idx) => (
            <TagWrapper key={idx} onClick={() => this.props.toggleTag(idx)}>
              <PLTag disable={tags.indexOf(idx) === -1} key={idx} pl={tag} />
            </TagWrapper>
          ))}
        </TagContainer>
      </Container>
    );
  }
}

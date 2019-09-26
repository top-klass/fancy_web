import React from "react";
import styled from "styled-components";
import Item from "../../Components/Item";
import FloatingBox from "../../Components/FloatingBox";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 2rem;
`;

const ItemList = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, auto));
  width: 100%;
  margin-right: 1rem;
`;

interface Props {
  tags: number[];
  items: any;
  toggleTag: (idx: number) => void;
}

const HomePresenter: React.SFC<Props> = ({ tags, toggleTag, items }) => {
  return (
    <Container>
      <ItemList>
        {items &&
          items.map((item: any, idx: number) => <Item item={item} key={idx} />)}
      </ItemList>
      <FloatingBox tags={tags} toggleTag={toggleTag} />
    </Container>
  );
};

export default HomePresenter;

import React from "react";
import styled from "styled-components";
import { Goods } from "../shared-interfaces";

const Container = styled.div`
  background-color: #fff;
  min-width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.7rem;
`;

const ItemImage = styled.img`
  height: 5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`;

const RightSection = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 0.5rem;
`;

const Name = styled.div`
  font-size: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const NamePriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  color: white;
  padding: 0.5rem 0.7rem;
  border-radius: 0.5rem;
  background: linear-gradient(48deg, #444dc8 0%, #4d2377 100%);
  transition: box-shadow 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;

interface Props {
  item: Goods;
}

interface State {}

export default class Item extends React.Component<Props, State> {
  render() {
    const { imgSrc, name, price } = this.props.item;
    return (
      <Container>
        <ItemImage src={imgSrc}></ItemImage>
        <RightSection>
          <NamePriceSection>
            <Name>{name}</Name>
            <Price>{`$ ${price}`}</Price>
          </NamePriceSection>
          <Button>Buy it</Button>
        </RightSection>
      </Container>
    );
  }
}

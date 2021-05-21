import React from 'react';
import styled from 'styled-components';

const ItemLinks = ({ name, toggle, isOpen, description }) => {
  return (
    <ItemLinksContainer isOpen={isOpen}>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <ItemLink href='https://www.apple.co.uk'>Link to Item</ItemLink>
    </ItemLinksContainer>
  );
};

export default ItemLinks;

const ItemLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 325px;
  height: 225px;
  background: rgba(254, 253, 253, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  z-index: 99;
  position: absolute;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  bottom: 2rem;
`;

const Name = styled.h1``;

const Description = styled.p``;

const ItemLink = styled.a``;

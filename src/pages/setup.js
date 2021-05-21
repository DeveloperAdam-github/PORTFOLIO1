import React, { useState } from 'react';
import styled from 'styled-components';
import ItemLinks from '../components/ItemLinks/ItemLinks';

const alert1 = () => {
  alert('hello');
};

const Setup = () => {
  return (
    <Container>
      <SetupContainer>
        <LinkToItem target='_blank' href='https://www.apple.com/uk/ipad-pro/'>
          <Ipad />
        </LinkToItem>
        <LinkToItem target='_blank' href='https://www.apple.com/uk/imac-27/'>
          <Imac />
        </LinkToItem>
        <LinkToItem
          target='_blank'
          href='https://www.amazon.co.uk/gp/product/B01JM4E3UC/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1'
        >
          <LG />
        </LinkToItem>
        <LinkToItem target='_blank' href='https://noteitstationery.com/'>
          <NoteIt />
        </LinkToItem>
        <LinkToItem
          target='_blank'
          href='https://www.amazon.co.uk/gp/product/B07PNHJG34/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1'
        >
          <DeskPad />
        </LinkToItem>
        <LinkToItem
          target='_blank'
          href='https://www.amazon.co.uk/gp/product/B07KD79YVL/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1'
        >
          <EchoShow />
        </LinkToItem>
        <LinkToItem
          target='_blank'
          href='https://www.benq.eu/en-uk/lamps/computer-desklamp/screenbar-plus.html'
        >
          <BenQ />
        </LinkToItem>
        <LinkToItem
          target='_blank'
          href='https://flexispot.co.uk/desk/height-adjustable-desks/flexispot-standing-desks-comparison/electric-standing-desk-frame-3-stage-e7.html'
        >
          <FlexiSpot />
        </LinkToItem>
      </SetupContainer>
    </Container>
  );
};

export default Setup;

const LinkToItem = styled.a`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

const SetupContainer = styled.div`
  background-image: url('https://images.unsplash.com/photo-1621605954595-af309703f6f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 600px;
  max-height: 600px;
  width: 440px;
  max-width: 440px;
  background-color: #fff;
  position: fixed;
  margin-bottom: 5vh;
  z-index: 1;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  z-index: 5;

  :focus {
    outline: none;
  }
`;

const Ipad = styled.div`
  height: 15px;
  width: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 50%;
  position: absolute;
  bottom: 13rem;
  left: 4rem;
`;

const Imac = styled.div`
  height: 15px;
  width: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 50%;
  position: absolute;
  bottom: 18rem;
  left: 14rem;
`;

const LG = styled.div`
  height: 15px;
  width: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 50%;
  position: absolute;
  bottom: 15rem;
  right: 4.5rem;
`;

const NoteIt = styled.div`
  height: 15px;
  width: 15px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 50%;
  position: absolute;
  bottom: 9rem;
  right: 13rem;
  z-index: -1;
`;

const DeskPad = styled.div`
  height: 15px;
  width: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 50%;
  position: absolute;
  bottom: 7.5rem;
  left: 3rem;
`;

const EchoShow = styled.div`
  height: 15px;
  width: 15px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 50%;
  position: absolute;
  bottom: 7rem;
  right: 5rem;
`;

const BenQ = styled.div`
  height: 15px;
  width: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 50%;
  position: absolute;
  bottom: 21rem;
  left: 9rem;
  z-index: -1;
`;

const FlexiSpot = styled.div`
  height: 15px;
  width: 15px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 50%;
  position: absolute;
  bottom: 3rem;
  right: 4rem;
`;

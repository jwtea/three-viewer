import dynamic from 'next/dynamic';
import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: black;
`;

const CanvasContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const ContentContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 5em;
  color: white;
  text-align: center;
`;

const Screw = dynamic(import('../Scenes/ScrewScene'), {
  ssr: false,
});

const ScrewsPage = () => {
  return (
    <Page>
      <CanvasContainer>
        <ContentContainer>{/* <Title>CARBON 22</Title> */}</ContentContainer>
        <Screw />
      </CanvasContainer>
    </Page>
  );
};

export default ScrewsPage;

import dynamic from 'next/dynamic';
import React from 'react';
import styled from 'styled-components';
import { withRedux } from '../lib/redux';

const Page = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  color: ${({ theme }) => theme.colors.white};
`;

const CanvasContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const Title = styled.h1`
  color: white;
  position: absolute;
  font-weight: 800;
  font-size: 8em;
  margin: 0;
  text-transform: uppercase;
  z-index: 1;
`;

const ComputerViewer = dynamic(import('../components/ComputerViewer'), {
  ssr: false,
});

const IndexPage = () => {
  return (
    <Page>
      <CanvasContainer>
        <Title>User</Title>
        <ComputerViewer />
      </CanvasContainer>
    </Page>
  );
};

export default withRedux(IndexPage);

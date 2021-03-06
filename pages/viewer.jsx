import dynamic from 'next/dynamic';
import React from 'react';
import styled from 'styled-components';

import CanvasControls from '../components/CanvasControls';
import { withRedux } from '../lib/redux';

const Page = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  color: ${({ theme }) => theme.colors.white};
`;

const CanvasContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  height: 700px;
`;

const Viewer = dynamic(import('../components/Viewer'), {
  ssr: false,
});

const IndexPage = () => {
  return (
    <Page>
      <CanvasControls />
      <CanvasContainer>
        <Viewer />
      </CanvasContainer>
    </Page>
  );
};

export default withRedux(IndexPage);

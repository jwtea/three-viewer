import dynamic from 'next/dynamic';
import React from 'react';
import styled from 'styled-components';

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
  height: 100%;
`;

const Background = dynamic(import('../components/Background'), {
  ssr: false,
});

const TrianglesPage = () => {
  return (
    <Page>
      <CanvasContainer>
        <Background />
      </CanvasContainer>
    </Page>
  );
};

export default TrianglesPage;

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

const ComputerViewer = dynamic(import('../components/ComputerViewer'), {
  ssr: false,
});

const IndexPage = () => {
  return (
    <Page>
      <ComputerViewer />
    </Page>
  );
};

export default withRedux(IndexPage);

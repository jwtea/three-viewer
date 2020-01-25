import dynamic from 'next/dynamic';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import CanvasControls from '../components/CanvasControls';
import { withRedux } from '../lib/redux';

const Page = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const CanvasContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  height: 700px;
`;

const Section = styled.section`
  font-size: 1.2em;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const HeaderSection = styled(Section)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

const CanvasSection = styled(Section)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
`;

const CanvasControlsContainer = styled.div`
  position: absolute;
  height: 100px;
  z-index: 2;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  display: flex;
  /* background-color: ${({ theme }) => theme.colors.black}; */
`;

const Title = styled.div`
  text-align: center;
  font-weight: 800;
  text-shadow: ${({ theme }) => theme.colors.black} 0px 0px 1px;
  width: 100%;
  justify-self: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: 8em;
`;

const Viewer = dynamic(import('../components/Viewer'), {
  ssr: false,
});

const IndexPage = props => {
  return (
    <Page>
      <HeaderSection>
        <Title>View thangs</Title>
      </HeaderSection>

      <CanvasSection>
        <CanvasControlsContainer>
          <CanvasControls />
        </CanvasControlsContainer>
        <CanvasContainer>
          <Viewer />
        </CanvasContainer>
      </CanvasSection>

      <Section>
        <Content>
          <p>
            An illustration is a visual representation such as a drawing,
            painting, photograph or other work of art that stresses subject more
            than form. The aim of an illustration is to elucidate or decorate a
            story, poem or piece of textual information (such as a newspaper
            article), traditionally by providing a visual representation of
            something described in the text. The editorial cartoon, also known
            as a political cartoon, is an illustration containing a political or
            social message.
          </p>
          <p>
            A graph or chart is an information graphic that represents tabular,
            numeric data. Charts are often used to make it easier to understand
            large quantities of data and the relationships between different
            parts of the data.
          </p>
          <p>
            A diagram is a simplified and structured visual representation of
            concepts, ideas, constructions, relations, statistical data, etc.,
            used to visualize and clarify the topic.
          </p>
          <p>
            A symbol, in its basic sense, is a representation of a concept or
            quantity; i.e., an idea, object, concept, quality, etc. In more
            psychological and philosophical terms, all concepts are symbolic in
            nature, and representations for these concepts are simply token
            artifacts that are allegorical to (but do not directly codify) a
            symbolic meaning, or symbolism.
          </p>
          <p>
            A map is a simplified depiction of a space, a navigational aid which
            highlights relations between objects within that space. Usually, a
            map is a two-dimensional, geometrically accurate representation of a
            three-dimensional space.
          </p>
        </Content>
      </Section>
    </Page>
  );
};

export default withRedux(IndexPage);

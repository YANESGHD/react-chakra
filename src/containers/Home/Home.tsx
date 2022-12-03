import { FunctionComponent } from 'react';
import { Intro, About } from './components';
import styled from '@emotion/styled';

export const Home: FunctionComponent = () => {
  return (
    <Container>
      <Intro />
      <About />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 432px;
  border: 2px solid #C8C6C6;
  border-radius: 12px;
`;

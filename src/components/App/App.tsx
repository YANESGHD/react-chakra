import { FunctionComponent } from 'react';
import { Home } from '../../containers/Home';
import styled from '@emotion/styled';

export const App: FunctionComponent = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

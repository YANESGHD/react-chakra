import { FunctionComponent } from 'react';
import styled from '@emotion/styled';


export const Benefit: FunctionComponent = () => {
  return (
    <Container>
      <Text>Lender Benefit</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 311px;
  height: 27px;
  background: #ECEAF2;
  border-radius: 24px;
  padding: 0 20px;
  margin: 20px 0;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #7B5BE4;
`;
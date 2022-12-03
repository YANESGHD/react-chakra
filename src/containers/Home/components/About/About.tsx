import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Benefit } from '..';
import { Button } from '@chakra-ui/react';

export const About: FunctionComponent = () => {
  return (
    <Container>
      <Title>About the Lender</Title>
      <Text>Fill with Lorem ipsum dhfe ndwufiu  fheh u2en i19h ueu2 0 he ns  asabsqh sw whhdi dw ppwd euy4h  dbdjq jeeoi nd.</Text>
      <Benefit />
      <Benefit />
      <Benefit />
    </Container>
  )
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 15px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  padding-bottom: 20px;
`;

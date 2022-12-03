import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { FmdGoodOutlined } from '@mui/icons-material';

export const Intro: FunctionComponent = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Revenue Based Financing</Title>
        <Text>By Lendistry</Text>

        <LocationContainer>
          <FmdGoodOutlined />
          <Text>Location</Text>
        </LocationContainer>
        
        <SmallText>Get funded in 12 days.</SmallText>
      </TextContainer>

      <PriceText>$10,000 - $1,000,000</PriceText>
    </Container>
  );
};

const Container = styled.div`
  width: 432px;
  height: auto;
  background: #FFFFFF;
  border: 2.25px solid #868686;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 15px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
`;

const SmallText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PriceText = styled.h3`
  border-top: 2.25px solid #868686;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  padding: 10px 15px;
  color: #7B5BE4;
`;

const TextContainer = styled.div`
  padding: 20px;
`;

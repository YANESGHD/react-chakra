import { FunctionComponent } from 'react';
import { Benefit } from '..';
import { Button, Stack, HStack, Text } from '@chakra-ui/react';

export const About: FunctionComponent = () => {
  return (
    <Stack px='24px' py='35px'>
      <HStack justifyContent='space-between' alignItems='center' pb='15px'>
        <Text fontSize='20px' fontWeight='700'>
          About the Lender
        </Text>
        <Button h='32px' w='130px' bg='#020202' color='white' borderRadius='6px' _hover={{ bg: "blue" }}>
          Learn More
        </Button>
      </HStack>
      
      <Text fontSize='16px' fontWeight='400' pb='20px'>
        Fill with Lorem ipsum dhfe ndwufiu fheh u2en i19h ueu2 0 he ns asabsqh
        sw whhdi dw ppwd euy4h dbdjq jeeoi nd.
      </Text>
      
      <Benefit />
      <Benefit />
      <Benefit />
    </Stack>
  );
};

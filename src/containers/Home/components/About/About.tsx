import { FunctionComponent } from 'react';
import { Benefit } from '..';
import { Button, Stack, HStack, Heading, Text } from '@chakra-ui/react';

export const About: FunctionComponent = () => {
  return (
    <Stack px='24px' py='35px'>
      <HStack justify='space-between' align='center' pb='15px'>
        <Heading fontSize='20px' fontWeight='bold'>
          About the Lender
        </Heading>
        <Button variant='primary'>
          Learn More
        </Button>
      </HStack>
      
      <Text fontSize='16px' fontWeight='normal' pb='20px'>
        Fill with Lorem ipsum dhfe ndwufiu fheh u2en i19h ueu2 0 he ns asabsqh
        sw whhdi dw ppwd euy4h dbdjq jeeoi nd.
      </Text>

      <Stack spacing={5} pt='10px'>
        <Benefit />
        <Benefit />
        <Benefit />
      </Stack>
    </Stack>
  );
};

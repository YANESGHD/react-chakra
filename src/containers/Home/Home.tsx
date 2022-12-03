import { FunctionComponent } from 'react';
import { Intro, About } from './components';
import { Stack } from '@chakra-ui/react';

export const Home: FunctionComponent = () => {
  return (
    <Stack w='432px' border='2px solid #C8C6C6' borderRadius='12px'>
      <Intro />
      <About />
    </Stack>
  );
};

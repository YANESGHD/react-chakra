import { FunctionComponent } from 'react';
import { Intro, About } from './components';
import { Stack, Button } from '@chakra-ui/react';

export const Home: FunctionComponent = () => {
  return (
    <Stack justify='center' align='center' pt='40px'>
      <Stack>
        <Button variant='secondary'>
          Good Fit
        </Button>

        <Stack w='432px' border='2px solid #C8C6C6' borderRadius='12px'>
          <Intro />
          <About />
        </Stack>
      </Stack>
    </Stack>
  );
};

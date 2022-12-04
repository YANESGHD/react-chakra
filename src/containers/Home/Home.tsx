import { FunctionComponent } from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { LenderContextProvider } from '../../contexts';
import { Intro, About } from './components';

export const Home: FunctionComponent = () => {
  return (
    <Stack justify='center' align='center' pt='40px'>
      <Stack>
          <Button variant='badge'>
            Good Fit
          </Button>

        <Stack maxWidth='432px' border='2px solid #C8C6C6' borderRadius='12px'>
          <LenderContextProvider>
            <Intro />
            <About />
          </LenderContextProvider>
        </Stack>
      </Stack>
    </Stack>
  );
};

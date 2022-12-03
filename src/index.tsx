import ReactDOM from 'react-dom/client';
import { App, GlobalStyles } from './components';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
    <Global styles={GlobalStyles} />
    <App />
  </ChakraProvider>
);

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { TopView } from './modules';

export const App = () => {
  return (
    <ChakraProvider>
      <TopView />
    </ChakraProvider>
  );
};

export default App;

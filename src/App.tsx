import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { TopView, HotelList } from './modules';
import { FilterConfig, initialFilterValue } from './components';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const App = () => {
  const [filterValue, setFilterValue] =
    useState<FilterConfig>(initialFilterValue);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <TopView onFilterChange={setFilterValue} />
        <HotelList filterValue={filterValue} />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;

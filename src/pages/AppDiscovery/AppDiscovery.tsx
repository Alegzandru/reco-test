import { Box, Flex, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';

import { usePutCompaniesQuery } from '@/services/companies/queries';

import { AppDiscoveryTable } from './components/AppDiscoveryTable/AppDiscoveryTable';

export const AppDiscovery = () => {
  const [appName, setAppName] = useState('');
  const [category, setCategory] = useState('');

  const {
    data: companies,
    isFetching,
    isPending,
  } = usePutCompaniesQuery({
    appName,
    category,
    pageNumber: 0,
    pageSize: 25,
  });

  return (
    <Flex flexGrow={1} h="full" p="0.625rem" gap="0.625rem">
      <Box flexGrow={1} h="full" p={4} maxH="full" overflowY="auto" bg="surface.1" minH="full">
        <AppDiscoveryTable companies={companies?.appRows} isLoading={isFetching || isPending} />
      </Box>
      <VStack w={80} h="full" flexShrink={0} bg="surface.1" minH="full" p={4} gap="0.625rem">
        <Box
          fontSize="xs"
          bg="accent.dark"
          borderTopRadius="sm"
          px={4}
          py="0.875rem"
          color="white"
          borderBottom="1px solid #5B5B5B"
          w="full"
        >
          Filters
        </Box>
        <Input
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
          bg="surface.2"
          color="white"
          placeholder="App Name"
        />
        <Input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          bg="surface.2"
          color="white"
          placeholder="Category"
        />
      </VStack>
    </Flex>
  );
};

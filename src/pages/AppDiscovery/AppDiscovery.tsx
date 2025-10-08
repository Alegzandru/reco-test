import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { usePutCompaniesQuery } from '@/services/companies/queries';

import { AppDiscoveryTable } from './components/AppDiscoveryTable/AppDiscoveryTable';
import { TableFilter } from './components/TableFilter/TableFilter';

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
      <Box flexGrow={1} h="full" p={4} maxH="full" bg="surface.1" minH="full">
        <Box overflowY="auto" maxH="full" h="full" w="full">
          <AppDiscoveryTable companies={companies?.appRows} isLoading={isFetching || isPending} />
        </Box>
      </Box>
      <TableFilter
        appName={appName}
        category={category}
        onChangeAppName={setAppName}
        onChangeCategory={setCategory}
      />
    </Flex>
  );
};

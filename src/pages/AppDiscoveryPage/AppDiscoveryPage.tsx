import { Box, Flex } from '@chakra-ui/react';
import { useMemo, useState } from 'react';

import { usePutCompaniesQuery } from '@/services/companies/queries';

import { AppDiscoveryTable } from './components/AppDiscoveryTable/AppDiscoveryTable';
import { TableFilter } from './components/TableFilter/TableFilter';
import { useSorting } from './hooks/useSorting';

export const AppDiscovery = () => {
  const [appName, setAppName] = useState('');
  const [category, setCategory] = useState('');
  const [sorting, dispatchSorting] = useSorting();

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

  const sortedCompanies = useMemo(() => {
    if (!companies?.appRows) return [];
    if (!['appName', 'category'].includes(sorting.field)) {
      return companies?.appRows;
    }
    return companies?.appRows?.sort((a, b) => {
      return a[sorting.field] < b[sorting.field]
        ? sorting.order === 'asc'
          ? -1
          : 1
        : sorting.order === 'asc'
          ? 1
          : -1;
    });
  }, [companies?.appRows, sorting]);

  return (
    <Flex flexGrow={1} h="full" p="0.625rem" gap="0.625rem">
      <Box flexGrow={1} h="full" p={4} maxH="full" bg="surface.1" minH="full">
        <Box overflowY="auto" maxH="full" h="full" w="full">
          <AppDiscoveryTable
            companies={sortedCompanies}
            isLoading={isFetching || isPending}
            onSort={dispatchSorting}
            sorting={sorting}
          />
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

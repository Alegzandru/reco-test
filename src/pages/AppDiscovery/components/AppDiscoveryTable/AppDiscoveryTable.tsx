import { Box, Flex, Table, Text } from '@chakra-ui/react';

import type { AppDiscoveryTableProps } from './types';

export const AppDiscoveryTable = ({ companies, isLoading }: AppDiscoveryTableProps) => {
  return (
    <Table.Root borderCollapse="separate" borderSpacing="0 0.625rem">
      <Table.Header>
        <Table.Row fontSize="xs" bg="accent.dark" borderTopRadius="sm">
          <Table.ColumnHeader
            color="white"
            borderTopStartRadius="sm"
            borderBottom="1px solid #5B5B5B"
          >
            Name
          </Table.ColumnHeader>
          <Table.ColumnHeader color="white" borderBottom="1px solid #5B5B5B">
            Category
          </Table.ColumnHeader>
          <Table.ColumnHeader
            borderBottom="1px solid #5B5B5B"
            color="white"
            borderTopEndRadius="sm"
          >
            Connection
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body border="none">
        {isLoading && (
          <Table.Row bg="surface.2" color="white" fontSize="xs">
            <Table.Cell borderBottom="none">Loading...</Table.Cell>
            <Table.Cell borderBottom="none"></Table.Cell>
            <Table.Cell borderBottom="none"></Table.Cell>
          </Table.Row>
        )}
        {companies?.map((item) => (
          <Table.Row key={item.appId} fontSize="xs" bg="surface.2" color="white">
            <Table.Cell borderBottom="none">
              <Flex alignItems="center" gap="0.625rem">
                <Box h="1.75rem" w="1.75rem" bg="#555555" borderRadius="full" />
                <Text>{item.appName}</Text>
              </Flex>
            </Table.Cell>
            <Table.Cell borderBottom="none">{item.category}</Table.Cell>
            <Table.Cell borderBottom="none">
              <Flex alignItems="center" gap="0.625rem">
                <Box h="1.75rem" w="1.75rem" bg="#555555" borderRadius="full" />
                <Text>{item.appSources.join(', ')}</Text>
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

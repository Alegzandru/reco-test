import { Box, Input, VStack } from '@chakra-ui/react';

import type { TableFilterProps } from './types';

export const TableFilter = ({
  appName,
  category,
  onChangeAppName,
  onChangeCategory,
}: TableFilterProps) => {
  return (
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
        onChange={(e) => onChangeAppName(e.target.value)}
        bg="surface.2"
        color="white"
        placeholder="App Name"
        _placeholder={{ color: 'gray' }}
        fontSize="xs"
      />
      <Input
        value={category}
        onChange={(e) => onChangeCategory(e.target.value)}
        bg="surface.2"
        color="white"
        placeholder="Category"
        _placeholder={{ color: 'gray' }}
        fontSize="xs"
      />
    </VStack>
  );
};

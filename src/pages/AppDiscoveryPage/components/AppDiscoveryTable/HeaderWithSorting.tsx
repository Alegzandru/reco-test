import { Button, Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import type { HeaderWithSortingProps } from './types';

export const HeaderWithSorting = ({
  text,
  onSort,
  sortingKey,
  currentSorting,
}: HeaderWithSortingProps) => {
  const isSorted = currentSorting.field === sortingKey;
  const isAscending = isSorted && currentSorting.order === 'asc';
  const isDescending = isSorted && currentSorting.order === 'desc';

  const handleSort = () => {
    if (!sortingKey) {
      return;
    }
    if (isSorted) {
      onSort({ type: 'TOGGLE_ORDER' });
    } else {
      onSort({ type: 'SET_FIELD', field: sortingKey });
    }
  };

  return (
    <Button onClick={handleSort} bg="transparent" fontSize="xs" p={0}>
      <Flex alignItems="center" gap="0.625rem">
        <Text>{text}</Text>
        {isAscending && <FaChevronUp style={{ width: 12, height: 12 }} />}
        {isDescending && <FaChevronDown style={{ width: 12, height: 12 }} />}
      </Flex>
    </Button>
  );
};

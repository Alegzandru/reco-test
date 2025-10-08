import type { PutCompaniesResponse } from '@/services/companies/types';

import type { Sorting, SortingAction } from '../../hooks/useSorting';

export type AppDiscoveryTableProps = {
  companies?: PutCompaniesResponse['appRows'];
  isLoading: boolean;
  onSort: (action: SortingAction) => void;
  sorting: Sorting;
};

export type HeaderWithSortingProps = {
  text: string;
  onSort: (action: SortingAction) => void;
  sortingKey?: 'appName' | 'category';
  currentSorting: Sorting;
};

import type { PutCompaniesResponse } from '@/services/companies/types';

export type AppDiscoveryTableProps = {
  companies?: PutCompaniesResponse['appRows'];
  isLoading: boolean;
};

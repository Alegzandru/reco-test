import { useQuery } from '@tanstack/react-query';

import { companiesService } from './api';
import type { PutCompaniesBody } from './types';

export const usePutCompaniesQuery = (body: PutCompaniesBody) =>
  useQuery({
    queryKey: ['putCompanies', body.appName, body.category, body.pageNumber, body.pageSize],
    queryFn: () => companiesService.putCompanies(body),
    enabled: !!body,
  });

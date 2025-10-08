import recoApiClient from '@/clients/axios/recoApiClient';

import type { PutCompaniesBody, PutCompaniesResponse } from './types';

export const companiesService = {
  putCompanies: async (body: PutCompaniesBody) => {
    const response = await recoApiClient.put<PutCompaniesResponse>(
      '/api/v1/app-service/get-apps',
      body
    );
    return response.data;
  },
};

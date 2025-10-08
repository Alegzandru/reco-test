export type PutCompaniesBody = {
  appName: string;
  category: string;
  pageNumber: number;
  pageSize: number;
};

export type PutCompaniesResponse = {
  appRows: {
    appId: string;
    appName: string;
    appSources: string[];
    category: string;
  }[];
  totalCount: 0;
};

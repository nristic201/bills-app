export interface IApiResponse<T, P> {
  head: IApiResponseHead<T>;
  results: P[];
}

interface IApiResponseHead<P> {
  counts: P;
  dateRange: {
    start: string;
    end: string;
  };
  lang: string;
}

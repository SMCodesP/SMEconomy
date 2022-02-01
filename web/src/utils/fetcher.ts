export const fetcher: (
  input: RequestInfo,
  init?: RequestInit | undefined
) => Promise<any> = (...args) => fetch(...args).then((res) => res.json());

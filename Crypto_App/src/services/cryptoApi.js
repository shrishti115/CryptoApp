import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const prepareHeaders = (headers) => {
  headers.set(
    "x-rapidapi-key",
    "43c7bce430msh0e2e4ee30be4126p1ededcjsncf359f63a2ed"
  );
  headers.set("x-rapidapi-host", "coinranking1.p.rapidapi.com");
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        `/coin/${coinId}/history?timePeriod=${timePeriod}`,
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
// headers: {
//     'X-RapidAPI-Key': '43c7bce430msh0e2e4ee30be4126p1ededcjsncf359f63a2ed',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// }

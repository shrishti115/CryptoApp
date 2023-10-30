import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const prepareHeaders = (headers) => {
  headers.set("X-BingApis-SDK", "true");
  headers.set(
    "x-rapidapi-key",
    "43c7bce430msh0e2e4ee30be4126p1ededcjsncf359f63a2ed"
  );
  headers.set("x-rapidapi-host", "bing-news-search1.p.rapidapi.com");
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;

// const options = {
//   method: "GET",
//   url: "https://bing-news-search1.p.rapidapi.com/news",
//   params: {
//     safeSearch: "Off",
//     textFormat: "Raw",
//   },
//   headers: {
//     "X-RapidAPI-Key": "43c7bce430msh0e2e4ee30be4126p1ededcjsncf359f63a2ed",
//     "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
//   },
// };

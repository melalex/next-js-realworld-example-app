import { config } from "@/lib/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: config.apiRoot }),
  tagTypes: ["Article"],
  endpoints: (_builder) => ({}),
});

import { apiSlice } from "./features";
import { homePageSlice } from "./features/homePage/homePageSlice";

export const reducer = {
  [homePageSlice.name]: homePageSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
};

import { config } from "@/lib/config";
import { Article } from "@/lib/domain/article";
import {
  EntityState,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { ArticleListDto } from "./dto";
import { toPagination } from "@/lib/util";
import { FullTagDescription } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { mapArticleDto } from "./mapping";
import { apiSlice } from "../api/apiSlice";

function extractTag({ slug }: Article): FullTagDescription<"Article"> {
  return {
    type: "Article",
    id: slug,
  };
}

const articleAdapter = createEntityAdapter<Article>({
  selectId: (it) => it.slug,
  sortComparer: (a, b) => b.createdAt.iso.localeCompare(a.createdAt.iso),
});

const initialState = articleAdapter.getInitialState();

export const articleSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllArticles: builder.query<EntityState<Article>, number>({
      query: (page) => {
        const pagination = toPagination(page, config.articlesPerPage);

        return {
          url: "/articles",
          params: {
            limit: pagination.limit,
            offset: pagination.offset,
          },
        };
      },
      providesTags: (result = initialState, _error, _arg) => [
        "Article",
        ...selectAll(result).map(extractTag),
      ],
      transformResponse: (response: ArticleListDto, _meta, _arg) =>
        articleAdapter.setAll(initialState, response.data.map(mapArticleDto)),
    }),
  }),
});

export function selectAllArticles(page: number) {
  return createSelector(
    articleSlice.endpoints.getAllArticles.select(page),
    (it) => it?.data
  );
}

export const { selectAll } = articleAdapter.getSelectors();

export const { useGetAllArticlesQuery } = articleSlice;

import { config } from "@/lib/config";
import { Article } from "@/lib/domain/article";
import { EntityState, createEntityAdapter } from "@reduxjs/toolkit";
import { ArticleListDto } from "./dto";
import { toPageCount, toPagination } from "@/lib/util";
import { FullTagDescription } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { mapArticleDto } from "./mapping";
import { apiSlice } from "../api/apiSlice";

interface ArticleApiState extends EntityState<Article> {
  pageCount: number;
}

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

export const initialState: ArticleApiState = articleAdapter.getInitialState({
  pageCount: 0,
});

export const articleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllArticles: builder.query<ArticleApiState, number>({
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
      transformResponse: (response: ArticleListDto, _meta, _arg) => {
        return {
          ...articleAdapter.setAll(
            initialState,
            response.articles.map(mapArticleDto)
          ),
          pageCount: toPageCount(
            response.articlesCount,
            config.articlesPerPage
          ),
        };
      },
    }),
  }),
});

export const { selectAll, selectById, selectIds } =
  articleAdapter.getSelectors();

export const { useGetAllArticlesQuery } = articleApiSlice;

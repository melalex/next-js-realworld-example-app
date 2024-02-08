import { ProfileDto } from "../profiles";

export interface ArticleDto {
  slug: string;
  tittle: string;
  description: string;
  body: string;
  tagList: Array<string>;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: ProfileDto;
}

export interface ArticleListDto {
  articles: Array<ArticleDto>;
  articlesCount: number;
}

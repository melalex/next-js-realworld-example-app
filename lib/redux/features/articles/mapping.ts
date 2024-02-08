import { Article } from "@/lib/domain/article";
import { ArticleDto } from "./dto";
import createSimpleTag from "@/lib/domain/tag";
import { mapProfileDto } from "../profiles";
import createSimpleTimestamp from "@/lib/domain/timestamp";

export function mapArticleDto(source: ArticleDto): Article {
  return {
    slug: source.slug,
    tittle: source.tittle,
    description: source.description,
    body: source.description,
    tagList: source.tagList.map(createSimpleTag),
    createdAt: createSimpleTimestamp(source.createdAt),
    updatedAt: createSimpleTimestamp(source.updatedAt),
    favorited: source.favorited,
    favoritesCount: source.favoritesCount,
    author: mapProfileDto(source.author),
  };
}

import { Article } from "@/lib/domain/article";
import { ArticleDto } from "./dto";
import { SimpleTimestamp } from "@/lib/domain/timestamp";
import { SimpleTag } from "@/lib/domain/tag";
import { mapProfileDto } from "../profiles";

export function mapArticleDto(source: ArticleDto): Article {
  return {
    slug: source.slug,
    tittle: source.tittle,
    description: source.description,
    body: source.description,
    tagList: source.tagList.map((it) => new SimpleTag(it)),
    createdAt: new SimpleTimestamp(source.createdAt),
    updatedAt: new SimpleTimestamp(source.updatedAt),
    favorited: source.favorited,
    favoritesCount: source.favoritesCount,
    author: mapProfileDto(source.author),
  };
}

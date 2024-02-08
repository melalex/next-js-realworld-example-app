"use client";

import Link from "next/link";
import Pagination from "../common/Pagination";
import FavoriteArticleButton from "./FavoriteArticleButton";
import { initialState, selectAll, useGetAllArticlesQuery } from "@/lib/redux";
import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "@/lib/redux/features/homePage/selectors";
import { setPage } from "@/lib/redux/features/homePage";
import { Article } from "@/lib/domain/article";

const FAVORITED_CLASS = "btn btn-sm btn-primary pull-xs-right";
const NOT_FAVORITED_CLASS = "btn btn-sm btn-outline-primary pull-xs-right";

interface ArticlePreviewProps {
  article: Article;
}

function ArticlePreview({ article }: ArticlePreviewProps) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link href={article.author.profileRef}>
          <img src={article.author.image} />
        </Link>
        <div className="info">
          <Link href={article.author.profileRef} className="author">
            {article.author.username}
          </Link>
          <time className="date" dateTime={article.updatedAt.iso}>
            {article.updatedAt.dateString}
          </time>
        </div>
        <FavoriteArticleButton
          articleId={article.slug}
          favorited={article.favorited}
          favoritesCount={article.favoritesCount}
          favoriteClass={FAVORITED_CLASS}
          notFavoriteClass={NOT_FAVORITED_CLASS}
        />
      </div>
      <Link href={`/article/${article.slug}`} className="preview-link">
        <h1>{article.tittle}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((it) => (
            <li key={it.id} className="tag-default tag-pill tag-outline">
              {it.value}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
}

export default function ArticlesList() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const { data, isLoading } = useGetAllArticlesQuery(page);

  if (isLoading) {
    return <div className="article-preview">Loading...</div>;
  }

  const articles = selectAll(data ?? initialState);

  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  } else
    return (
      <>
        {articles.map((it) => (
          <ArticlePreview key={it.slug} article={it} />
        ))}

        <Pagination
          pagesCount={data?.pageCount ?? 0}
          currenPage={page}
          setPage={(page) => dispatch(setPage(page))}
        />
      </>
    );
}

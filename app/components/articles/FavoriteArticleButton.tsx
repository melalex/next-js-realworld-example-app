import { useDispatch } from "react-redux";
import { handleAndPreventDefault } from "@/lib/util";
import Link from "next/link";

interface FavoriteArticleButtonProps {
  articleId: string;
  favorited: boolean;
  favoritesCount: number;
  favoriteClass: string;
  notFavoriteClass: string;
}

export default function FavoriteArticleButton({
  articleId,
  favorited,
  favoritesCount,
  favoriteClass,
  notFavoriteClass,
}: FavoriteArticleButtonProps) {
  const isAuthenticated = false;
  const buttonClass = favorited ? favoriteClass : notFavoriteClass;
  const dispatch = useDispatch();
  const favoriteClicked = () => alert(articleId);

  if (isAuthenticated) {
    return (
      <button
        className={buttonClass}
        onClick={handleAndPreventDefault(favoriteClicked)}
        // disabled={article.favoritedStatus === FavoriteStatus.UPDATING}
      >
        <i className="ion-heart"></i> {favoritesCount}
      </button>
    );
  } else {
    return (
      <Link
        className={buttonClass}
        href="/login"
        // disabled={article.favoritedStatus === FavoriteStatus.UPDATING}
      >
        <i className="ion-heart"></i> {favoritesCount}
      </Link>
    );
  }
}

import { Tag } from "./tag";
import { Timestamp } from "./timestamp";
import { Profile } from "./user";

export interface Article {
  slug: string;
  tittle: string;
  description: string;
  body: string;
  tagList: Array<Tag>;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}

import { Profile } from "@/lib/domain";
import { ProfileDto } from "./dto";

export function mapProfileDto(source: ProfileDto): Profile {
  return {
    username: source.username,
    profileRef: `/profile/${source.username}`,
    bio: source.bio,
    image: source.image,
    following: source.following,
  };
}

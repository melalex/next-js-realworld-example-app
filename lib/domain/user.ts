export interface Profile {
  username: string;
  profileRef: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface User extends Profile {
  email: string | undefined;
  password: string | undefined;
}

export interface CreateUserCmd {
  email: string;
  password: string;
}

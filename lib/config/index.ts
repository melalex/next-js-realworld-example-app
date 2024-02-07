export interface Config {
  apiRoot: string;
  articlesPerPage: number;
}

export const config: Config = {
  apiRoot: process.env.REACT_APP_BACKEND_URL ?? "https://api.realworld.io/api",
  articlesPerPage: 10,
};

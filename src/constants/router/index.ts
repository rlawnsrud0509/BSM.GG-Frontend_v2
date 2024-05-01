import { routeProperties } from "@/types/constants/routeProperties.type";

export const ROUTE: routeProperties = {
  HOME: "/",
  RANKING: "/ranking",
  LOLNERD: "/lolchang",

  REGISTER_ACCOUNT: process.env.AUTH_URL as string,
};

export const ROUTENAME: routeProperties = {
  RANKING: "교내랭킹",
  LOLNERD: "이주의 롤창",
};

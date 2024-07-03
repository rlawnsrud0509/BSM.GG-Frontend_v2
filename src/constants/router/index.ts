import { routeProperties } from "@/types/constants/RouteProperties.type";

export const ROUTE: routeProperties = {
  HOME: "/",
  RANKING: "/ranking",
  LOLNERD: "/lolchang",
  ADDITIONALINFO: "/auth/additionalInfo",

  REGISTER_ACCOUNT: process.env.NEXT_PUBLIC_AUTH_URL as string,
};

export const ROUTENAME: routeProperties = {
  RANKING: "교내랭킹",
  LOLNERD: "이주의 롤창",
};

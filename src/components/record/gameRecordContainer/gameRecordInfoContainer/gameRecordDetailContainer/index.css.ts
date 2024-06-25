import { Column } from "@/style/ui/Flex";
import { createVar, style } from "@vanilla-extract/css";

export const containerColor = createVar();
export const teamContainerColor = createVar();
export const enemyTeamContainerColor = createVar();
export const userDetailInfoContainerColor = createVar();

export const Container = style(
  Column({
    width: "100%",
    position: "relative",
    borderRadius: "0.5rem",

    justifyContent: "space-between",
    boxShadow: `0 0 1rem ${containerColor}`,

    overflow: "hidden",
  }),
);

export const TeamUserListSection = style(
  Column({
    width: "100%",
    padding: "1rem",
    boxSizing: "border-box",

    borderRadius: "0.5rem 0.5rem 0 0",
    backgroundColor: teamContainerColor,
  }),
);

export const EnemyTeamUserListSection = style(
  Column({
    width: "100%",
    padding: "1rem",
    boxSizing: "border-box",

    borderRadius: "0 0 0.5rem 0.5rem",
    backgroundColor: enemyTeamContainerColor,
  }),
);

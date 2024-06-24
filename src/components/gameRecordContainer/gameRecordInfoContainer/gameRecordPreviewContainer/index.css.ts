import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column, Row } from "@/style/ui/Flex";
import { createVar, style } from "@vanilla-extract/css";

export const containerColor = createVar();
export const gameTypeColor = createVar();
export const teamContainerColor = createVar();
export const detailGameInfoOpenButtonColor = createVar();

export const Container = style(
  Row({
    width: "100%",
    padding: "2rem 6rem 2rem 2rem",
    position: "relative",

    boxSizing: "border-box",
    borderRadius: "0.5rem",

    justifyContent: "space-between",
    backgroundColor: containerColor,
    gap: "3rem",

    boxShadow: `0 0 1rem ${containerColor}`,
  }),
);

export const GameUserInfoContainer = style({
  width: "80%",
  display: "grid",
  position: "relative",

  gridTemplateColumns: "1fr 3fr 1fr",
  gridTemplateRows: "auto",

  columnGap: "3rem",
  rowGap: "2rem",
});

export const GameInfoTextSection = style(
  Column({
    height: "100%",

    alignItems: "flex-start",
    justifyContent: "flex-",
    gap: "0.4rem",
  }),
);

export const GameTypeText = style({
  ...font["lg"],
  color: gameTypeColor,
});

export const KillRateText = style({
  ...font["md"],
  color: theme.secondary[500],
});

export const GameInfoText = style({
  ...font["md"],
  color: theme.gray[800],
});

export const GameChampionInfoSection = style(
  Row({
    justifyContent: "flex-start",
    gap: "5%",
  }),
);

export const ChampionKillSection = style(
  Column({
    gap: "0.4rem",
  }),
);

export const TeamUserInfoContainer = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
  gridAutoFlow: "column",

  gap: "0.6rem",
  backgroundColor: teamContainerColor,
  padding: "0.6rem",
  borderRadius: "0.5rem",
});

export const TeamUserInfoSection = style(
  Row({
    gap: "0.6rem",
  }),
);

export const TeamUserInfoIcon = style({
  width: "2rem",
  height: "2rem",

  borderRadius: "0.2rem",
  backgroundColor: theme.gray[900],
  position: "relative",

  overflow: "hidden",
});

export const TeamUserNameText = style({
  ...font["sm"],
  width: "5rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  wordBreak: "break-all",
  color: theme.gray[800],
});

export const CurrentUserNameText = style({
  ...font["sm"],
  fontWeight: "600",
  width: "5rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  wordBreak: "break-all",
});

export const DetailGameInfoOpenButton = style({
  height: "100%",
  display: "flex",

  position: "absolute",
  right: 0,
  top: 0,

  padding: "1rem",
  borderRadius: "0 0.5rem 0.5rem 0",
  boxSizing: "border-box",
  alignItems: "flex-end",

  backgroundColor: detailGameInfoOpenButtonColor,
  cursor: "pointer",

  transition: "ease-out 0.1s",

  ":hover": {
    opacity: 0.6,
  },

  ":active": {
    opacity: 0.4,
    transition: "ease-out 0.05s",
  },
});

import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column, Row } from "@/style/ui/Flex";
import { createVar, style } from "@vanilla-extract/css";

export const ContainerColor = createVar();
export const WinRateColor = createVar();

export const Container = style({
  width: "80%",
  display: "grid",
  gridTemplateColumns: "1fr 3fr 2fr 3fr 1fr",

  textAlign: "center",

  padding: "1rem 0",
  boxSizing: "border-box",

  borderRadius: "0.5rem",
  backgroundColor: ContainerColor,

  transition: "0.1s ease-out",

  ":hover": {
    transform: "scale(1.01)",
  },
});

export const RankText = style({
  ...font["xl"],
  textAlign: "center",
  margin: "auto",
  color: theme.gray[800],
});

export const PlayerProfileInfoSection = style(
  Row({
    gap: "1rem",
    padding: "0 2rem",
    boxSizing: "border-box",
  }),
);

export const PlayerProfileImg = style({
  display: "flex",
  width: "3.5rem",
  height: "3.5rem",
  flexShrink: 0,

  borderRadius: "999rem",
  backgroundColor: theme.gray[800],
  position: "relative",
  overflow: "hidden",
});

export const PlayerNameInfoSection = style(
  Column({
    width: "100%",
    alignItems: "flex-start",
  }),
);

export const PlayernameText = style({
  ...font["lg"],
  color: theme.gray[800],
});

export const UsernameText = style({
  ...font["sm"],
  color: theme.gray[700],
});

export const TierText = style({
  ...font["lg"],
  color: theme.gray[800],
  margin: "auto",
});

export const MostChampionSection = style(
  Row({
    gap: "1rem",
  }),
);

export const ChampionImg = style({
  width: "4rem",
  height: "4rem",

  borderRadius: "999rem",
  position: "relative",
  overflow: "hidden",
});

export const WinRateText = style({
  ...font["lg"],
  margin: "auto",
  color: WinRateColor,
});

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

  boxShadow: `0 0 0.5rem ${theme.primary[200]}`,
  borderRadius: "0.5rem",
  backgroundColor: ContainerColor,
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
  }),
);

export const PlayerProfileImg = style({
  width: "3rem",
  height: "3rem",

  borderRadius: "999rem",
  backgroundColor: theme.gray[800],
});

export const PlayerNameInfoSection = style(
  Column({
    alignItems: "flex-start",
  }),
);

export const PlayernameText = style({
  ...font["lg"],
  color: theme.gray[800],
});

export const UsernameText = style({
  ...font["sm"],
  color: theme.gray[500],
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
  backgroundColor: theme.gray[800],
});

export const WinRateText = style({
  ...font["lg"],
  margin: "auto",
  color: WinRateColor,
});

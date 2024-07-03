import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column, Row } from "@/style/ui/Flex";
import { createVar, style } from "@vanilla-extract/css";

export const KDAColor = createVar();
export const WinRateColor = createVar();

export const Container = style(
  Row({
    width: "100%",

    justifyContent: "space-between",
  }),
);

export const ChampionInfoSection = style(
  Row({
    gap: "1rem",
  }),
);

export const championImg = style({
  width: "2.4rem",
  height: "2.4rem",

  backgroundColor: theme.gray[200],
  borderRadius: "999rem",
});

export const ChampionDetailInfoSection = style(
  Column({
    alignItems: "flex-start",
    gap: "0.1rem",
  }),
);

export const championText = style({
  ...font["md"],
  color: theme.gray[800],
});

export const playedGameText = style({
  ...font["sm"],
  color: theme.gray[500],
});

export const WinRateText = style({
  ...font["md"],
  color: WinRateColor,
});

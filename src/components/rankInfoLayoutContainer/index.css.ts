import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column, Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Column({
    width: "30rem",
    position: "relative",

    justifyContent: "flex-start",
    alignItems: "flex-start",

    padding: "1rem",
    boxSizing: "border-box",
    backgroundColor: theme.base.white,

    borderRadius: "0.5rem",
    boxShadow: `0 0 0.8rem ${theme.gray[200]}`,
  }),
);

export const RankTypeText = style({
  ...font["rg"],
  color: theme.gray[800],
  backgroundColor: theme.gray[100],
  borderRadius: "0.2rem",
});

export const RankDetailInfoSection = style(
  Row({
    width: "100%",
    padding: "1.6rem",
    gap: "2rem",

    justifyContent: "flex-start",
    alignItems: "flex-start",
  }),
);

export const RankIcon = style({
  width: "7rem",
  height: "7rem",

  borderRadius: "0.5rem",
  backgroundColor: theme.gray[100],
});

export const RankTextBox = style(
  Column({
    alignItems: "flex-start",
    gap: "0.4rem",
  }),
);

export const RankText = style({
  ...font["xl"],
  backgroundColor: theme.gray[100],
  padding: "0.1rem",
  borderRadius: "0.2rem",
});

export const RankPointText = style({
  ...font["md"],
  backgroundColor: theme.gray[100],
  padding: "0.1rem",
  borderRadius: "0.2rem",
});

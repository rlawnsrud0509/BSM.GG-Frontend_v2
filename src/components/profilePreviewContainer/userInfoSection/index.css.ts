import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column, Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Column({
    height: "100px",

    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",

    gap: "0.4rem",
  }),
);

export const UserNameSection = style(
  Row({
    gap: "0.8rem",

    alignItems: "flex-start",
  }),
);

export const UserNameText = style({ ...font["3xl"], color: theme.gray[800] });

export const UserTagText = style({ ...font["xl"], color: theme.gray[400] });

export const UserDetailInfoSection = style(
  Row({
    gap: "1rem",
  }),
);

export const UserLevelText = style({
  ...font["rg"],
  color: theme.gray[500],
});

export const UserRankingText = style({
  ...font["md"],
  color: theme.primary[400],
});

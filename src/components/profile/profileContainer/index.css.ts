import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Button } from "@/style/ui/Button";
import { Column, Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Row({
    width: "100%",

    position: "relative",

    gap: "4.8rem",
    justifyContent: "flex-start ",
    padding: "3.6rem",

    boxSizing: "border-box",
    borderRadius: "0.5rem",
    boxShadow: `0 0 0.8rem ${theme.gray[200]}`,
  }),
);

export const ProfileImgSection = style({
  position: "relative",
});

export const ProfileImg = style({
  width: "15rem",
  height: "15rem",

  borderRadius: "1rem",
  backgroundColor: theme.gray[200],
  position: "relative",

  overflow: "hidden",
});

export const LevelTextBox = style({
  position: "absolute",
  bottom: "0%",
  left: "50%",
  transform: "translate(-50%, 50%)",

  ...font["md"],
  padding: "0.5rem",
  borderRadius: "999rem",

  color: theme.base.white,
  backgroundColor: theme.gray[800],
});

export const userProfileSection = style(
  Column({
    height: "100%",
    position: "relative",

    alignItems: "flex-start",
  }),
);

export const UserRecordReloadSection = style(
  Row({
    gap: "1rem",
    alignItems: "flex-end",
  }),
);

export const UserRecordReloadButton = style(Button({}));

export const UserRecordReloadText = style({
  ...font["sm"],
  color: theme.gray[400],
});

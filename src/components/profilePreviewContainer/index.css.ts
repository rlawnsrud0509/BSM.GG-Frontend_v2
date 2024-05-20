import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column, Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style({
  width: "100%",
  display: "flex",

  position: "relative",

  gap: "4.8rem",
  justifyContent: "flex-start ",
  padding: "3.6rem",

  boxSizing: "border-box",
  borderRadius: "0.5rem",
  boxShadow: `0 0 0.8rem ${theme.gray[200]}`,

  transition: "0.1s ease-out",

  ":hover": {
    transform: "scale(1.01)",
  },
});

export const ProfileImgSection = style({
  position: "relative",
  width: "fit-content",
  height: "fit-content",
});

export const ProfileImg = style({
  width: "15rem",
  height: "15rem",

  borderRadius: "1rem",
  backgroundColor: theme.gray[200],
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

export const UserTierInfoSection = style(
  Row({
    gap: "1rem",
    alignItems: "flex-end",
  }),
);

export const UserTierText = style({
  ...font["xl"],
  color: theme.gray[800],
  margin: "auto",
});

export const UserTierImg = style({
  width: "4rem",
  height: "4rem",

  borderRadius: "999rem",
  backgroundColor: theme.gray[800],
});

import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Conatiner = style(
  Column({
    width: "85rem",
    position: "relative",

    justifyContent: "flex-start",
    alignItems: "flex-start",

    gap: "3rem",
    boxSizing: "border-box",
    backgroundColor: theme.base.white,

    borderRadius: "0.5rem",

    marginTop: "10rem",
  }),
);

export const registeredText = style({
  ...font["xl"],
  color: theme.gray[800],
});

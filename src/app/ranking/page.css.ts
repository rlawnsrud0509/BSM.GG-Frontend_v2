import { font } from "@/style/base/font";
import { Column } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Column({
    width: "100%",
    position: "relative",

    justifyContent: "flex-start",
    padding: "16rem 0",
    boxSizing: "border-box",

    overflowY: "auto",
    gap: "0.6rem",
  }),
);

export const PageText = style({
  width: "85%",
  marginBottom: "3rem",
  ...font["3xl"],
});

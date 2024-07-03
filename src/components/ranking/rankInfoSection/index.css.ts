import { Column } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Column({
    width: "85%",
    maxWidth: "160rem",
    position: "relative",

    justifyContent: "flex-start",
    boxSizing: "border-box",

    gap: "0.6rem",
  }),
);

export const ObserverContainer = style({
  width: "100%",
  height: "10rem",
  position: "relative",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

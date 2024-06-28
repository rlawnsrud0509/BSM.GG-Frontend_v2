import { Column } from "@/style/ui/Fl";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Column({
    width: "100%",
    maxWidth: "160rem",
    position: "relative",

    justifyContent: "flex-start",
    boxSizing: "border-box",

    gap: "0.6rem",
  }),
);

export const ObserverContainer = style({
  width: "100%",
  opacity: "0",
  marginTop: "5rem",
  height: "1px",
});

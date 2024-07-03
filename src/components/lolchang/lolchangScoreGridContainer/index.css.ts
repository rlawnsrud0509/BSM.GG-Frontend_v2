import { style } from "@vanilla-extract/css";

export const Container = style({
  display: "grid",

  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  placeItems: "center",
  gridColumn: "2",
  gridRow: "1/3",

  gap: "1rem",
  margin: 0,
});

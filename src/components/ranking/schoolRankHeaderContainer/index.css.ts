import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { style } from "@vanilla-extract/css";

export const Container = style({
  width: "80%",
  display: "grid",
  gridTemplateColumns: "1fr 3fr 2fr 3fr 1fr",

  textAlign: "center",

  padding: "2rem 0",
  boxSizing: "border-box",
  marginBottom: "1.6rem",

  boxShadow: `0 0 0.8rem ${theme.gray[200]}`,
  borderRadius: "0.5rem",
});

export const TextBox = style({
  ...font["lg"],
});

import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Row } from "@/style/ui/Fl";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Row({
    width: "100%",
    padding: "3.6rem",

    boxSizing: "border-box",
    borderRadius: "0.5rem",
    boxShadow: `0 0 0.8rem ${theme.gray[200]}`,

    ...font["xl"],
    color: theme.gray[500],
  }),
);

export const LinkText = style({
  color: theme.primary[400],

  ":hover": { textDecoration: "underline" },
});

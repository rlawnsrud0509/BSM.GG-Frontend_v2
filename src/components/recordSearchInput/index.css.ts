import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { styledRow } from "@/style/ui/flex";
import { style } from "@vanilla-extract/css";

export const Container = style(styledRow({}));

export const InputSection = style({
  position: "relative",
});

export const SearchInput = style({
  width: "100rem",

  padding: "2.8rem",
  border: `0.3rem solid ${theme.primary[300]}`,
  borderRadius: "999rem",

  transition: "ease-out 0.2s",

  ":focus": {
    border: `0.3rem solid ${theme.primary[500]}`,
    transform: "scale(1.01)",
  },

  "::placeholder": {
    color: theme.gray[400],
  },

  ...font.xl,
});

export const SearchIconBox = style({
  position: "absolute",
  top: "50%",
  right: "1.5%",

  borderRadius: "2rem",

  padding: "2.4rem",
  cursor: "pointer",
  transform: "translateY(-50%)",
  transition: "ease-out 0.2s",

  ":hover": {
    transform: "scale(1.2) translateY(-40%)",
  },
});

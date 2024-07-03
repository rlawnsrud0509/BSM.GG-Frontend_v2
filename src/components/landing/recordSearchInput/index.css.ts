import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(Row({}));

export const InputSection = style({
  position: "relative",
});

export const SearchInput = style({
  width: "80rem",

  padding: "2.4rem",
  boxShadow: `0 0 0 0.3rem ${theme.primary[300]}`,
  borderRadius: "999rem",

  transition: "ease-out 0.2s",

  ":focus": {
    boxShadow: `0 0 0 0.4rem ${theme.primary[400]}`,
    transform: "scaleY(1.02) scaleX(1.0075)",
  },

  "::placeholder": {
    color: theme.gray[400],
  },

  ...font.lg,
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
    transform: "scale(1.1) translateY(-45%)",
  },
});

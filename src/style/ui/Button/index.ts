import { font } from "@/style/base/font";
import { theme } from "@/style/theme/index.css";
import { CSSProperties, ComplexStyleRule } from "@vanilla-extract/css";

export const Button = ({ ...restStyle }: CSSProperties) => {
  return {
    ...font.lg,

    color: theme.base.white,
    backgroundColor: theme.primary[500],

    borderRadius: "0.5rem",
    padding: "1.4rem",
    bordar: "none",

    cursor: "pointer",
    transition: "ease-out 0.1s",
    ...restStyle,

    ":hover": {
      backgroundColor: theme.primary[400],
    },
  } as ComplexStyleRule;
};

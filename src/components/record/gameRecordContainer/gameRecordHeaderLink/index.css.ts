import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { createVar, style } from "@vanilla-extract/css";

export const ChangeGametypeButtonColor = createVar();
export const ChangeGametypeButtonBackground = createVar();

export const ChangeGametypeButton = style({
  ...font.rg,

  color: ChangeGametypeButtonColor,
  backgroundColor: ChangeGametypeButtonBackground,
  padding: "1.2rem 1.6rem",
  borderRadius: "0.5rem",

  cursor: "pointer",
  transition: "ease-out 0.1s",

  ":hover": {
    color: theme.gray[800],
  },

  ":active": {
    backgroundColor: theme.gray[100],
    color: theme.gray[800],
  },
});

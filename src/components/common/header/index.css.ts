import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { styledRow } from "@/style/ui/flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  styledRow({
    width: "100%",

    position: "fixed",
    top: 0,
    left: 0,

    backgroundColor: theme.base.white,
    boxShadow: `0.4rem 0 3rem ${theme.gray[300]}`,

    padding: "1.2rem 2.4rem",
    justifyContent: "space-between",
    boxSizing: "border-box",
  }),
);

export const HeaderLinkSection = style(
  styledRow({
    gap: "10rem",
  }),
);

export const LinkBox = style(styledRow({ gap: "5rem" }));

export const Link = style({
  ...font.lg,

  color: theme.gray[500],
  padding: "1.6rem 1.6rem",
  borderRadius: "0.5rem",

  cursor: "pointer",
  transition: "ease-out 0.1s",

  ":hover": {
    backgroundColor: theme.gray[50],
  },

  ":active": {
    backgroundColor: theme.gray[100],
    color: theme.gray[800],
  },
});

export const RegistAccountButton = style({
  ...font.lg,

  color: theme.base.white,
  backgroundColor: theme.primary[500],

  borderRadius: "0.5rem",
  padding: "1.4rem",

  cursor: "pointer",
  transition: "ease-out 0.1s",

  ":hover": {
    backgroundColor: theme.primary[400],
  },
});

import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { keyframes, style } from "@vanilla-extract/css";

const ShowButtonAnimation = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

export const Container = style({
  ...font["xl"],

  width: "100vw",
  height: "16rem",

  position: "fixed",
  bottom: "-4rem",
  left: "0",

  padding: "2rem 0",
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  transition: "0.2s ease-in-out",
  animation: `${ShowButtonAnimation} 0.5s 3s ease-in-out both`,
  zIndex: 10,

  backgroundColor: theme.base.white,
  boxShadow: `0.4rem 0 1rem ${theme.gray[200]}`,
  cursor: "pointer",

  ":hover": {
    bottom: "0",
  },
});

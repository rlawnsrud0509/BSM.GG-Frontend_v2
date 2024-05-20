import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column } from "@/style/ui/Flex";
import { createVar, keyframes, style } from "@vanilla-extract/css";

export const ModalAnimation = createVar();

export const OpenModalAnimation = keyframes({
  "0%": {
    transform: "translateY(30%) scale(0.8)",
    opacity: 0.2,
  },
  "100%": {
    transform: "translateY(0%) scale(1)",
    opacity: 1,
  },
});

export const CloseModalAniamtion = keyframes({
  "0%": {
    transform: "translateY(0%) scale(1)",
    opacity: 1,
  },
  "100%": {
    transform: "translateY(30%) scale(0.8)",
    opacity: 0.2,
  },
});

export const Container = style(
  Column({
    padding: "4rem 3rem",
    gap: "4rem",

    boxSizing: "border-box",
    borderRadius: "0.5rem",
    boxShadow: `0 0 1rem ${theme.gray[200]}`,

    backgroundColor: theme.base.white,
    animation: ModalAnimation,
  }),
);

export const MainText = style({
  textAlign: "center",
  lineHeight: "190%",
  ...font["xl"],
});

export const AcceptButton = style({
  ...font["lg"],

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.6rem",

  padding: "1.2rem 1.6rem",
  borderRadius: "0.5rem",

  color: theme.base.white,
  backgroundColor: theme.primary[500],
  cursor: "pointer",
  transition: "ease-out 0.1s",

  ":hover": {
    backgroundColor: theme.primary[400],
  },
});

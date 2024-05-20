import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column, Row } from "@/style/ui/Flex";
import { createVar, style } from "@vanilla-extract/css";

export const InputColor = createVar();

export const Container = style(
  Column({
    width: "80%",
    maxWidth: "160rem",
    minWidth: "130rem",

    position: "relative",
    justifyContent: "flex-start",
    padding: "16rem 0",
  }),
);

export const MainText = style({
  width: "100%",
  ...font["3xl"],
});

export const InputButtonSection = style(
  Column({
    flex: "1 1 0",
    gap: "2rem",
  }),
);

export const InputSection = style(
  Row({
    gap: "2rem",
  }),
);

export const InputDiv = style(
  Column({
    gap: "1rem",
    alignItems: "flex-start",
    position: "relative",
  }),
);

export const errorMessage = style({
  position: "absolute",
  top: "-40%",
  left: "0",
  color: theme.secondary[500],
  ...font["md"],
});

export const NameInput = style({
  width: "60%",

  padding: "2rem",
  boxShadow: InputColor,
  borderRadius: "0.5rem",
  ...font["lg"],

  transition: "ease-out 0.2s",

  ":focus": {
    boxShadow: `0 0 0 0.3rem ${theme.primary[400]}`,
    transform: "scale(1.005)",
  },

  "::placeholder": {
    color: theme.gray[400],
  },
});

export const TagInput = style({
  width: "20%",

  padding: "2rem",
  boxShadow: InputColor,
  borderRadius: "0.5rem",
  ...font["lg"],

  transition: "ease-out 0.2s",

  ":focus": {
    boxShadow: `0 0 0 0.3rem ${theme.primary[400]}`,
    transform: "scale(1.005)",
  },

  "::placeholder": {
    color: theme.gray[400],
  },
});

export const SubmitButton = style({
  width: "100%",
  padding: "2rem",
  borderRadius: "0.5rem",

  backgroundColor: theme.primary[500],
  color: theme.base.white,
  ...font["xl"],

  cursor: "pointer",
  transition: "ease-out 0.1s",

  ":hover": {
    backgroundColor: theme.primary[400],
  },
});

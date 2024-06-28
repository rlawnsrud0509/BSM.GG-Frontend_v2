import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Row } from "@/style/ui/Fl";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Row({
    width: "100%",
    height: "100%",

    position: "relative",

    borderRadius: "0.5rem",
    backgroundColor: theme.gray[50],
  }),
);

export const totalText = style({
  position: "absolute",
  top: "5%",
  left: "5%",

  ...font["rg"],
  backgroundColor: theme.gray[100],
  borderRadius: "0.2rem",
});

export const MainTextSection = style(
  Row({
    gap: "0.4rem",
    alignItems: "flex-end",
  }),
);

export const MainText = style({
  ...font["3xl"],
  backgroundColor: theme.gray[100],
  borderRadius: "0.2rem",
});

export const MainUnitText = style({
  ...font["rg"],
  backgroundColor: theme.gray[100],
  borderRadius: "0.2rem",
});

export const resultText = style({
  position: "absolute",
  bottom: "5%",
  right: "5%",

  ...font["rg"],
  backgroundColor: theme.gray[100],
  borderRadius: "0.2rem",
});

import { font } from "@/style/base/font";
import { Column, Row } from "@/style/ui/Fl";
import { createVar, style } from "@vanilla-extract/css";

export const ContainerColor = createVar();
export const ContainerTextColor = createVar();

export const Container = style(
  Row({
    width: "100%",
    height: "100%",

    position: "relative",

    borderRadius: "0.5rem",
    backgroundColor: ContainerColor,
    color: ContainerTextColor,
  }),
);

export const totalText = style({
  position: "absolute",
  top: "5%",
  left: "5%",

  ...font["rg"],
});

export const MainTextSection = style(
  Row({
    gap: "0.4rem",
    alignItems: "flex-end",
  }),
);

export const MainText = style({
  ...font["3xl"],
});

export const MainUnitText = style({
  ...font["rg"],
});

export const resultText = style({
  position: "absolute",
  bottom: "5%",
  right: "5%",

  ...font["rg"],
});

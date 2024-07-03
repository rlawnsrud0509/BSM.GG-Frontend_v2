import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column, Row } from "@/style/ui/Flex";
import { createVar, style } from "@vanilla-extract/css";

export const ObserverDisplay = createVar();

export const Container = style(
  Column({
    width: "100%",
    position: "relative",
    gap: "1.6rem",

    paddingBottom: "5rem",
  }),
);

export const GameRecordHeader = style(
  Row({
    width: "100%",
    justifyContent: "flex-start",
    padding: "1rem",
    gap: "1.6rem",

    boxSizing: "border-box",
    backgroundColor: theme.base.white,

    borderRadius: "0.5rem",
    boxShadow: `0 0 0.8rem ${theme.gray[200]}`,
  }),
);

export const NoRecordText = style({
  ...font["4xl"],
  marginTop: "5rem",
  color: theme.gray[400],
});

export const ObserveDiv = style({
  width: "100%",
  height: "10rem",
  position: "relative",

  display: ObserverDisplay,
  justifyContent: "center",
  alignItems: "center",

  marginTop: "5rem",
});

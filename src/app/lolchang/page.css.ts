import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column, Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Column({
    width: "100%",
    minWidth: "130rem",
    maxWidth: "150rem",
    position: "relative",

    justifyContent: "flex-start",
    padding: "16rem 0 0 0",
    boxSizing: "border-box",

    overflowY: "auto",
  }),
);

export const HeaderTextSection = style(
  Row({
    width: "80%",
    position: "relative",

    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginBottom: "3rem",
    gap: "4rem",
  }),
);

export const PageText = style({
  width: "50%",
  textAlign: "start",
  ...font["3xl"],
});

export const LolChangTextSection = style(
  Row({
    width: "50%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    textAlign: "start",
  }),
);

export const LolChangText = style({
  ...font["xl"],
  color: theme.gray[800],
});

export const ReloadButton = style(
  Row({
    ...font["rg"],
    cursor: "pointer",
    gap: "0.4rem",
    backgroundColor: theme.base.white,
    color: theme.gray[400],
  }),
);

export const LolchangGridContainer = style({
  width: "80%",

  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",

  gap: "4rem",
  boxSizing: "border-box",
});

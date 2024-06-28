import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column, Row } from "@/style/ui/Flex";
import { createVar, style } from "@vanilla-extract/css";

export const WinBarWidth = createVar();

export const Container = style(
  Column({
    width: "100%",
    justifyContent: "flex-start",

    gap: "2rem",
    boxSizing: "border-box",
  }),
);

export const MainText = style({
  ...font["xl"],
});

export const WinrateBar = style(
  Row({
    width: "100%",
    position: "relative",
    marginBottom: "8rem",
  }),
);

export const WinBar = style({
  width: WinBarWidth,

  padding: "0.75rem",
  boxSizing: "border-box",
  borderRadius: "0.5rem 0 0 0.5rem",

  backgroundColor: theme.primary[400],
  color: theme.base.white,
  ...font["rg"],
});

export const DefeatBar = style({
  flex: "1 1 0",

  padding: "0.75rem",
  boxSizing: "border-box",
  borderRadius: "0 0.5rem 0.5rem 0",

  textAlign: "end",
  backgroundColor: theme.secondary[400],
  color: theme.base.white,
  ...font["rg"],
});

export const JudgeText = style({
  width: "100%",
  ...font["xl"],
});

export const OneSentenceJudge = style({
  width: "100%",
  padding: "1.6rem 1.2rem",
  boxSizing: "border-box",

  borderRadius: "0.5rem",

  textAlign: "center",
  backgroundColor: theme.secondary[200],
  ...font["lg"],
});

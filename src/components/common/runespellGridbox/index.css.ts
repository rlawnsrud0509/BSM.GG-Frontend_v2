import { theme } from "@/style/base/theme/index.css";
import { createVar, style } from "@vanilla-extract/css";

export const containerSize = createVar();

export const Container = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",

  alignItems: "flex-end",

  gap: "0.2rem",
});

export const SummonerSpellImg = style({
  width: containerSize,
  height: containerSize,

  borderRadius: "0.5rem",
  backgroundColor: theme.gray[200],
});

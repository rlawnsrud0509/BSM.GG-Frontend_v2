import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Row } from "@/style/ui/Flex";
import { createVar, style } from "@vanilla-extract/css";

export const containerSize = createVar();
export const positionValue = createVar();

export const Container = style({
  width: containerSize,
  height: containerSize,
  position: "relative",

  display: "flex",
  flexShrink: 0,

  borderRadius: "999rem",
  backgroundColor: theme.gray[300],
});

export const ChampionLevel = style(
  Row({
    ...font["tn"],
    padding: "0.2rem 0.3rem",

    position: "absolute",
    bottom: positionValue,
    right: positionValue,

    borderRadius: "999rem",
    flexShrink: 0,

    backgroundColor: theme.gray[800],
    color: theme.base.white,
  }),
);

export const ChampionImage = style({
  borderRadius: "999rem",
});

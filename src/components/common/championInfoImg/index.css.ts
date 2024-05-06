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

  backgroundColor: theme.gray[300],
  borderRadius: "999rem",
});

export const ChampionLevel = style(
  Row({
    ...font["tn"],
    padding: "0.2rem",

    position: "absolute",
    bottom: positionValue,
    right: positionValue,

    borderRadius: "999rem",

    backgroundColor: theme.gray[800],
    color: theme.base.white,
  }),
);

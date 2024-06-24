import { theme } from "@/style/base/theme/index.css";
import { Row } from "@/style/ui/Flex";
import { createVar, style } from "@vanilla-extract/css";

export const Container = style(
  Row({
    justifyContent: "flex-start",
    gap: "0.2rem",
  }),
);

export const ItemImg = style({
  width: "3rem",
  height: "3rem",

  position: "relative",
  overflow: "hidden",

  borderRadius: "0.5rem",
  backgroundColor: theme.gray[900],
});

export const EmptyItemImg = style({
  width: "3rem",
  height: "3rem",

  position: "relative",
  overflow: "hidden",

  borderRadius: "0.5rem",
  backgroundColor: theme.gray[900],
  opacity: 0.2,
});

export const WardImg = style({
  width: "3rem",
  height: "3rem",

  position: "relative",
  overflow: "hidden",

  borderRadius: "0.5rem",
  backgroundColor: theme.gray[900],

  marginLeft: "0.5rem",
});

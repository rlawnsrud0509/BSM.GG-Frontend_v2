import { CSSProperties, ComplexStyleRule, style } from "@vanilla-extract/css";

export const Row = ({
  justifyContent = "center",
  alignItems = "center",
  gap = 0,
  ...restStyle
}: CSSProperties) => {
  return {
    display: "flex",
    justifyContent,
    alignItems,
    gap,
    ...restStyle,
  } as ComplexStyleRule;
};

export const Column = ({
  justifyContent = "center",
  alignItems = "center",
  gap = 0,
  ...restStyle
}: CSSProperties) => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent,
    alignItems,
    gap,
    ...restStyle,
  } as ComplexStyleRule;
};

import { CSSProperties, ComplexStyleRule } from "@vanilla-extract/css";

export const styledRow = ({
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

export const styledColumn = ({
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

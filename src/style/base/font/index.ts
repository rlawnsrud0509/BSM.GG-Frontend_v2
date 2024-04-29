import { ComplexStyleRule } from "@vanilla-extract/css";

const fontGenerator = (size: number, lineHeight: number) => {
  return {
    fontFamily: "Pretendard",
    fontSize: `${size}rem`,
    lineHeight: `${lineHeight}rem`,
  } as ComplexStyleRule;
};

export const font = {
  "4xl": fontGenerator(4, 4.2),
  "3xl": fontGenerator(3.2, 3.4),
  "2xl": fontGenerator(2.4, 2.6),
  xl: fontGenerator(2, 2.2),

  lg: fontGenerator(1.8, 2),
  rg: fontGenerator(1.6, 1.8),
  md: fontGenerator(1.2, 1.4),
  sm: fontGenerator(1, 1.2),
  tn: fontGenerator(0.8, 1),
};

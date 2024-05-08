import { CSSProperties } from "@vanilla-extract/css";

const fontGenerator = (size: number, lineHeight: number) => {
  return {
    fontFamily: "Pretendard",
    fontSize: `${size}rem`,
    lineHeight: `${lineHeight}rem`,
  } as CSSProperties;
};

export const font = {
  "5xl": fontGenerator(3.6, 3.8),
  "4xl": fontGenerator(3.2, 3.4),
  "3xl": fontGenerator(2.8, 3.0),
  "2xl": fontGenerator(2.4, 2.6),
  xl: fontGenerator(2, 2.2),

  lg: fontGenerator(1.6, 2),
  rg: fontGenerator(1.4, 1.8),
  md: fontGenerator(1.2, 1.4),
  sm: fontGenerator(1, 1.2),
  tn: fontGenerator(0.8, 1),
};

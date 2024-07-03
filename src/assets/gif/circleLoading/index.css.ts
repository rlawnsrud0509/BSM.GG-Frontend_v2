import { createVar, style } from "@vanilla-extract/css";

export const Gifwidth = createVar();
export const Gifheight = createVar();
export const Gifdegree = createVar();

export const Container = style({
  width: Gifwidth,
  height: Gifheight,
  transform: `rotate(${Gifdegree})`,

  position: "relative",
});

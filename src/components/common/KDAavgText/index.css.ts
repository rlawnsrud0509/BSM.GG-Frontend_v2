import { font } from "@/style/base/font";
import { Row } from "@/style/ui/Fl";
import { createVar, style } from "@vanilla-extract/css";

export const ContainerFont = createVar();
export const KDAavgTextColor = createVar();

export const BaseContainer = style(
  Row({
    ...font["md"],
  }),
);

export const SmallContainer = style(
  Row({
    ...font["sm"],
  }),
);

export const KDAavgText = style({
  color: KDAavgTextColor,
});

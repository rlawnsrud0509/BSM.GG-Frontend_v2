import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Row } from "@/style/ui/Flex";
import { createVar, style } from "@vanilla-extract/css";

export const ContainerFont = createVar();
export const KDAavgTextColor = createVar();

export const Container = style(
  Row({
    ...font["md"],
  }),
);

export const KDAavgText = style({
  color: KDAavgTextColor,
});

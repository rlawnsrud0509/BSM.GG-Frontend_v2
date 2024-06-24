import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const BaseContainer = style(
  Row({
    ...font["2lg"],
  }),
);

export const SmallContainer = style(
  Row({
    ...font["md"],
  }),
);

export const DeathText = style({
  color: theme.secondary[600],
});

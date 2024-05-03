import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Row({
    ...font["lg"],
  }),
);

export const DeathText = style({
  color: theme.secondary[500],
});

import { theme } from "@/style/base/theme/index.css";
import { Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Row({
    justifyContent: "flex-start",
    gap: "0.2rem",
  }),
);

export const ItemImg = style({
  width: "3rem",
  height: "3rem",

  borderRadius: "0.5rem",
  backgroundColor: theme.gray[200],
});

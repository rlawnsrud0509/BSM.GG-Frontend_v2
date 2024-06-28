import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Row } from "@/style/ui/Fl";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Row({
    width: "80%",
    height: "100%",
  }),
);

export const RedirectText = style({
  ...font["3xl"],
  color: theme.gray[800],
});

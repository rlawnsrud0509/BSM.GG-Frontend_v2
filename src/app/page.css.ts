import { styledColumn } from "@/style/ui/flex";
import { style } from "@vanilla-extract/css";

export const Conatiner = style(
  styledColumn({
    width: "100%",
    height: "100%",
    gap: "5rem",
  }),
);

import { Column } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Conatiner = style(
  Column({
    width: "100%",
    height: "100%",

    justifyContent: "flex-start",
    gap: "5rem",
    paddingTop: "26rem",
  }),
);

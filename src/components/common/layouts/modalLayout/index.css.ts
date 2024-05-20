import { Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Row({
    width: "100%",
    height: "100%",

    position: "absolute",
    left: "0",
    top: "0",

    backdropFilter: "blur(0.1rem)",
    zIndex: "10000",
  }),
);

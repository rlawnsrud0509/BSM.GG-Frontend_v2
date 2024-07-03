import { Column } from "@/style/ui/Flex";
import { keyframes, style } from "@vanilla-extract/css";

const ShowLogoAnimation = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(-10%)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0%)",
  },
});

export const Conatiner = style(
  Column({
    width: "100%",
    height: "fit-content",
    position: "relative",

    justifyContent: "flex-start",
    gap: "7rem",
    padding: "27rem 0 12rem 0",
  }),
);

export const FlexshrinkCoverBox = style({
  opacity: 0,
  flexShrink: "1",
  animation: `${ShowLogoAnimation} 0.5s 0.5s ease-in-out forwards`,
});

export const InputAnimationBox = style({
  opacity: 0,
  animation: `${ShowLogoAnimation} 0.5s 1s ease-in-out forwards`,
});

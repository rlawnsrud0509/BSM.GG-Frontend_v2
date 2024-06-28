import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column } from "@/style/ui/Fl";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Column({
    width: "30rem",
    position: "relative",

    justifyContent: "flex-start",
    alignItems: "flex-start",

    padding: "1rem",
    gap: "1rem",
    boxSizing: "border-box",
    backgroundColor: theme.base.white,

    borderRadius: "0.5rem",
    boxShadow: `0 0 0.8rem ${theme.gray[200]}`,
  }),
);

export const PlayedListText = style({
  ...font["rg"],
  color: theme.gray[800],
});

export const PlayedChampionListSection = style(
  Column({
    width: "100%",
    padding: "1rem",
    gap: "1rem",

    boxSizing: "border-box",
    backgroundColor: theme.base.white,
  }),
);

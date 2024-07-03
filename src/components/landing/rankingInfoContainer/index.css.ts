import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column, Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Conatiner = style(
  Column({
    width: "85rem",
    position: "relative",

    justifyContent: "flex-start",
    alignItems: "flex-start",

    gap: "0.5rem",
    boxSizing: "border-box",
    backgroundColor: theme.base.white,

    borderRadius: "0.5rem",
  }),
);

export const ContainerInfoSection = style(
  Row({
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "2rem",
  }),
);

export const registeredText = style({
  ...font["xl"],
  color: theme.gray[800],
});

export const DirectButton = style({
  ...font["lg"],
  color: theme.base.white,

  padding: "1.2rem 1.6rem",
  borderRadius: "0.5rem",
  backgroundColor: theme.primary[500],

  cursor: "pointer",
  transition: "0.2s ease-in-out",

  ":hover": {
    backgroundColor: theme.primary[400],
  },
});

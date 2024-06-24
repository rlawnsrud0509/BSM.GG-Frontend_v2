import { Column, Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Column({
    width: "80%",
    maxWidth: "160rem",
    position: "relative",

    padding: "12rem 0",
    gap: "3.2rem",
    justifyContent: "flex-start",
    boxSizing: "border-box",
  }),
);

export const UserRecordDetailContainer = style(
  Row({
    width: "100%",
    gap: "2rem",

    alignItems: "flex-start",
    paddingBottom: "10rem",
  }),
);

export const UserRankInfoSection = style(
  Column({
    gap: "2rem",
  }),
);

export const UserGameInfoSection = style(
  Column({
    position: "relative",
    flex: "1 1 0",
  }),
);

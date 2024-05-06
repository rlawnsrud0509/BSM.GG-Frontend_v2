import { Column, Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Column({
    width: "100%",
    maxWidth: "170rem",
    position: "relative",

    padding: "12rem 20rem",
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

import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Column, Row } from "@/style/ui/Fl";
import { style } from "@vanilla-extract/css";

export const Container = style({
  display: "grid",
  width: "100%",

  gridTemplateColumns: "1fr 1fr 1fr 1fr 1.5fr",
  justifyContent: "center",
  alignItems: "center",

  padding: "0.6rem",
  boxSizing: "border-box",
});

export const UserDetailInfoSection = style(
  Row({
    gap: "1rem",
  }),
);

export const UserDetailInfoBox = style(
  Column({
    width: "100%",
    alignItems: "flex-start",
  }),
);

export const UsernameText = style({
  width: "10rem",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",

  ...font["md"],
  color: theme.gray[800],
});

export const UserRankInfoText = style({
  ...font["sm"],
  color: theme.gray[500],
});

export const KDAInfoSection = style(
  Column({
    gap: "0.1rem",
  }),
);

export const DamageText = style({
  ...font["md"],
  textAlign: "left",
  color: theme.secondary[500],
});

export const WardInfoSection = style(
  Row({
    justifyContent: "left",
    ...font["md"],
    gap: "0.8rem",
  }),
);

export const WardImg = style({
  width: "2rem",
  height: "2rem",

  borderRadius: "0.5rem",
  backgroundColor: theme.gray[900],
  overflow: "hidden",
  position: "relative",
});

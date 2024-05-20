import { font } from "@/style/base/font";
import { theme } from "@/style/base/theme/index.css";
import { Button } from "@/style/ui/Button";
import { Row } from "@/style/ui/Flex";
import { style } from "@vanilla-extract/css";

export const Container = style(
  Row({
    width: "100vw",

    position: "fixed",
    top: 0,
    left: 0,

    backgroundColor: theme.base.white,
    boxShadow: `0.4rem 0 1rem ${theme.gray[200]}`,

    padding: "1.2rem 2.4rem",
    justifyContent: "space-between",
    boxSizing: "border-box",

    zIndex: "1",
  }),
);

export const HeaderLinkSection = style(
  Row({
    gap: "10rem",
  }),
);

export const LinkBox = style(Row({ gap: "5rem" }));

export const RegistAccountButton = style(Button({}));

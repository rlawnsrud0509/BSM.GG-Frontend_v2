import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import PretendardVariable from "@/style/base/font/PretendardVariable.woff2";

globalStyle("html", {
  fontSize: "10px",
});

globalStyle("body", {
  margin: 0,

  width: "100vw",
  height: "100vh",

  position: "relative",
});

globalStyle("button, input", {
  outline: "none",
});

globalStyle("a", {
  textDecoration: "none",
});

globalFontFace("Pretendard", {
  src: `url(${PretendardVariable}) format('woff2')`,
});

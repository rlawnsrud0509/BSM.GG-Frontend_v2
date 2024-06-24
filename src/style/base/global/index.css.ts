import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import PretendardVariable from "@/style/base/font/PretendardVariable.woff2";

globalStyle("html", {
  fontSize: "10px",
});

globalStyle("body", {
  margin: 0,

  width: "100vw",
  height: "100vh",

  display: "flex",
  justifyContent: "center",

  position: "relative",
  whiteSpace: "nowrap",

  overflowX: "hidden",
});

globalStyle("button, input", {
  outline: "none",
  border: "none",
});

globalStyle("a", {
  textDecoration: "none",
});

// globalFontFace("Pretendard", {
//   src: `url(${PretendardVariable}) format('woff2')`,
//   fontDisplay: "swap",
// });

// globalFontFace("Pretendard_fallback", {
//   src: `local("Arial")`,
//   sizeAdjust: "normal",
//   ascentOverride: "88%",
//   descentOverride: "normal",
//   lineGapOverride: "normal",
// });

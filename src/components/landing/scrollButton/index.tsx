"use client";

import { useScroll } from "@/hooks/useScroll";
import * as S from "./index.css";
import BottomArrowGif from "@/assets/gif/bottomArrow";

const ScrollButton = () => {
  const scrollRef = useScroll(window.innerHeight / 2, { opacity: "0" });
  const handleScroll = () => {
    window.scrollTo({ top: (window.innerHeight / 3) * 2, left: 0, behavior: "smooth" });
  };

  return (
    <section className={S.Container} ref={scrollRef} onClick={handleScroll}>
      아래로 스크롤해 더 많은 내용을 확인하세요!
      <BottomArrowGif />
    </section>
  );
};

export default ScrollButton;

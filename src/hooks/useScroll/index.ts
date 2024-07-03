import { UseScrollProperties } from "@/types/hooks/useScrollProperties.type";
import { useEffect, useRef, useState } from "react";

export const useScroll = (standardHeight: number, style?: UseScrollProperties) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [lastScroll, setLastScroll] = useState(0);

  const handleScroll = () => {
    setLastScroll(window.scrollY);

    if (targetRef.current && lastScroll >= standardHeight) {
      targetRef.current.style.animationFillMode = "backwards";
      Object.keys(style as UseScrollProperties).forEach((e) => {
        if (targetRef.current && style) targetRef.current.style.setProperty(e, style[e]);
        console.log(e, style && style[e], targetRef.current?.style.opacity);
      });
    } else
      Object.keys(style as UseScrollProperties).forEach((e) => {
        if (targetRef.current && style) targetRef.current.style.setProperty(e, "none");
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return targetRef;
};

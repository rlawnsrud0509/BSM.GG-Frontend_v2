import { useEffect, useRef, useState } from "react";

export const useObserver = (threshold: number) => {
  const DOMref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      },
      { threshold: threshold },
    );

    if (DOMref.current) {
      observer.observe(DOMref.current);
    }

    return () => {
      if (DOMref.current) {
        observer.unobserve(DOMref.current);
      }
      observer.disconnect();
    };
  }, []);

  return { isIntersecting, setIsIntersecting, DOMref };
};

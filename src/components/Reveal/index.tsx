import { useEffect, useRef, useState, type ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ $visible: boolean; $delay: number }>`
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateY(${(p) => (p.$visible ? "0" : "24px")});
  transition: opacity 700ms ease, transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1);
  transition-delay: ${(p) => p.$delay}ms;
  height: 100%;
`;

type Props = { children: ReactNode; delay?: number; className?: string };

/** Fades its children in the first time they scroll into view. */
const Reveal = ({ children, delay = 0, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} $visible={visible} $delay={delay} className={className}>
      {children}
    </Wrapper>
  );
};

export default Reveal;

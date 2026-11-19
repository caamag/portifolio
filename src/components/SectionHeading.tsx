import styled from "styled-components";
import type { ReactNode } from "react";
import { theme } from "../global/theme";
import Reveal from "./Reveal";

const Wrapper = styled.div<{ $center: boolean }>`
  max-width: 680px;
  margin: ${(p) => (p.$center ? "0 auto 56px" : "0 0 56px")};
  text-align: ${(p) => (p.$center ? "center" : "left")};
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${theme.accent};
  margin-bottom: 14px;

  &::before {
    content: "";
    width: 18px;
    height: 1px;
    background: ${theme.accent};
  }
`;

const Title = styled.h2`
  font-size: clamp(30px, 4vw, 44px);
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  margin-top: 16px;
  color: ${theme.muted};
  font-size: 17px;
`;

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
};

const SectionHeading = ({ eyebrow, title, subtitle, center = false }: Props) => (
  <Reveal>
    <Wrapper $center={center}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  </Reveal>
);

export default SectionHeading;

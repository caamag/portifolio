import styled, { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

export const GobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 88px;
  }

  body {
    font-family: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
    background-color: ${theme.bg};
    background-image:
      radial-gradient(900px 600px at 85% -10%, rgba(34, 211, 238, 0.10), transparent 60%),
      radial-gradient(800px 600px at -10% 30%, rgba(129, 140, 248, 0.08), transparent 60%);
    background-repeat: no-repeat;
    color: ${theme.text};
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration: none; }
  button, input, textarea { font: inherit; color: inherit; }
  button { cursor: pointer; border: 0; background: none; }

  ::selection { background: rgba(34, 211, 238, 0.3); }

  :focus-visible {
    outline: 2px solid ${theme.accent};
    outline-offset: 3px;
    border-radius: 6px;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-iteration-count: 1 !important;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;

export const Section = styled.section`
  padding: 110px 0;

  @media (max-width: 800px) {
    padding: 80px 0;
  }
`;

export const GradientText = styled.span`
  background: ${theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const glass = css`
  background: ${theme.surface};
  border: 1px solid ${theme.border};
  border-radius: ${theme.radius};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

export const Card = styled.div`
  ${glass};
  padding: 28px;
`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 50px;
  padding: 0 26px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  white-space: nowrap;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease,
    border-color 180ms ease;

  svg {
    font-size: 18px;
    transition: transform 180ms ease;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

export const PrimaryButton = styled.a`
  ${buttonBase};
  background: ${theme.gradient};
  color: #04121a;
  box-shadow: 0 10px 30px -10px rgba(34, 211, 238, 0.6);

  &:hover {
    box-shadow: 0 16px 40px -10px rgba(34, 211, 238, 0.75);
  }
`;

export const GhostButton = styled.a`
  ${buttonBase};
  border: 1px solid ${theme.borderStrong};
  background: rgba(15, 23, 42, 0.4);
  color: ${theme.text};

  &:hover {
    border-color: ${theme.accent};
    background: rgba(34, 211, 238, 0.06);
  }
`;

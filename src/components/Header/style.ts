import styled, { css } from "styled-components";
import { theme } from "../../global/theme";

export const Header = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: background 250ms ease, border-color 250ms ease;
  border-bottom: 1px solid transparent;

  ${(p) =>
    p.$scrolled &&
    css`
      background: rgba(6, 9, 18, 0.78);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom-color: ${theme.border};
    `}
`;

export const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  height: 76px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 600px) {
    padding: 0 16px;
    height: 68px;
  }
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 500;
  margin-right: auto;

  img {
    width: 36px;
    height: 36px;
  }

  strong {
    font-weight: 700;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 4px;

  a {
    position: relative;
    padding: 8px 14px;
    font-size: 14px;
    font-weight: 500;
    color: ${theme.muted};
    border-radius: 10px;
    transition: color 150ms ease, background 150ms ease;

    &:hover {
      color: ${theme.text};
      background: rgba(148, 163, 184, 0.06);
    }

    &.active {
      color: ${theme.accent};
    }

    &.active::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -2px;
      width: 18px;
      height: 2px;
      transform: translateX(-50%);
      border-radius: 2px;
      background: ${theme.accent};
      box-shadow: 0 0 12px ${theme.accent};
    }
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

export const Cta = styled.a<{ $mobile?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 42px;
  padding: 0 18px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid rgba(34, 211, 238, 0.45);
  color: ${theme.accent};
  background: rgba(34, 211, 238, 0.06);
  transition: background 150ms ease, color 150ms ease;

  &:hover {
    background: ${theme.accent};
    color: #04121a;
  }

  ${(p) =>
    p.$mobile
      ? css`
          margin-top: 16px;
          justify-content: center;
          height: 50px;
        `
      : css`
          @media (max-width: 980px) {
            display: none;
          }
        `}
`;

export const MenuButton = styled.button`
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid ${theme.border};
  align-items: center;
  justify-content: center;
  font-size: 20px;

  @media (max-width: 980px) {
    display: inline-flex;
  }
`;

export const MobileMenu = styled.nav<{ $open: boolean }>`
  display: none;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    height: calc(100dvh - 68px);
    padding: 24px 16px;
    background: ${theme.bg};
    opacity: ${(p) => (p.$open ? 1 : 0)};
    visibility: ${(p) => (p.$open ? "visible" : "hidden")};
    transform: translateY(${(p) => (p.$open ? "0" : "-8px")});
    transition: opacity 200ms ease, transform 200ms ease, visibility 200ms;

    > a:not(:last-child) {
      padding: 16px 4px;
      font-size: 20px;
      font-weight: 600;
      border-bottom: 1px solid ${theme.border};
    }
  }
`;

import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import * as _ from "./style";
import Logo from "../../assets/logo.png";
import { whatsappWithText } from "../../data/content";

export const NAV_ITEMS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
  { id: "processo", label: "Processo" },
  { id: "contato", label: "Contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item of the section currently in view.
  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => !!el
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <_.Header $scrolled={scrolled || open}>
      <_.Inner>
        <_.Brand href="#inicio" onClick={close} aria-label="Caio Lopes — início">
          <img src={Logo} alt="" />
          <span>
            Caio <strong>Lopes</strong>
          </span>
        </_.Brand>

        <_.Nav aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </_.Nav>

        <_.Cta
          href={whatsappWithText("Olá Caio! Vim pelo seu portfólio e quero um orçamento.")}
          target="_blank"
          rel="noreferrer"
        >
          Solicitar orçamento <FiArrowUpRight />
        </_.Cta>

        <_.MenuButton
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </_.MenuButton>
      </_.Inner>

      <_.MobileMenu $open={open}>
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={close}>
            {item.label}
          </a>
        ))}
        <_.Cta
          href={whatsappWithText("Olá Caio! Vim pelo seu portfólio e quero um orçamento.")}
          target="_blank"
          rel="noreferrer"
          $mobile
          onClick={close}
        >
          Solicitar orçamento <FiArrowUpRight />
        </_.Cta>
      </_.MobileMenu>
    </_.Header>
  );
};

export default Header;

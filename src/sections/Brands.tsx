import styled from "styled-components";
import { theme } from "../global/theme";
import { Container } from "../global/styles";
import { BRANDS } from "../data/content";
import Reveal from "../components/Reveal";

const Wrapper = styled.section`
  border-top: 1px solid ${theme.border};
  border-bottom: 1px solid ${theme.border};
  background: rgba(10, 15, 28, 0.5);
  padding: 36px 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;

  p {
    font-size: 14px;
    color: ${theme.muted};
    max-width: 240px;
  }

  @media (max-width: 700px) {
    justify-content: center;
    text-align: center;
    p { max-width: none; }
  }
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
  flex-wrap: wrap;
  justify-content: center;

  img {
    width: auto;
    opacity: 0.7;
    filter: grayscale(1) brightness(1.6);
    transition: opacity 200ms, filter 200ms;

    &.invert {
      filter: grayscale(1) invert(1) brightness(1.1);
    }

    &:hover {
      opacity: 1;
      filter: none;
    }
    &.invert:hover {
      filter: invert(1);
    }
  }

  @media (max-width: 600px) {
    gap: 32px;
  }
`;

const Brands = () => (
  <Wrapper aria-label="Marcas atendidas">
    <Container>
      <Reveal>
        <Row>
          <p>Projetos entregues para marcas e produtos que atendem milhares de pessoas</p>
          <Logos>
            {BRANDS.map((b) => (
              <img
                key={b.name}
                src={b.logo}
                alt={b.name}
                style={{
                  height: b.height,
                  ...(b.cropWidth && {
                    width: b.cropWidth,
                    objectFit: "cover",
                    objectPosition: "left center",
                  }),
                }}
                className={b.invert ? "invert" : ""}
              />
            ))}
          </Logos>
        </Row>
      </Reveal>
    </Container>
  </Wrapper>
);

export default Brands;

import React from "react";
import { Container } from "./styles";

export default () => {
  return (
    <Container>
      <p>
        Feito com{" "}
        <span role="img" aria-label="heart">
          💖
        </span>{" "}
        por{" "}
        <a href="https://github.com/gsmenezes" target="_blank">
          Gi Menezes{" "}
        </a>
      </p>
      <p>Direitos de Imagem para Netflix</p>
      <p>Dados utilizados - Themoviedb.org</p>
    </Container>
  );
};

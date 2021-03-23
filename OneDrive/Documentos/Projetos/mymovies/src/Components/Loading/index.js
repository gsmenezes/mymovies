import React from "react";
import HeartGif from "../../assets/heartgif.gif";
import {Container} from './styles';

export default () => {
  return (
    <Container>
      <img src={HeartGif} alt="Carregando.." />
    </Container>
  );
};

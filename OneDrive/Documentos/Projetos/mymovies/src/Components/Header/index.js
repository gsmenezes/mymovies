import React from "react";
import { Container, FavoriteButton, LinkHome } from "./styles";
import Heart from "../../assets/heart_fill.svg";
import NetflixLogo from '../../assets/Netflix.png';

export default ({ black }) => {
  return (
    <Container>
      <div className={black ? "black" : ""}>
        <FavoriteButton>
          <a href="/">
            <img src={Heart} alt="Meus favoritos" /> Meus Favoritos
          </a>
          <a href="/">
            <img id="logo" src={NetflixLogo} alt="Logo Netflix" />
          </a>
        </FavoriteButton>
      </div>
    </Container>
  );
};

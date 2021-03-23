import React from "react";
import { Container, Logo, FavoriteButton } from "./styles";
import Heart from "../../assets/heart_fill.svg";
import NetflixLogo from "../../assets/Netflix.png";

export default ({ black }) => {
  return (
    <Container>
      <div className={black ? "black" : ""}>
        <FavoriteButton>
          <a href="/">
            <img src={Heart} /> Meus Favoritos
          </a>
        </FavoriteButton>
        <Logo>
          <a href="/">
            <img src={NetflixLogo} alt="Logo Netflix" />
          </a>
        </Logo>
      </div>
    </Container>
  );
};

import React from "react";
import {
  Buttons,
  Container,
  MovieTitle,
  MovieDate,
  MovieInfo,
  MovieSeasons,
  MoviePoints,
  MovieOverview,
  MovieGenres,
} from "./styles";

export default ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <Container
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="vertical">
        <div className="horizontal">
          <MovieTitle>{item.original_name}</MovieTitle>
          <MovieInfo>
            <MoviePoints>{item.vote_average} pontos</MoviePoints>
            <MovieDate>{firstDate.getFullYear()}</MovieDate>
            <MovieSeasons>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </MovieSeasons>
          </MovieInfo>
          <MovieOverview>{item.overview}</MovieOverview>
          <Buttons>
            <a href={`/watch/${item.id}`} className="watch">
              ► Assistir
            </a>
            <a href={`/list/add/${item.id}`} className="favorite">
              + Minha Lista
            </a>
          </Buttons>
          <MovieGenres>
            <strong>Gêneros:</strong> {genres.join(", ")}
          </MovieGenres>
        </div>
      </div>
    </Container>
  );
};

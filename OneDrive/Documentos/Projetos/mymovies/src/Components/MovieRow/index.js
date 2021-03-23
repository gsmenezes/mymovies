import React from "react";
import { Container, ListArea, ListMovie, MovieItem } from "./styles";

export default ({ title, items }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <ListArea>
        <ListMovie>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <MovieItem>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </MovieItem>
            ))}
        </ListMovie>
      </ListArea>
    </Container>
  );
};

import React, { useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Container, ListArea, ListMovie, MovieItem } from "./styles";

export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(-400);

  const handleLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <div className="leftarrow" onClick={handleLeft}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="rightarrow" onClick={handleRight}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <ListArea>
        <ListMovie
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item) => (
              <MovieItem key={item.id}>
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

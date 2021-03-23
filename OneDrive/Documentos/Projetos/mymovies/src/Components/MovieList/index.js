import React, { useEffect, useState } from "react";
import Tmdb from "../../tmdb";
import { Container, List } from "./styles.js";
import MovieRow from "../MovieRow";
import Header from "../Header";
import DestakMovie from "../DestakMovie";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [destakData, setDestakData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setDestakData(chosenInfo);
    };
    loadAll();
  }, []);

  return (
    <Container>
      <Header />
      {destakData && <DestakMovie item={destakData} />}
      <List>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </List>
    </Container>
  );
};

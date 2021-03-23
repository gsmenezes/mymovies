import React, { useEffect, useState } from "react";
import Tmdb from "../../tmdb";
import { Container, List } from "./styles.js";
import MovieRow from "../MovieRow";
import Header from "../Header";
import Footer from '../Footer';
import DestakMovie from "../DestakMovie";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [destakData, setDestakData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <Container>
      <Header black={blackHeader} />
      {destakData && <DestakMovie item={destakData} />}
      <List>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </List>
      <Footer />
    </Container>
  );
};

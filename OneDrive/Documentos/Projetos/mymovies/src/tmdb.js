const api_key = "b0637a893e5875e58c03e16d84b7150f";
const api_base = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${api_base}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(
          `/movie/top_rated?&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${api_key}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if(movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?&language=pt-BR&api_key=${api_key}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?&language=pt-BR&api_key=${api_key}`
          );
          break;
        default:
          info = null;
          break;
      }
      return info;
    }
  },
};

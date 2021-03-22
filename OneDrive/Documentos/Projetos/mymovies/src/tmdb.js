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
        ttle: "Originais",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "trending",
        ttle: "Recomendados para você",
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "toprated",
        ttle: "Em alta",
        items: await basicFetch(
          `/movie/top_rated?&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "action",
        ttle: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "comedy",
        ttle: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "horror",
        ttle: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "romance",
        ttle: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "documentary",
        ttle: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${api_key}`
        ),
      },
    ];
  },
};

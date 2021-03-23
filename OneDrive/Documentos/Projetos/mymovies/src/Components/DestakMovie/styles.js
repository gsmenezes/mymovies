import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-position: center;
  background-size: cover;

  .vertical {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
  }
  .horizontal {
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px 30px 150px 30px;
  }
`;

export const MovieTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const MovieDate = styled.div`
  margin-right: 15px;
`;

export const MovieInfo = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  display: inline-flex;
`;

export const MovieSeasons = styled.div`
  margin-right: 15px;
`;

export const MoviePoints = styled.div`
  margin-right: 15px;
  color: #46d369;
`;

export const MovieOverview = styled.div`
  margin-top: 15px;
  color: #999;
  font-size: 16px;
  max-width: 40%;
`;

export const MovieGenres = styled.div`
  margin-top: 15px;
  color: #999;
  font-size: 15px;
`;

export const Buttons = styled.div`
  margin-top: 15px;

  .watch {
    background-color: #fff;
    color: #000;
  }

  .favorite {
    background-color: #333;
    color: #fff;
  }

  a {
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
  }
  a:hover {
    opacity: 0.7;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  div {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    padding: 25px 30px;
    background: transparent;
    transition: all ease 0.5s;
    display: flex;
    justify-content: space-between;
  }

  .black {
    background-color: #141414;
  }
`;

export const FavoriteButton = styled.div`
  height: 40px;

  img {
    height: 100%;
    padding-right: 10px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    display: flex;
  }

  #logo{
    padding-right:0;
    height: 40px;
    margin-top: -22%;
  }
`;

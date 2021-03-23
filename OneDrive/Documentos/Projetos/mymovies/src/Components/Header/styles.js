import styled from "styled-components";

export const Container = styled.div`

div {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 padding: 0 30px;
 background: transparent;
 transition: all ease .5s;
}

 .black{
   background-color: #141414;
 }
`;

export const Logo = styled.div`
  height: 50px;

  img {
    height: 100%;
  }
`;

export const FavoriteButton = styled.div`
  height: 30px;

  img {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
  }
`;

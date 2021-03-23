import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;

  h2 {
    margin: 0 0 0 30px;
  }
`;

export const ListArea = styled.div`
padding-left: 30px;
  overflow-x: hidden;

`;

export const ListMovie = styled.div `
width: 3000px;`;

export const MovieItem = styled.div `
 display: inline-block;
    width: 150px;
    cursor: pointer;

    img{
      width: 100%;
      transform: scale(0.9);
      transition: all ease 0.2s;
    }

    img:hover{
      transform: scale(1);
    }
`;

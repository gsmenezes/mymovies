import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;

  h2 {
    margin: 0 0 0 30px;
  }

  .leftarrow,
  .rightarrow {
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: #00000090;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease .3s;
  }

  .leftarrow {
    left: 0;
  }

  .rightarrow {
    right: 0;
  }

  &:hover .leftarrow,
  &:hover .rightarrow {
    opacity: 1;
  }
`;

export const ListArea = styled.div`
  padding-left: 30px;
  overflow-x: hidden;
`;

export const ListMovie = styled.div`
transition: all ease .3s;
`;

export const MovieItem = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;

  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }

  img:hover {
    transform: scale(1);
  }
`;

export const LeftArrow = styled.div``;

export const RightArrow = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: #00000090;

  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
`;

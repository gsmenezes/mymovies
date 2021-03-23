import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html, body, #root {
background-color: #111;
color: #FFFFFF;
font-family: 'Heebo', sans-serif;
overflow: auto;


::-webkit-scrollbar {
    width: 8px;

}

::-webkit-scrollbar-thumb{
    background-color: #a1a1a1;
    border-radius: 6px;
}

::-webkit-scrollbar-track{
    background-color: #1a1a1a;
}
}

*, button, input {
    border: 0;
    outline: 0;
}

button {
    cursor: pointer;
}
`;

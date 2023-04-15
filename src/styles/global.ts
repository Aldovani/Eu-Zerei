import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *,*::after,*::before{
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
*::selection{
  background: rgba(225, 29, 72, 0.3);

}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e11d48;
  border: 0px none #ffffff;
  border-radius: 0px;
}
::-webkit-scrollbar-thumb:hover {
  background: #f43f58;
}
::-webkit-scrollbar-thumb:active {
  background: #f43f58;
}
::-webkit-scrollbar-track {
  background: #151515;
  border: 0px none #ffffff;
  border-radius: 0px;
}
::-webkit-scrollbar-track:hover {
  background: #151515;
}
::-webkit-scrollbar-track:active {
  background: #00000e;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

html{
  scroll-behavior: smooth;
}
:root{

  font-size: 62.5%;
@media(max-width:1200px){

  font-size: 55%;
}

@media(max-width:600px){
  font-size: 50%;

}
}
body{
  background: ${({ theme }) => theme.colors.background.main};
  overflow-x:hidden;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,span,a {
  font-family: 'Nunito', sans-serif;

}
p{
font-family: 'Poppins', sans-serif;

}

button,
a {
  cursor: pointer;
}

ul {
  list-style: none;
}

img,
svg {
  max-width: 100%;
  display: block;
}

`;

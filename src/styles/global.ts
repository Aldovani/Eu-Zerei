import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *,*::after,*::before{
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
:root{

  font-size: 62.5%;


    /* font-size: 55%; */

    /* font-size: 50%; */
}
body{
  background: ${({ theme }) => theme.colors.background.main};
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  font-family: 'DM Sans', sans-serif;
  line-height: 58px;
  font-weight: 700;
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

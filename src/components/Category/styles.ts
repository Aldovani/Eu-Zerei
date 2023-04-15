import { setLightness } from "polished";
import styled, { css } from "styled-components";

interface IContainer {
  secondary?: boolean;
}

export const Container = styled.div<IContainer>`
  /* background: ${({ theme }) =>
    setLightness(0.2, theme.colors.primary[600])}; */
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  background: linear-gradient(
    98.22deg,
    rgba(244, 63, 103, 0.2) 0%,
    rgba(177, 6, 44, 0.2) 100%
  );
  span {
    font-family: "Nunito" sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 14px;
    /* identical to box height, or 100% */

    text-transform: uppercase;

    background: linear-gradient(98.22deg, #f43f67 0%, #b1062c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

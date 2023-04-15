import styled, { css } from "styled-components";
import { border, setLightness } from "polished";

interface IContainerSearch {
  isOpen: boolean;
}
interface IInputSearch {
  isOpen: boolean;
}

export const Container = styled.header`
  max-width: calc(1216px + 64px);
  padding: 0 32px;
  width: 100%;
  margin: 0 auto 164px;
  display: flex;
  align-items: center;
  margin-top: 16px;

  @media (max-width: 700px) {
    justify-content: space-between;
  }
`;

export const ContainerSearch = styled.form<IContainerSearch>`
  display: flex;
  align-items: center;

  position: relative;

  padding: 0 14px;
  height: 50px;
  max-width: 264px;
  width: 52px;

  border-radius: 8px;
  margin-right: 48px;
  cursor: pointer;
  transition: all 0.5s ease;

  position: relative;
  background: ${({ theme }) => setLightness(0.2, theme.colors.primary[600])};

  ${({ isOpen, theme }) =>
    !isOpen &&
    css`
      &:hover {
        filter: brightness(1.2);
        box-shadow: 0 0 0 5px ${setLightness(0.1, theme.colors.primary[600])};
      }
    `}

  .icon {
    position: absolute;
    right: 14px;
  }
  &:focus {
    box-shadow: 0 0 0 1px
      ${({ theme }) => setLightness(0.1, theme.colors.primary[600])};
  }

  ${({ isOpen, theme }) =>
    isOpen &&
    css`
      background: #151515;
      width: 100%;
    `}

  @media(max-width: 700px) {
    display: none;
  }
`;

export const InputSearch = styled.input<IInputSearch>`
  background: transparent;
  border: 0;
  outline: 0;
  height: 100%;
  max-width: 256px;
  transition: opacity ${({ isOpen }) => (!isOpen ? "0.3s" : "1s")} ease;

  opacity: ${({ isOpen }) => (!isOpen ? 0 : 1)};
  font-family: "Poppins" sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

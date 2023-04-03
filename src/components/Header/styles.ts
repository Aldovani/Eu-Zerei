import Link from "next/link";
import styled, { css } from "styled-components";
import { setLightness } from "polished";

interface IContainerSearch {
  isOpen: boolean;
}
interface IInputSearch {
  isOpen: boolean;
}

export const Container = styled.header`
  max-width: calc(1312px + 32px);
  padding: 0 16px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-top: 16px;
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 4rem;

  margin: 0 auto 0 120px;

  @media (max-width: 700px) {
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContainerSearch = styled.div<IContainerSearch>`
  display: flex;
  align-items: center;

  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.primary[600]};

  padding: 0 14px;
  height: 50px;
  max-width: 264px;
  width: 52px;

  border-radius: 8px;
  margin-right: 48px;
  cursor: pointer;
  overflow-x: hidden;
  transition: all 0.3s ease;

  position: relative;

  &:hover {
    background: ${({ theme }) => setLightness(0.2, theme.colors.primary[600])};
  }

  .icon {
    position: absolute;
    right: 14px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      background: #221b1d;
      border-color: transparent;
      border-bottom-color: red;
      border-radius: 0px;
      width: 100%;

      &:hover {
        background: #221b1d;
      }
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
  width: ${({ isOpen }) => (!isOpen ? 0 : 256)};

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const ButtonLink = styled(Link)`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  border-radius: 0.8rem;

  color: ${({ theme }) => theme.colors.gray[100]};
  padding: 1.6rem 3.2rem;
  background: ${({ theme }) => theme.colors.primary[600]};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContainerMenu = styled.div`
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

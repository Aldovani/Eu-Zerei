import styled from "styled-components";
import { setLightness } from "polished";

interface ILinkStyle {
  isActive: boolean;
}

export const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;

  margin: 0 auto 0 120px;

  @media (max-width: 700px) {
    margin: 0 ;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const LinkStyle = styled.div<ILinkStyle>`
  a {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.2rem;

    color: ${({ theme }) => theme.colors.gray[300]};
    transition: all 0.2s ease;
    padding: 4px 12px;
    display: inline-block;
    border-radius: 4px;

    &:hover {
      color: ${({ theme }) => theme.colors.primary[500]};
    }

    ${({ isActive, theme }) =>
      isActive &&
      `color :${theme.colors.primary[500]};
      background: ${setLightness(0.2, theme.colors.primary[600])};


  `}
  }
`;

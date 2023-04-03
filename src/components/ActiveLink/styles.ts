import styled from 'styled-components';

interface ILinkStyle {
  isActive: boolean
}


export const LinkStyle = styled.div<ILinkStyle>`

a{

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;

  color: ${({ theme }) => theme.colors.gray[300]};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
  }

  ${({ isActive, theme }) => isActive ?
    `color :${theme.colors.primary[500]}`
    : ""
  }

}

`;

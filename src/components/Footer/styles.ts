import styled from "styled-components";

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.background.light};
  margin-top: 144px;
`;

export const Flex = styled.div`
  display: flex;
  max-width: calc(1216px + 64px);
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 40px 32px;
  margin: 0 auto;

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 24px;
    /* identical to box height */

    /* gray/Gray 6 */

    color: #868e96;
    a {
      color: #e11d48;
    }
  }
  .socials {
    display: flex;
    align-items: center;
    gap: 32px;

    svg {
      transition: stroke 0.2s ease;
    }
    svg:hover {
      stroke: #e11d48;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const Col = styled.div`
  h3 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 120%;

    color: ${({ theme }) => theme.colors.gray[100]};
    margin-bottom: 3.2rem;
  }

  li {
    margin-bottom: 2rem;
  }
  a,
  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 120%;
    transition: color 0.3s ease;
    color: ${({ theme }) => theme.colors.gray[600]};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  @media (max-width: 800px) {
    &:nth-child(1) {
      grid-area: s;
    }
    &:nth-child(2) {
      grid-area: c;
    }
    &:nth-child(3) {
      grid-area: n;
    }
    &:nth-child(4) {
      grid-area: n;
    }
  }
`;

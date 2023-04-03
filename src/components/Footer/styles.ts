import styled from "styled-components";

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.background.light};
  margin-top: 200px;
`;

export const Flex = styled.div`
  display: flex;
  max-width: calc(1312px + 32px);
  width: 100%;
  padding: 112px 16px;
  margin: 0 auto;

 > div:first-child {
    margin-right: auto;
  }

  @media (max-width: 600px) {
flex-direction:column;
}
`;

export const SubGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(3, minmax(min-content, auto));
  gap: 154px;
  @media (max-width: 800px) {
    grid-template-areas:
      "s c"
      "n n";
    grid-template-columns: none;
    justify-content: center;
    gap: 64px;
  }
`;

export const Col = styled.div`
  h3 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
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
    font-size: 16px;
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

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 22px;

  input {
    max-width: 417px;
    width: 100%;
    background: #221b1d;
    border: 0;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 16px 0 16px 32px;
    border-radius: 8px 0 0 8px;

    color: ${({ theme }) => theme.colors.gray[100]};

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.primary[600]};
    }
  }

  button {
    height: 54px;
    padding: 0 24px;
    border: 0;
    border-radius: 0 8px 8px 0;
    transition: all 0.3s ease;
    background: ${({ theme }) => theme.colors.primary[600]};

    &:hover {
      background: ${({ theme }) => theme.colors.primary[400]};
    }
  }
`;

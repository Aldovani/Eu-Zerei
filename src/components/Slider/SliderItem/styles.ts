import styled from "styled-components";

export const Container = styled.div`
  /* background-color: red; */
  width: 100%;

  .containerImage {
    position: relative;
    max-width: 280px;
    height: 420px;
    width: 100%;
  }
  img {
    object-fit: cover;
  }
`;

export const Infos = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 33px;
    /* identical to box height */

    color: #ffffff;
    margin-top: 8px;
  }
`;

export const Score = styled.div`
  padding: 12px;
  background: linear-gradient(
    98.22deg,
    rgba(244, 63, 103, 0.2) 0%,
    rgba(177, 6, 44, 0.2) 100%
  );
  border-radius: 4px;

  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 100%;
    /* identical to box height, or 32px */

    text-transform: uppercase;

    background: linear-gradient(98.22deg, #f43f67 0%, #b1062c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  .pagination-foda {
    width: 100%;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    position: sticky;
    width: fit-content !important;
    gap: 16px;
    transform: none !important;
  }
`;

export const Controller = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  button {
    background: transparent;
    border: 0;
  }

  .prev-slide svg,
  .next-slide svg {
    transition: transform 0.3s ease, stroke 0.2s ease-in-out;
  }

  .prev-slide.swiper-button-disabled svg,
  .next-slide.swiper-button-disabled svg {
    stroke: #343a40;
  }

  .prev-slide:not(.swiper-button-disabled) svg:hover {
    transform: translateX(-2px);
  }
  .next-slide:not(.swiper-button-disabled) svg:hover {
    transform: translateX(2px);
  }
`;

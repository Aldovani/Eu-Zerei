import { setLightness } from "polished";
import styled, { keyframes } from "styled-components";
import NextLink from "next/link";

const AnimationIcon = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(225, 29, 72, 0.3);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px  rgba(225, 29, 72, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0  rgba(225, 29, 72, 0);
  }
`;

const PulseBackground = keyframes`
0%{
  background: rgba(225, 29, 72, 0.3);
    filter: blur(160.914px);
}
70%{
  background: rgba(225, 29, 72, 0.3);
    filter: blur(200px);
}
100%{
  background: rgba(225, 29, 72, 0.3);
  filter: blur(160.914px);

}
`;

export const Container = styled.div`
  max-width: calc(1216px + 64px);
  padding: 0 32px;
  margin: 0 auto;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto;
  position: relative;

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 27px;
    text-align: center;
    max-width: 426px;
    width: 100%;
    margin-top: 20px;
    color: #adb5bd;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 423px;
    height: 264.27px;

    z-index: -1;
    background: rgba(225, 29, 72, 0.3);
    filter: blur(160.914px);
    border-radius: 100%;
    animation: ${PulseBackground} 3s ease infinite;
  }
`;

export const Title = styled.h1`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 6.4rem;
  line-height: 120%;

  text-align: center;

  color: #f8f9fa;

  max-width: 694px;

  span {
    color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const Icon = styled.div`
  position: absolute;
  padding: 16px;
  border-radius: 12px;
  background: ${({ theme }) => setLightness(0.2, theme.colors.primary[600])};
  animation: ${AnimationIcon} 3s ease infinite;
  transform: scale(0.95);

  &:nth-child(1) {
    left: -57px;
    top: -30px;
    animation-delay: 0.5s;
  }
  &:nth-child(2) {
    left: -62px;
    bottom: -40px;
    animation-delay: 0.9s;
  }
  &:nth-child(3) {
    right: -39px;
    top: -40px;
    animation-delay: 1.3s;
  }
  &:nth-child(4) {
    right: -29px;
    bottom: -40px;
    animation-delay: 1.8s;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Highlight = styled.div`
  margin-top: 214px;
`;

export const Subtitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;

  font-style: normal;
  font-weight: 700;
  font-size: 4rem;
  line-height: 55px;
  /* gray/Gray 0 */

  color: #f8f9fa;

  div {
    padding: 12px;
    border-radius: 50%;
    background: ${({ theme }) => setLightness(0.2, theme.colors.primary[600])};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 24px;
  div {
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const MainNews = styled.div`
  width: 100%;

  .container-image {
    position: relative;
    height: 300px;
    margin-bottom: 16px;
  }
  img {
    object-fit: contain;
  }
`;

export const NewsTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 33px;
  margin: 12px 0;

  /* gray/Gray 4 */
  color: #ced4da;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 24px;
  /* gray/Gray 6 */

  color: #868e96;
`;

export const Link = styled(NextLink)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 24px;
    /* identical to box height */

    /* Rose/600 */

    color: #e11d48;
  }

  svg {
    transition: all 0.3s ease;
  }
  &:hover {
    svg {
      transform: translateX(3px);
    }
  }
`;

export const News = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #212529;
  img {
    object-fit: contain;
  }
  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 19px;

    text-transform: uppercase;

    background: linear-gradient(98.22deg, #f43f67 0%, #b1062c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 27px;

    /* gray/Gray 4 */

    color: #ced4da;
  }
  .container-image {
    position: relative;
    height: 150px;
    max-width: 260px;
    width: 100%;
  }

  & + & {
    margin-top: 24px;
  }

  &:last-child {
    padding-bottom: 0;
    border: 0;
  }
`;

export const Reviews = styled.section`
  margin-top: 144px;
`;

export const NewsSection = styled.section`
  margin-top: 144px;
`;

export const NewsHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NewsBody = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));
`;

export const NewsItem = styled.div`
  width: 100%;
  .containerImage {
    width: 100%;
    height: 150px;
    position: relative;
    margin-bottom: 12px;
  }

  h3 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 27px;

    /* gray/Gray 4 */

    color: #ced4da;
    margin-top: 8px;
  }
`;

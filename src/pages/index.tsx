import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import {
  Container,
  Main,
  Title,
  Icon,
  Subtitle,
  Highlight,
  Grid,
  MainNews,
  NewsTitle,
  Description,
  Link,
  News,
  Reviews,
  NewsSection,
  NewsHead,
  NewsBody,
  NewsItem,
} from "@/styles/pages";
import Head from "next/head";
import Image from "next/image";

import {
  FiTv,
  FiMonitor,
  FiFilm,
  FiAward,
  FiStar,
  FiArrowRight,
  FiFileMinus,
} from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio - EZ</title>
      </Head>

      <Container>
        <Main>
          <Icon>
            <FiTv size={40} stroke="#E11D48" />
          </Icon>
          <Icon>
            <FiAward size={40} stroke="#E11D48" />
          </Icon>
          <Icon>
            <FiMonitor size={40} stroke="#E11D48" />
          </Icon>
          <Icon>
            <FiFilm size={40} stroke="#E11D48" />
          </Icon>

          <Title>
            Explore o universo geek com o E<span>Z</span>
          </Title>
          <p>Notícias, curiosidades & entretenimento para todos os gostos!</p>
        </Main>

        <Highlight>
          <Subtitle>
            <div>
              <FiStar scale={32} stroke="#E11D48" />
            </div>
            Destaque
          </Subtitle>

          <Grid>
            <MainNews>
              <div className="container-image">
                <Image
                  src="https://images.unsplash.com/photo-1589466725882-f47191476e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
                  alt=""
                  fill
                />
              </div>
              <Category secondary>GAMES</Category>
              <NewsTitle>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero e
              </NewsTitle>
              <Description>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Description>
              <Link href={""}>
                <span>Continuar lendo</span>
                <FiArrowRight size={24} stroke="#E11D48" />
              </Link>
            </MainNews>
            <div>
              <News>
                <div className="container-image">
                  <Image
                    src="https://images.unsplash.com/photo-1589466725882-f47191476e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
                    alt=""
                    fill
                  />
                </div>
                <div>
                  <span>Games</span>
                  <h3>
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero e
                  </h3>
                </div>
              </News>

              <News>
                <div className="container-image">
                  <Image
                    src="https://images.unsplash.com/photo-1589466725882-f47191476e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
                    alt=""
                    fill
                  />
                </div>
                <div>
                  <span>Games</span>
                  <h3>
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero e
                  </h3>
                </div>
              </News>

              <News>
                <div className="container-image">
                  <Image
                    src="https://images.unsplash.com/photo-1589466725882-f47191476e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
                    alt=""
                    fill
                  />
                </div>
                <div>
                  <span>Games</span>
                  <h3>
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero e
                  </h3>
                </div>
              </News>
            </div>
          </Grid>
        </Highlight>

        <Reviews>
          <Slider />
        </Reviews>

        <NewsSection>
          <NewsHead>
            <Subtitle>
              <div>
                <FiFileMinus size={40} stroke="#E11D48" />
              </div>
              Noticias
            </Subtitle>
            <Link href={"/news"}>
              <span>Explorar mais noticias</span>
              <FiArrowRight size={24} stroke="#E11D48" />
            </Link>
          </NewsHead>

          <NewsBody>
            <NewsItem>
              <div className="containerImage">
                <Image
                  src="https://images.unsplash.com/photo-1589466725882-f47191476e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
                  alt=""
                  fill
                />
              </div>
              <Category>Games</Category>
              <h3>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero e
              </h3>
            </NewsItem>

            <NewsItem>
              <div className="containerImage">
                <Image
                  src="https://images.unsplash.com/photo-1589466725882-f47191476e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
                  alt=""
                  fill
                />
              </div>
              <Category>Games</Category>
              <h3>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero e
              </h3>
            </NewsItem>

            <NewsItem>
              <div className="containerImage">
                <Image
                  src="https://images.unsplash.com/photo-1589466725882-f47191476e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
                  alt=""
                  fill
                />
              </div>
              <Category>Games</Category>
              <h3>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero e
              </h3>
            </NewsItem>

            <NewsItem>
              <div className="containerImage">
                <Image
                  src="https://images.unsplash.com/photo-1589466725882-f47191476e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
                  alt=""
                  fill
                />
              </div>
              <Category>Games</Category>
              <h3>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero e
              </h3>
            </NewsItem>

            <NewsItem>
              <div className="containerImage">
                <Image
                  src="https://images.unsplash.com/photo-1589466725882-f47191476e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
                  alt=""
                  fill
                />
              </div>
              <Category>Games</Category>
              <h3>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero e
              </h3>
            </NewsItem>

            <NewsItem>
              <div className="containerImage">
                <Image
                  src="https://images.unsplash.com/photo-1589466725882-f47191476e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
                  alt=""
                  fill
                />
              </div>
              <Category>Games</Category>
              <h3>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero e
              </h3>
            </NewsItem>
          </NewsBody>
        </NewsSection>

      </Container>

      <Footer />
    </>
  );
}

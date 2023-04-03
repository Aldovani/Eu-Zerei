import React from "react";

import { Container, Col, Flex, ContainerInput, SubGrid } from "./styles";
import Image from "next/image";
import Logo from "../../assets/images/logo.svg";
import { SendEmail } from "@icon-park/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Container>
      <Flex>

        <Col>
          <Link href="/">
            <Image src={Logo} width={64} alt="Logo" />
          </Link>
        </Col>

        <SubGrid>
          <Col>
            <h3>Social</h3>
            <ul>
              <li>
                <Link target="_blank" href="https://instagram.com">
                  Instagram
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://facebook.com">
                  Facebook
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://tiktok.com">
                  Tik-Tok
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://twitter.com">
                  Twitter
                </Link>
              </li>
            </ul>
          </Col>

          <Col>
            <h3>Categorias</h3>
            <nav>
              <ul>
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/news">Noticias</Link>
                </li>
                <li>
                  <Link href="/reviews">Reviews</Link>
                </li>
              </ul>
            </nav>
          </Col>

          <Col>
            <h3>Cadastre-se em nossa Newsletter</h3>
            <p>
              Quer ser o primeiro a saber as pincipais noticoasa do mundo geek{" "}
            </p>

            <ContainerInput>
              <input placeholder="exemplo@exmplo.com" type="text" />
              <button>
                <SendEmail size={32} fill="#F8F9FA" />
              </button>
            </ContainerInput>
          </Col>
        </SubGrid>

      </Flex>
    </Container>
  );
};

export default Footer;

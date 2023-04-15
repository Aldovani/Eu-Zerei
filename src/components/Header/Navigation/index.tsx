import React from "react";
import Link from "next/link";

import { Container, LinkStyle } from "./styles";
import { useRouter } from "next/router";

const Navigation: React.FC = () => {
  const Router = useRouter();

  return (
    <Container>
      <LinkStyle isActive={Router.asPath === "/"}>
        <Link href="/">inicio</Link>
      </LinkStyle>
      <LinkStyle isActive={Router.asPath === "/news"}>
        <Link href="/news">Noticias</Link>
      </LinkStyle>
      <LinkStyle isActive={Router.asPath === "/reviews"}>
        <Link href="/reviews">Reviews</Link>
      </LinkStyle>
    </Container>
  );
};

export default Navigation;

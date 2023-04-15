import React from "react";
import { FiAlignJustify } from "react-icons/fi";

import { ContainerMenu } from "./styles";

const NavigationMobile: React.FC = () => {
  return (
    <>
      {/*
      <MenuMobile>
        <Navigation>
          <ActiveLink activeHref={Router.asPath} href="/">
            inicio
          </ActiveLink>
          <ActiveLink activeHref={Router.asPath} href="/news">
            Noticias
          </ActiveLink>
          <ActiveLink activeHref={Router.asPath} href="/reviews">
            Reviews
          </ActiveLink>
        </Navigation>
      </MenuMobile> */}

      <ContainerMenu>
        <FiAlignJustify size={32} stroke="#fff" />
      </ContainerMenu>
    </>
  );
};

export default NavigationMobile;

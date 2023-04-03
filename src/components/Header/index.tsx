import React, { useRef, useState } from "react";

import {
  Container,
  Navigation,
  InputSearch,
  ButtonLink,
  ContainerSearch,
  ContainerMenu,
} from "./styles";
import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { HamburgerButton, Search } from "@icon-park/react";
import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";

const Header = () => {
  const Router = useRouter();
  const [isOpenInputSearch, setIsOpenInputSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleToggleInput() {
    if (!isOpenInputSearch) {
      setIsOpenInputSearch((prevState) => !prevState);

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }

  function inputBlur() {
    if (!inputRef.current?.value) {
      setIsOpenInputSearch(false);
    }
  }

  return (
    <Container>
      <Link href="/">
        <Image src={Logo} alt="Logo " />
      </Link>

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


      <ContainerSearch onClick={handleToggleInput} isOpen={isOpenInputSearch}>
        <InputSearch
          isOpen={isOpenInputSearch}
          placeholder="Busca"
          onBlur={inputBlur}
          ref={inputRef}
        />
        <Search
          size={24}
          className="icon"
          fill={isOpenInputSearch ? "#ADB5BD" : "#F8F9FA"}
        />
      </ContainerSearch>

      <ButtonLink href="/login">Minha conta</ButtonLink>

      <ContainerMenu>
        <HamburgerButton size={32} fill="#fff" />
      </ContainerMenu>

    </Container>
  );
};

export default Header;

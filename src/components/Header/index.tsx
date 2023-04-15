import React, { useRef, useState } from "react";

import { Container, InputSearch, ContainerSearch } from "./styles";

import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

import { FiSearch } from "react-icons/fi";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";

const Header = () => {
  const [isOpenInputSearch, setIsOpenInputSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleToggleInput() {
    if (!isOpenInputSearch) {
      // setIsOpenInputSearch((prevState) => !prevState);
      setIsOpenInputSearch(true);

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
        <Image src={Logo} alt="Logo" width={40} height={30} />
      </Link>

      <Navigation />

      <ContainerSearch
        onClick={handleToggleInput}
        isOpen={isOpenInputSearch}
        onFocus={handleToggleInput}
      >
        <InputSearch
          isOpen={isOpenInputSearch}
          placeholder="Busca"
          onBlur={inputBlur}
          ref={inputRef}
        />
        <FiSearch size={24} className="icon" stroke={"#E11D48"} />
      </ContainerSearch>

      <NavigationMobile />
    </Container>
  );
};

export default Header;

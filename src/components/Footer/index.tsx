import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import { Container, Flex } from "./styles";
import Image from "next/image";
import Logo from "../../assets/images/logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <Container>
      <Flex>
        <Link href="/">
          <Image src={Logo} width={40} height={30} alt="Logo" />
        </Link>

        <p>
          Desenvolvido com ❤ por
          <Link href="http://www.linkedin.com/in/aldovani" target="_blank">
            {" "}
            Aldovani
          </Link>
        </p>

        <div className="socials">
          <Link href="http://www.github.com/aldovani" target="_blank">
            <FiGithub size={24} stroke="#343A40" />
          </Link>
          <Link href="http://www.linkedin.com/in/aldovani"  target="_blank">
            <FiLinkedin size={24} stroke="#343A40" />
          </Link>
          <Link href="https://twitter.com/AldovaniH" target="_blank">
            <FiTwitter size={24} stroke="#343A40" />
          </Link>
        </div>
      </Flex>
    </Container>
  );
};

export default Footer;

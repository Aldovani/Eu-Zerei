import { ReactNode } from "react";
import { LinkStyle } from "./styles";
import Link from "next/link";

interface IActiveLink {
  activeHref: string;
  href: string;
  children: ReactNode;
}

export function ActiveLink({ activeHref, href, children }: IActiveLink) {
  return (
    <LinkStyle isActive={activeHref === href}>
      <Link href={href}>{children}</Link>
    </LinkStyle>
  );
}

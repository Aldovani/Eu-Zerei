import React, { ReactNode } from "react";

import { Container } from "./styles";

interface ICategory {
  children: ReactNode;
  secondary?: boolean;
}

const Category = ({ children }: ICategory) => {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  );
};

export default Category;

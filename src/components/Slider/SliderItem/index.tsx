import Image from "next/image";
import React from "react";

import { Container, Infos, Score } from "./styles";
import Category from "@/components/Category";

const SliderItem: React.FC = () => {
  return (
    <Container>
      <div className="containerImage">
        <Image src="/news.png" alt="" fill />
      </div>
      <Infos>
        <div>
          <Category>Games</Category>
          <h3>Fortnite</h3>
        </div>
        <Score>
          <h4>8.8</h4>
        </Score>
      </Infos>
    </Container>
  );
};

export default SliderItem;

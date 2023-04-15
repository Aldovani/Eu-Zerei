import React, { useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FiAward } from "react-icons/fi";

import { Container, Controller } from "./styles";
import { Subtitle } from "@/styles/pages";

const SliderHeader: React.FC = () => {
  return (
    <Container>
      <Subtitle>
        <div>
          <FiAward scale={32} stroke="#E11D48" />
        </div>
        Reviews
      </Subtitle>
      <Controller>
        <div className="pagination-foda"></div>

        <div>
          <button className="prev-slide">
            <FiArrowLeft size={24} stroke="#E11D48" />
          </button>
          <button className="next-slide">
            <FiArrowRight size={24} stroke="#E11D48" />
          </button>
        </div>
      </Controller>
    </Container>
  );
};

export default SliderHeader;

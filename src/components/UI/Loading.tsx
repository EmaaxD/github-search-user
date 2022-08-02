import { FC } from "react";
import styled, { keyframes } from "styled-components";

export const Loading: FC = () => {
  return (
    <>
      <Loader />
    </>
  );
};

const spin = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Loader = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #141d2f;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
  margin-right: 20px;
`;

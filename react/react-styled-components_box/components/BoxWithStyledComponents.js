import styled from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
  return <Quadrat $isBlack={isBlack}></Quadrat>;
}

const Quadrat = styled.div`
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "white")};
  width: 100px;
  height: 100px;

  &:hover {
    background-color: red;
  }
`;

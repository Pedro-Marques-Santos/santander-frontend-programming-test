import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  max-width: 372px;
  height: 50px;
  border-radius: 6px;
  background: var(--pink-500);
  color: var(--white);
  font-size: 19px;

  transition: 0.2s;
  &:hover {
    background: var(--pink-600);
  }
  margin: 0 auto;
`;

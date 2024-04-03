import styled from "styled-components";

export const Container = styled.div``;

export const ContainerTitleAndCLose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: var(--white);
`;

export const IconClose = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const InputDescrition = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background: var(--black-900);

  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: gray;
  margin-bottom: 10px;
`;

export const InputName = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background: var(--black-900);

  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: gray;
  margin-bottom: 10px;
`;

export const InputPrice = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background: var(--black-900);

  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: gray;
  margin-bottom: 10px;
`;

export const InputCodigoProduto = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background: var(--black-900);

  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: gray;
`;

export const CadastrarProduto = styled.button`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: var(--white);

  background: var(--pink-500);
  margin-top: 25px;
  width: 100%;
  padding: 16px;

  transition: 0.2s;
  &:hover {
    background: var(--pink-600);
  }
`;

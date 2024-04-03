import { Container } from "./styles";

interface IButtonAddProduct {
  openModalCreateProduct: () => void;
}

export function ButtonAddProduct({
  openModalCreateProduct,
}: IButtonAddProduct) {
  return <Container onClick={openModalCreateProduct}>Criar Produto</Container>;
}

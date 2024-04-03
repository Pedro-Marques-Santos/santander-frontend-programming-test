import { IProducts } from "../../../interfaces";
import { TableProducts } from "../../TableProducts";
import { ButtonAddProduct } from "../ButtonAddProduct";
import { Container, ContainerButton } from "./styles";

interface IDashboard {
  openModalCreateProduct: () => void;
  openModalProduct: () => void;
  products: IProducts[] | null;
}

export function Dashboard({
  openModalCreateProduct,
  openModalProduct,
  products,
}: IDashboard) {
  return (
    <Container>
      <ContainerButton>
        <ButtonAddProduct openModalCreateProduct={openModalCreateProduct} />
      </ContainerButton>
      <TableProducts openModalProduct={openModalProduct} products={products} />
    </Container>
  );
}

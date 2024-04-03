import { useContext, useState } from "react";
import { Dashboard } from "../../components/Dashboard-components/Dashboard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import ModalCreateProduct from "../../components/ModalCreateProduct";
import { Container, Subtitle, Title } from "./styles";
import ModalProduct from "../../components/ModalProduct";
import ModalEditProduct from "../../components/ModalEditProduct";
import { ProductsContext } from "../../context/products";

export function Home() {
  const { listproducts } = useContext(ProductsContext);

  const [stateModalCreateProduct, setStateModalCreateProduct] = useState(false);
  const [stateModalProduct, setStateModalProduct] = useState(false);
  const [stateModalEditProduct, setStateModalEditProduct] = useState(false);

  const openModalCreateProduct = () => setStateModalCreateProduct(true);
  const closeModalCreateProduct = () => setStateModalCreateProduct(false);

  const openModalProduct = () => setStateModalProduct(true);
  const closeModalProduct = () => setStateModalProduct(false);

  const openModalEditProduct = () => setStateModalEditProduct(true);
  const closeModalEditProduct = () => setStateModalEditProduct(false);

  return (
    <Container>
      <ModalEditProduct
        open={stateModalEditProduct}
        handleClose={closeModalEditProduct}
        handleOpen={openModalEditProduct}
      />
      <ModalProduct
        open={stateModalProduct}
        handleClose={closeModalProduct}
        handleOpen={openModalProduct}
        openModalEdit={openModalEditProduct}
      />
      <ModalCreateProduct
        open={stateModalCreateProduct}
        handleClose={closeModalCreateProduct}
        handleOpen={openModalCreateProduct}
      />
      <Header />
      <Title>
        Produtos <strong>Nunes Sport</strong>
      </Title>
      <Subtitle>
        O CRM da Nunes Sport potencializa a gestão de produtos, impulsionando
        vendas e oferecendo uma experiência personalizada aos clientes
        apaixonados por esportes.
      </Subtitle>
      <Dashboard
        openModalCreateProduct={openModalCreateProduct}
        openModalProduct={openModalProduct}
        products={listproducts}
      />
      <Footer />
    </Container>
  );
}

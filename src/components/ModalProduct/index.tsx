import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Container,
  ContainerTitleAndCLose,
  IconClose,
  Title,
  Information,
  ContainerEditOrDelete,
  Delete,
  Edit,
} from "./styles";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { ProductsContext } from "../../context/products";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "500px",
  p: 3,
  bgcolor: "var(--black-800)",
  borderRadius: "8px",
  boxShadow: "0px -4px 32px 0px rgba(0, 0, 0, 0.80)",
  outline: "none",
};

interface IModalProduct {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  openModalEdit: () => void;
}

export default function ModalProduct({
  open,
  handleOpen,
  handleClose,
  openModalEdit,
}: IModalProduct) {
  const { productData, deleteProduct } = useContext(ProductsContext);

  function handleCloseAndOpenModalEdit() {
    handleClose();
    openModalEdit();
  }

  const formattedPrice = (price: number | undefined) => {
    if (!price) return "";

    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  async function handleCloseModalAndDeleteProduct() {
    if (productData) {
      await deleteProduct(productData._id);
      handleClose();
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <ContainerTitleAndCLose>
              <Title>Produto</Title>
              <IconClose onClick={handleClose}>
                <IoIosCloseCircleOutline size={25} />
              </IconClose>
            </ContainerTitleAndCLose>
            <Information>Nome: {productData?.nome}</Information>
            <Information>
              Preço: {formattedPrice(productData?.preco)}
            </Information>
            <Information>Descrição: {productData?.descricao}</Information>
            <Information>
              Código do Produto: {productData?.codigoProduto}
            </Information>
            <ContainerEditOrDelete>
              <Delete onClick={handleCloseModalAndDeleteProduct}>
                Excluir
              </Delete>
              <Edit onClick={handleCloseAndOpenModalEdit}>Editar</Edit>
            </ContainerEditOrDelete>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}

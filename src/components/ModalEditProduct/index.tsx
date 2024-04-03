import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  CadastrarProduto,
  Container,
  ContainerTitleAndCLose,
  IconClose,
  InputCodigoProduto,
  InputDescrition,
  InputName,
  InputPrice,
  Title,
} from "./styles";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/products";
import { enqueueSnackbar } from "notistack";

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

interface IModalEditProduct {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export default function ModalEditProduct({
  open,
  handleOpen,
  handleClose,
}: IModalEditProduct) {
  const { productData, editarProduct } = useContext(ProductsContext);

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [codeproduto, setCodeproduto] = useState("");

  async function handleEditarProduto() {
    if (codeproduto && codeproduto.length === 12) {
      if (nome && descricao && price && productData) {
        try {
          await editarProduct({
            _id: productData._id,
            nome: nome,
            descricao: descricao,
            preco: price,
            codigoProduto: codeproduto,
          });

          setNome("");
          setDescricao("");
          setPrice(null);
          setCodeproduto("");
          handleClose();
          const message = "Produto editado com sucesso!";
          enqueueSnackbar(message, { variant: "success" });
        } catch (error) {
          const message = "Erro ao tentar editado produto!";
          enqueueSnackbar(message, { variant: "error" });
        }
      } else {
        const message =
          "Por favor, verifique verifique novamente o formulário.";
        enqueueSnackbar(message, { variant: "warning" });
      }
    } else {
      const message = "O código do produto necessido de 12 carácteres!";
      enqueueSnackbar(message, { variant: "warning" });
    }
  }

  useEffect(() => {
    if (productData) {
      setNome(productData.nome);
      setDescricao(productData.descricao);
      setPrice(productData.preco);
      setCodeproduto(productData.codigoProduto);
    }
  }, [productData]);

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
              <Title>Editar Produto</Title>
              <IconClose onClick={handleClose}>
                <IoIosCloseCircleOutline size={25} />
              </IconClose>
            </ContainerTitleAndCLose>
            <InputName
              type="text"
              placeholder="Nome do Produto"
              defaultValue={productData?.nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <InputDescrition
              type="text"
              placeholder="Descrição do Produto"
              onChange={(event) => setDescricao(event.target.value)}
              defaultValue={productData?.descricao}
            />
            <InputPrice
              type="text"
              placeholder="Preço do Produto"
              onChange={(event) => setPrice(parseFloat(event.target.value))}
              defaultValue={productData?.preco}
            />
            <InputCodigoProduto
              type="text"
              placeholder="Codigo Produto"
              onChange={(event) => setCodeproduto(event.target.value)}
              defaultValue={productData?.codigoProduto}
            />
            <CadastrarProduto onClick={handleEditarProduto}>
              Editar
            </CadastrarProduto>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}

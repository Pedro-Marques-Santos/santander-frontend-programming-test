import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  CadastrarProduto,
  Container,
  ContainerTitleAndCLose,
  IconClose,
  InputCodeProduto,
  InputDescrition,
  InputName,
  InputPrice,
  Optional,
  Title,
} from "./styles";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { ICreateProduct } from "../../interfaces";
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
  zIndex: "100",
};

interface IModalCreateProduct {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export default function ModalCreateProduct({
  open,
  handleClose,
}: IModalCreateProduct) {
  const { createNewProduct } = useContext(ProductsContext);

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [codeproduto, setCodeproduto] = useState("");

  async function criarProduto() {
    const data = {
      nome: nome,
      descricao: descricao,
      preco: price,
      codigoProduto: codeproduto,
    } as ICreateProduct;

    if (codeproduto.length === 12 || codeproduto.length === 0) {
      if (nome && descricao && price) {
        try {
          await createNewProduct({
            nome: nome,
            descricao: descricao,
            preco: price,
            codigoProduto: data.codigoProduto,
          });

          setNome("");
          setDescricao("");
          setPrice(null);
          setCodeproduto("");
          handleClose();
          const message = "Produto criado com sucesso!";
          enqueueSnackbar(message, { variant: "success" });
        } catch (error) {
          const message = "Erro ao tentar criar produto!";
          enqueueSnackbar(message, { variant: "error" });
        }
      } else {
        const message =
          "Por favor, verifique verifique novamente o formulário.";
        enqueueSnackbar(message, { variant: "warning" });
      }
    } else {
      const message = "Erro ao criar o produto!";
      enqueueSnackbar(message, { variant: "warning" });
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="custom-modal"
        slotProps={{
          backdrop: {
            style: { zIndex: "1" },
          },
        }}
      >
        <Box sx={style}>
          <Container>
            <ContainerTitleAndCLose>
              <Title>Novo Produto</Title>
              <IconClose onClick={handleClose}>
                <IoIosCloseCircleOutline size={25} />
              </IconClose>
            </ContainerTitleAndCLose>
            <InputName
              type="text"
              placeholder="Nome"
              onChange={(event) => setNome(event.target.value)}
            />
            <InputDescrition
              type="text"
              placeholder="Descrição"
              onChange={(event) => setDescricao(event.target.value)}
            />
            <InputPrice
              type="number"
              placeholder="Preço"
              onChange={(event) => setPrice(parseFloat(event.target.value))}
            />
            <InputCodeProduto
              type="text"
              placeholder="Código do Produto"
              onChange={(event) => setCodeproduto(event.target.value)}
            />
            <Optional>campo opcional</Optional>
            <CadastrarProduto onClick={criarProduto}>
              Cadastrar
            </CadastrarProduto>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}

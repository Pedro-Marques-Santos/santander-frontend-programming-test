import { useContext } from "react";
import { IProducts } from "../../interfaces";
import { Container, ContentContainer, Icon } from "./styles";

import { FaEdit } from "react-icons/fa";
import { ProductsContext } from "../../context/products";

interface ITableProduct {
  openModalProduct: () => void;
  products: IProducts[] | null;
}

export function TableProducts({ openModalProduct, products }: ITableProduct) {
  const { setProduct } = useContext(ProductsContext);

  function openModaleditAndSetproduct(product: IProducts) {
    setProduct(product);
    openModalProduct();
  }

  return (
    <ContentContainer>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Preço</th>
              <th className="code">Código do Produto</th>
              <th className="edit">Editar</th>
            </tr>
          </thead>
          {products && (
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.nome}</td>
                  <td>{`R$ ${product.preco}`}</td>
                  <td className="code">{product.codigoProduto}</td>
                  <td className="edit">
                    <Icon>
                      <i onClick={() => openModaleditAndSetproduct(product)}>
                        <FaEdit size={20} />
                      </i>
                    </Icon>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </Container>
    </ContentContainer>
  );
}

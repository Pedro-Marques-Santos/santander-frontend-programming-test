import { createContext, ReactNode, useEffect, useState } from "react";
import { ICreateProduct, IListProducts, IProducts } from "../interfaces";
import { enqueueSnackbar } from "notistack";

interface ProductsProviderProps {
  children: ReactNode;
}

type TProductsContextProps = {
  createNewProduct: ({
    nome,
    descricao,
    preco,
    codigoProduto,
  }: ICreateProduct) => Promise<void>;
  listproducts: IProducts[] | null;
  setProduct(product: IProducts): Promise<void>;
  productData: IProducts | null;
  deleteProduct(_id: string): Promise<void>;
  editarProduct({
    nome,
    descricao,
    preco,
    codigoProduto,
    _id,
  }: IProducts): Promise<void>;
};

export const ProductsContext = createContext<TProductsContextProps>(
  {} as TProductsContextProps
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [listproducts, setListproducts] = useState<IProducts[] | null>(null);

  const [productData, setProductData] = useState<null | IProducts>(null);

  async function createNewProduct({
    nome,
    descricao,
    preco,
    codigoProduto,
  }: ICreateProduct) {
    const data = {
      nome: nome,
      descricao: descricao,
      preco: preco,
      codigoProduto: codigoProduto,
    };

    const response = await fetch(
      `${process.env.REACT_APP_BACKENDURL}createproduct`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao criar o produto");
    }

    await response.json();
    await newListProduct();
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}listproducts`
        );
        if (!response.ok) {
          throw new Error("Falha ao obter Produtos");
        }
        const data = (await response.json()) as IListProducts;
        setListproducts(data.listproducts);
      } catch (error) {
        console.error("Erro ao buscar Produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  async function newListProduct() {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}listproducts`
        );
        if (!response.ok) {
          throw new Error("Falha ao obter Produtos");
        }
        const data = (await response.json()) as IListProducts;
        setListproducts(data.listproducts);
      } catch (error) {
        console.error("Erro ao buscar Produtos:", error);
      }
    };

    fetchProducts();
  }

  async function setProduct(product: IProducts) {
    setProductData(product);
  }

  async function deleteProduct(_id: string) {
    const fetchDelete = async () => {
      try {
        const dataresponse = {
          id: _id,
        };
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}deleteproduct`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataresponse),
          }
        );
        if (!response.ok) {
          throw new Error("Falha ao deletar produto");
        }
        await newListProduct();
        const message = "Produto deletado com sucesso!";
        enqueueSnackbar(message, { variant: "success" });
      } catch (error) {
        console.error("Erro ao deletar produto:", error);
        const message = "Erro ao deletar produto!";
        enqueueSnackbar(message, { variant: "error" });
      }
    };

    fetchDelete();
  }

  async function editarProduct({
    nome,
    descricao,
    preco,
    codigoProduto,
    _id,
  }: IProducts) {
    const data = {
      nome: nome,
      descricao: descricao,
      preco: preco,
      codigoProduto: codigoProduto,
      id: _id,
    };

    const response = await fetch(
      `${process.env.REACT_APP_BACKENDURL}editproduct`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao criar o produto");
    }

    await newListProduct();
  }

  return (
    <ProductsContext.Provider
      value={{
        createNewProduct,
        listproducts,
        setProduct,
        productData,
        deleteProduct,
        editarProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

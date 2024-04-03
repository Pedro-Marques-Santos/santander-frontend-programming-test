interface IProducts {
  _id: string;
  nome: string;
  codigoProduto: string;
  descricao: string;
  preco: number;
}

interface IListProducts {
  listproducts: IProducts[] | null;
}

interface ICreateProduct {
  nome: string;
  descricao: string;
  preco: number | null;
  codigoProduto: string;
}

export type { IProducts, IListProducts, ICreateProduct };

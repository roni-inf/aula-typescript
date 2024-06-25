type Marca = {
  id: number;
  nome: string;
};

type Categoria = {
  descricao: string;
};

const marca: Marca & Categoria = {
  id: 1,
  nome: "VW",
  descricao: "SUV",
};

console.log(marca);

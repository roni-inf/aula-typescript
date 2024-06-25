interface Curso {
  readonly id: number;
  nome: string;
  preco: number;
  promocao: (preco: number) => void;
}

function mostrarPromocao(preco: number): void {
  console.log(`Promoção do curso:${preco}`);
}

const novoCurso: Curso = {
  id: 1,
  nome: "Java",
  preco: 1000,
  promocao: mostrarPromocao,
};

console.log(novoCurso);
console.log(novoCurso.promocao(900));

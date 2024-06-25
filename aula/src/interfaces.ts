interface Aluno {
  nome: string;
  idade: number | string;
  time?: string;
  endereco: string;
}

const aluno: Aluno = {
  nome: "Antônio",
  idade: 25,
  endereco: "Rua do Imperador",
};

console.log(aluno);

function exibirAluno(aluno: Aluno): void {
  console.log(`${nome}`);
}

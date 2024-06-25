"use strict";
function mostrarPromocao(preco) {
    console.log(`Promoção do curso:${preco}`);
}
const novoCurso = {
    id: 1,
    nome: "Java",
    preco: 1000,
    promocao: mostrarPromocao,
};
console.log(novoCurso);
console.log(novoCurso.promocao(900));

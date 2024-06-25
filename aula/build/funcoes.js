"use strict";
const login = (username) => {
    let message = "Bem vindo:" + username;
    return message;
};
function cadastro(nome, situacao = true, email) {
    console.log(`${nome} ${situacao} ${email} `);
}
cadastro("Roni", false, "roni@gmail.com");

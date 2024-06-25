// function login(username: string): string {
//   let message = "Bem vindo:" + username;
//   return message;
// }
// console.log(login("Roni"));

const login = (username: string): string => {
  let message = "Bem vindo:" + username;
  return message;
};
//console.log(login("Roni"));

function cadastro(nome: string, situacao = true, email?: string): void {
  console.log(`${nome} ${situacao} ${email} `);
}

cadastro("Roni",false,"roni@gmail.com");

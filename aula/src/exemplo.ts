
//Isso é uma classe
class Pessoa {
    nome: string;
    email: string;

    //Construtor com atributos
    constructor(nome: string, email: string) {
      this.nome = nome;
      this.email = email;
    }
  }
  //Instância de pessoa
  const pessoa1 = new Pessoa("Carla", "c@gmail.com");
  console.log(pessoa1);
  
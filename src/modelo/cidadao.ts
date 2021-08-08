import { Bairro } from "./bairro";

export class Cidadao {
    nome: String;
    cpf: String;
    dataNascimento: String; 
    cep: String;
    rua: String;
    numero: String; 
    bairro: Bairro = new Bairro();
}

//intersection
type temNome = {nome: string};
type temSobrenome = {sobrenome: string};
type temIdade = {idade: number};
type Pessoa = temNome & temSobrenome & temIdade;// AND

const pessoa: Pessoa ={
  nome : 'paola',
  sobrenome : 'soares',
  idade : 23,
}
console.log(pessoa);

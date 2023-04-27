// // Tipos básicos (aqui ocorre interferência de tipos)
// //quando aparecer o tipo N significa que vc tem que definir o Tipo se não, não precisa colocar.
// let nome: string = 'Paola'; //Qualquer tipos de Strings: '' "" ``
// let idade: number = 0xf00d; //10, 1.45, -4.55, 0xf00d, 0b1010, 0o7744
// let adulto: boolean = true; //True ou false
// let simbolo: symbol = Symbol('qualquer-symbol');// symbol
// let big: bigint = 10n; //bigint

import { type } from "os";

// //Arrays
// let arrayDeNumeros: Array<number> = [1,2,3];
// let arrayDeNumeros2: number[] = [1,2,3];
// let arrayDeString: Array<String> = ['a', 'b']
// let arrayDeString2: string[] = ['a', 'b'];

// //Objetos
// let pessoa: {nome: String, idade: number, adulto?: boolean} = {
//   idade:23,
//   nome: 'Paola',
// };

// //Função
// function soma (x: number, y:number){
//   return x + y;
// }
// const soma2: (x: number, y: number) => number = (x, y) => y + x;

//tipo void
// function semRetorno(...arg: string[]):void{
//   console.log(arg.join(''));
// }
// const pessoa = {
//   nome:'paola',
//   sobrenome:'soares',

//   exibirNome():void{
//     console.log(this.nome+''+this.sobrenome);
//   },
// };
// semRetorno('Paola ','soares');
// pessoa.exibirNome();
// export{pessoa};

//tipo object
// const objectA = {
//   chaveA: 'valor A',
//   chaveB: 'valor B',
// };
// objectA.chaveA = 'outro Valor';
// objectA.chaveB
// //Arrey genericts
// //Array<T> - T[]
// //Array de numero
// export function multiplicarArgs(... arg: Array<number>): number{
//   return arg.reduce((ac, valor ) => ac*valor,1);
// }
// //Array de String
// export function concatenaString(... arg: string[]): string{
//   return arg.reduce((ac, valor ) => ac+valor);
// }
// //String convertendo para letras maiúscula
// export function toUpperCase(... arg: string[]): string[]{
//   return arg.map((valor) => valor.toUpperCase());
// }
// const result = multiplicarArgs(1,2,3);
// const concatena = concatenaString('a','b','c');
// const upper= toUpperCase('a','b','c');

// console.log(result);
// console.log(concatena);
// console.log(upper);

// //tuple
// const dadosCliente0: readonly [number, string] = [1, 'paola'];
// const dadosCliente1: [number, string, string] = [1, 'paola', 'ana'];
// const dadosCliente2: [number, string, string?] = [1, 'paola'];
// const dadosCliente3: [number, string, ...string[]] = [1, 'paola'];


// // dadosCliente1[0] = 100;
// // dadosCliente1[1] = 'ana';

// console.log(dadosCliente0);
// console.log(dadosCliente1);
// console.log(dadosCliente2);
// console.log(dadosCliente3);

// //raedonly Array
// const array1: readonly string[]= ['Paola', 'Soares'];
// const array2: ReadonlyArray<string>= ['Paola', 'Soares'];

// console.log(array1);
// console.log(array2);

//never
// function criarErro(): never{
//   throw new Error('qualquer erro');
// }
// criarErro();

//emun
// enum Cores {
//   vermelho,
//   azul,
//   amarelo,
// }

// let v: unknown;
//  v= 100;
//  v = 'paola';
//  v = 200;
//  v ='10';
// const x = 300;
//  if(typeof v === 'number') console.log(v + x)

// union
// function add( a: number, b:number): number{
//   return a + b;
// }
// function addORConcatena(
//   a: number|string,
//   b:number|string
//   ){

//   if(typeof a === 'number' && typeof b === 'number') return a + b;
//   return `${a}${b}`;
// }
// console.log(add(20,30));
// console.log(addORConcatena('30','30'));
// console.log(addORConcatena('Paola',30));

// //literais
// let x =10;
// x = 0b1010;
// const y = 10;
// const a = 100;

// const pessoa = {
//   nome: 'Paola 'as const,
//   sobrenome: 'Soares',
// };
// function escolhaCor(cor: 'azul'| 'rosa'|'roxa'): string{
//   return cor;
// }
// console.log(escolhaCor('azul'));


// //tipo alias
// type Idade = number;
// type Pessoa = {
//   nome: string,
//   idade:  Idade,
//   salario: number,
//   corPreferida?: string;
// };

// type CorRGB= 'rosa'| 'verde'| 'roxo'|'roxo';
// type CorCMYK= 'cinza'| 'azul'| 'violeta'|'vinho';
// type corPreferida = CorCMYK|CorRGB;

// //código usando os tipos
// const pessoa: Pessoa = {
//   idade: 30,
//   nome: 'Paola',
//   salario: 100_000,
// }
// function setCorPreferida(pessoa:Pessoa, cor:corPreferida): Pessoa{
//   return{ ...pessoa, corPreferida:cor}
// }
// console.log(setCorPreferida(pessoa, 'cinza'));
// console.log(pessoa);

// //intersection
// type temNome = {nome: string};
// type temSobrenome = {sobrenome: string};
// type temIdade = {idade: number};
// type Pessoa = temNome & temSobrenome & temIdade;// AND

// const pessoa: Pessoa ={
//   nome : 'paola',
//   sobrenome : 'soares',
//   idade : 23,
// }
// console.log(pessoa);

// //funcoes
// type mapStringsCallback = (item: string)=> string;

// export function mapStrings(
//   array: string[],
//   callbackfn : mapStringsCallback
//   ): string[]{
//   const newArray: string[] = [];

//   for(let i = 0; i < array.length; i++){
//     const item = array[i]
//     newArray.push(callbackfn(array[i]));
//   }
//   return newArray;
// }
// const abc = ['a', 'b','c'];
// const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
// console.log (abc);
// console.log (abcMapped);

//structural
type VeriFyUsarFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const VeriFyUsar: VeriFyUsarFn = (user, sentValue) => {
  return (
    user.username === sentValue.username &&
    user.password === sentValue.password
  );
};
const bdUser = { username: 'paola', password: '12345' };
const sentUser = { username: 'paola', password: '12345' };
const loggedIn = VeriFyUsar(bdUser, sentUser);
console.log(loggedIn)

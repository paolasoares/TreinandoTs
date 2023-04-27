//Arrey genericts
//Array<T> - T[]
//Array de numero
export function multiplicarArgs(... arg: Array<number>): number{
  return arg.reduce((ac, valor ) => ac*valor,1);
}
//Array de String
export function concatenaString(... arg: string[]): string{
  return arg.reduce((ac, valor ) => ac+valor);
}
//String convertendo para letras maiúscula
export function toUpperCase(... arg: string[]): string[]{
  return arg.map((valor) => valor.toUpperCase());
}
const result = multiplicarArgs(1,2,3);
const concatena = concatenaString('a','b','c');
const upper= toUpperCase('a','b','c');

console.log(result);
console.log(concatena);
console.log(upper);

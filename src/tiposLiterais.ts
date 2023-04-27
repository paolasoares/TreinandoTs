//literais
let x =10;
x = 0b1010;
const y = 10;
const a = 100;

const pessoa = {
  nome: 'Paola 'as const,
  sobrenome: 'Soares',
};
function escolhaCor(cor: 'azul'| 'rosa'|'roxa'): string{
  return cor;
}
console.log(escolhaCor('azul'));

//tipo alias
type Idade = number;
type Pessoa = {
  nome: string,
  idade:  Idade,
  salario: number,
  corPreferida?: string;
};

type CorRGB= 'rosa'| 'verde'| 'roxo'|'roxo';
type CorCMYK= 'cinza'| 'azul'| 'violeta'|'vinho';
type corPreferida = CorCMYK|CorRGB;

//código usando os tipos
const pessoa: Pessoa = {
  idade: 30,
  nome: 'Paola',
  salario: 100_000,
}
function setCorPreferida(pessoa:Pessoa, cor:corPreferida): Pessoa{
  return{ ...pessoa, corPreferida:cor}
}
console.log(setCorPreferida(pessoa, 'cinza'));
console.log(pessoa);

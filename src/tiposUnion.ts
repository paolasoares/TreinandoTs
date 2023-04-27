function add( a: number, b:number): number{
  return a + b;
}
function addORConcatena(
  a: number|string,
  b:number|string
  ){
  if(typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}
console.log(add(20,30));
console.log(addORConcatena('30','30'));
console.log(addORConcatena('Paola',30));

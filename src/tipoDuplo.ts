//tuple
const dadosCliente0: readonly [number, string] = [1, 'paola'];
const dadosCliente1: [number, string, string] = [1, 'paola', 'ana'];
const dadosCliente2: [number, string, string?] = [1, 'paola'];
const dadosCliente3: [number, string, ...string[]] = [1, 'paola'];


// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'ana';

console.log(dadosCliente0);
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

//raedonly Array
const array1: readonly string[]= ['Paola', 'Soares'];
const array2: ReadonlyArray<string>= ['Paola', 'Soares'];

console.log(array1);
console.log(array2);

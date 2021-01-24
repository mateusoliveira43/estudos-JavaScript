// Type Annotation

/* eslint-disable */
// Tipos básicos : ocorre inferência de tipos
let nome: string = 'Mateus'; // qualquer tipo de string
let idade: number = 24;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-simbolo');
// let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Mateus',
  idade: 24,
};

// Funções
function soma(x: number, y:number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

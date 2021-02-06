// Tipos

// any : não recomendando
function showMessage(msg) {
  return msg;
}

function showMessageExplicit(msg: any) {
  return msg;
}

// void : função sem retorno, retorna Undefined
function semRetorno(...args: string[]): void {
  console.log(args);
}
// sempre válido anotar retorno de funções, mesmo quando o TS fizer inferência

// object :
const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
};

objetoA.chaveA = 'outro valor';

// array :
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

export function concatenaArgs(...args: string[]): string {
  return args.reduce((acumulador, valor) => acumulador + valor);
}

// tuple :
const dadosCliente: readonly [number, string, string?] = [1, 'Mateus']; //previne pop/push e edição
const dadosClientes: [number, ...string[]] = [177, 'Mateuses'];

// null
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

// undefined
export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// never
export function criaErro(): never {
  throw new Error('Erro qualquer');
}

// Enum
enum Cores {
  VERMELHO,
  AZUL,
  VERDE,
}

// unknown
// abrangente como any, mas alerta para checagens de tipo

// Union Types
function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));

// Literal Type : como constante, valor fixo
let a: 100 = 100;
let b = 11 as const;

const pessoa = {
  nome: 'Mateus' as const,
  sobrenome: 'Oliveira',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

// Type Alias
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoaTipada: Pessoa = {
  nome: 'Mateus',
  idade: 25,
  salario: 200_000,
  corPreferida: 'Verde',
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

// Intersection Type
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type Pessoa2 = TemNome & TemSobrenome;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;

const pessoaTipada2: Pessoa2 = {
  nome: 'Mateus',
  sobrenome: 'Oliveira',
};

// Funçẽs como tipo
type MapStringCallback = (item: string) => string;

function mapString(array: string[], callback: MapStringCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const mappedABC = mapString(abc, (item) => item.toUpperCase());

// Structural Type
type VerifyUser = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUser = (user, sentvalue) => {
  return (
    user.username === sentvalue.username && user.password === sentvalue.password
  );
};

const bdUser = { username: 'Mateus', password: '123' };
const sentUser = { username: 'Mateus', password: 'abc', email: 'verde' };
const response = verifyUser(bdUser, sentUser);

// Type Assertions
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'green';

const body2 = document.querySelector('body')!; // non-null assertion
body2.style.background = 'green';

const body3 = document.querySelector('body') as HTMLBodyElement; // type assertion
body3.style.background = 'green';

const input = document.querySelector('.classe') as HTMLInputElement;
input.value = 'qualquer coisa';
input.focus();

// Tomar cuidado com module mode!!!

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

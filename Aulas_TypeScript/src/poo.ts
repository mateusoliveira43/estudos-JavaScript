export class Empresa {
  public readonly nome: string; //public é redundante
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

class Colaborador {
  constructor(
    public readonly nome: string, //no atalho não é redundante
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Empresa('Udemy', '11-3');
const colaborador1 = new Colaborador('Mateus', 'Oliveira');
const colaborador2 = new Colaborador('Luke', 'Skywalker');
console.log(colaborador1);
empresa.adicionaColaborador(colaborador1);
empresa.adicionaColaborador(colaborador2);
console.log(empresa);

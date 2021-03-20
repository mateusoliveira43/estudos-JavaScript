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

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf; // chamar o setter na inicialização
  }

  getIdade(): number {
    return this.idade;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  static falaOi(): void {
    console.log('oi');
  }

  static oi = 'oi';
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('fazendo algo antes...');
    return super.getNomeCompleto();
  }
}
export class Cliente extends Pessoa {}

const aluno = new Aluno('Mateus', 'Oliveira', 25, '000.000.000-00', 'A-37');
console.log(aluno, aluno.getNomeCompleto());
aluno.cpf = 'troquei no setter';
console.log(aluno.cpf);
Aluno.falaOi();

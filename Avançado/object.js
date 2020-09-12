// const pessoa = {
//   nome: 'Mateus',
//   sobrenome: 'Oliveira'
// };

// const pessoa = new Object();
// pessoa.nome = 'Mateus';
// pessoa.sobrenome = 'Oliveira';

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa['nome']); // aceita variáveis
// const chave = 'sobrenome';
// console.log(pessoa[chave]);
// delete pessoa.nome;
// console.log(pessoa);
// pessoa.falarNome = function () { console.log(`${this.nome} está falando seu nome.`); };
// pessoa.falarNome = function () { console.log(`${this.nome} está falando seu nome.`); };
// pessoa.falarNome();
// console.log(pessoa);

// function criaPessoa (nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     get nomeCompleto () {
//       return `${this.nome} ${this.sobrenome}`;
//     }
//   };
// }

// const p1 = criaPessoa('Mateus', 'Oliveira');
// console.log(p1);

// function Pessoa (nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
// }

// const p2 = new Pessoa('Isabela', 'Oliveira');
// console.log(p2);

// function Produto (nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;

//   // Object.defineProperty(this, 'estoque', {
//   //   enumerable: true, // mostra a chave
//   //   value: estoque,
//   //   writable: false, // alterar valor
//   //   configurable: false // não pode mudar estado ou deletar
//   // });

//   // Object.defineProperties(this, {
//   //   nome: {
//   //     enumerable: true, // mostra a chave
//   //     value: estoque,
//   //     writable: true, // alterar valor
//   //     configurable: true // não pode mudar estado ou deletar
//   //   },
//   //   preco: {
//   //     enumerable: true, // mostra a chave
//   //     value: estoque,
//   //     writable: true, // alterar valor
//   //     configurable: true // não pode mudar estado ou deletar
//   //   }
//   // });
//   // Object.freeze(this); // writable e configurable false
// }

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);

// function Produto (nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;

//   let estoquePrivado = estoque;
//   Object.defineProperty(this, 'estoque', {
//     enumerable: true, // mostra a chave
//     configurable: false, // não pode mudar estado ou deletar
//     get: function () {
//       return estoquePrivado;
//     },
//     set: function (valor) {
//       if (typeof valor !== 'number') return;
//       estoquePrivado = valor;
//     }
//   });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1, p1.estoque);
// p1.estoque = 'sssddddd';
// console.log(p1, p1.estoque);
// p1.estoque = 400;
// console.log(p1, p1.estoque);

// const produto = { nome: 'Caneca', preco: 1.8 };
// const outracoisa = { nome: produto.nome, preco: produto.preco };
// // const outracoisa = { ...produto }; // não copia o objeto, cria um novo
// // const outracoisa = Object.assign({}, produto); // não copia o objeto, cria um novo

// outracoisa.nome = 'Outra nome';
// outracoisa.preco = 2.5;

// console.log(produto);
// console.log(outracoisa);
// console.log(Object.keys(produto)); // chaves do objeto
// console.log(Object.values(produto)); // valores do objeto
// console.log(Object.entries(produto)); // chaves e valores do objeto
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // propriedades da chave do obj

// função construtora -> OBJ
// OBJ.prototype.atributo = 'valor' (ou método/função)

// const objA = {
//   chaveA: 'A'
// };
// const objB = {
//   chaveB: 'B'
// };

// Object.setPrototypeOf(objB, objA);
// console.log(objB.chaveA);

// function Produto (nome, preco) {
//   this.nome = nome;
//   this.preco = preco;
// }

// Produto.prototype.desconto = function (percentual) { return this.preco * (1 - percentual / 100); };

// const p1 = new Produto('Camiseta', 20);
// console.log(p1);
// console.log(p1.desconto);
// console.log(Produto.prototype);
// console.log(p1.desconto(10));

// function Produto (nome, preco) {
//   this.nome = nome;
//   this.preco = preco;
// }

// Produto.prototype.aumento = function (quantia) { this.preco += quantia; };
// Produto.prototype.desconto = function (quantia) { this.preco -= quantia; };

// function Camiseta (nome, preco, cor) {
//   Produto.call(this, nome, preco);
//   this.cor = cor;
// }
// Camiseta.prototype = Object.create(Produto.prototype);
// Camiseta.prototype.constructor = Camiseta;
// const camiseta = new Camiseta('regata', 7.5, 'preta');
// camiseta.aumento(10);
// console.log(camiseta);

// function Conta (agencia, conta, saldo) {
//   this.agencia = agencia;
//   this.conta = conta;
//   this.saldo = saldo;
// }

// Conta.prototype.sacar = function (valor) {
//   if (this.saldo < valor) {
//     console.log('Saldo insuficiente!');
//     this.verSaldo();
//     return;
//   }

//   this.saldo -= valor;
//   this.verSaldo();
// };
// Conta.prototype.depositar = function (valor) {
//   this.saldo += valor;
//   this.verSaldo();
// };
// Conta.prototype.verSaldo = function () {
//   console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`);
// };

// function ContaCorrente (agencia, conta, saldo, limite) {
//   Conta.call(this, agencia, conta, saldo);
//   this.limite = limite;
// }

// ContaCorrente.prototype = Object.create(Conta.prototype);
// ContaCorrente.prototype.constructor = ContaCorrente;
// ContaCorrente.prototype.sacar = function (valor) {
//   if (this.saldo + this.limite < valor) {
//     console.log('Limite insuficiente!');
//     this.verSaldo();
//     return;
//   }

//   this.saldo -= valor;
//   this.verSaldo();
// };

// function ContaPoupanca (agencia, conta, saldo) {
//   Conta.call(this, agencia, conta, saldo);
// }

// ContaPoupanca.prototype = Object.create(Conta.prototype);
// ContaPoupanca.prototype.constructor = ContaPoupanca;

// const conta1 = new Conta(11, 22, 10);
// console.log(conta1);
// conta1.depositar(15);
// conta1.sacar(20);
// conta1.sacar(20);
// console.log();
// const contacorrente = new ContaCorrente(11, 22, 10, 200);
// console.log(contacorrente);
// contacorrente.depositar(15);
// contacorrente.sacar(200);
// contacorrente.sacar(200);
// console.log();
// const contapoupanca = new ContaPoupanca(11, 22, 10, 200);
// console.log(contapoupanca);
// contapoupanca.depositar(15);
// contapoupanca.sacar(200);
// contapoupanca.sacar(200);

const falar = {
  falar () {
    console.log(`${this.nome} está falando.`);
  }
};
const beber = {
  beber () {
    console.log(`${this.nome} está bebendo.`);
  }
};
const pessoaPrototye = Object.assign({}, falar, beber);

function criaPessoa (nome, sobrenome) {
  return Object.create(pessoaPrototye, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}
const p1 = criaPessoa('Mateus', 'Oliveira');
console.log(p1);
p1.falar();
p1.beber();

// class Pessoa {
//   constructor (nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }

//   // métodos já são slavos no prototype automaticamente
//   falar () {
//     console.log(`${this.nome} está falando.`);
//   }
// }

// const p1 = new Pessoa('Mateus', 'Oliveira');
// console.log(p1);
// p1.falar();

// const _velocidade = Symbol('velocidade');

// class Carro {
//   constructor (nome) {
//     this.nome = nome;
//     this[_velocidade] = 0;
//   }

//   set velocidade (valor) {
//     if (typeof valor !== 'number') return;
//     if (valor > 100 || valor < 0) return;
//     this[_velocidade] = valor;
//   }

//   get velocidade () {
//     return this[_velocidade];
//   }

//   acelerar () {
//     if (this[_velocidade] >= 100) return;
//     this[_velocidade]++;
//   }

//   freiar () {
//     if (this[_velocidade] <= 0) return;
//     this[_velocidade]--;
//   }
// }

// const c1 = new Carro('Fusca');
// for (let i = 0; i <= 200; i++) {
//   c1.acelerar();
// }
// c1.velocidade = 15;
// console.log(c1);

// class DispositivoEletronico {
//   constructor (nome) {
//     this.nome = nome;
//     this.ligado = false;
//   }

//   ligar () {
//     if (this.ligado) {
//       console.log(this.nome + ' já ligado');
//       return;
//     }

//     this.ligado = true;
//   }

//   desligar () {
//     if (!this.ligado) {
//       console.log(this.nome + ' já desligado');
//       return;
//     }

//     this.ligado = false;
//   }
// }

// class Smartphone extends DispositivoEletronico {
//   constructor (nome, cor) {
//     super(nome);
//     this.cor = cor;
//   }
// }

// const d1 = new DispositivoEletronico('TV');
// const d2 = new Smartphone('Iphone', 'preto');
// console.log(d1);
// console.log(d2);
// d1.ligar();
// d1.ligar();
// d1.desligar();
// d1.desligar();

// class ControleRemoto {
//   constructor (tv) {
//     this.tv = tv;
//     this.volume = 0;
//   }

//   aumentaVolume () {
//     this.volume += 2;
//   }

//   diminuirVolume () {
//     this.volume -= 2;
//   }

//   static trocaPilha () {
//     console.log('Troca pilha');
//   }
// }

// const controle1 = new ControleRemoto('LG');
// controle1.aumentaVolume();
// controle1.aumentaVolume();
// controle1.aumentaVolume();
// console.log(controle1);
// ControleRemoto.trocaPilha();

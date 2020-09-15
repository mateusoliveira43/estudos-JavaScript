// const nome = 'Mateus';
// const sobrenome = 'Oliveira';

// const falaNome = () => {
//   console.log(nome, sobrenome);
// };

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;
// exports.nome = nome;
// // exports.mateus = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';
// module.exports = { nome, sobrenome, falaNome };

// // console.log(module.exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;

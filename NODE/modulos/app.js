// const mod1 = require('./mod1');
// console.log(mod1);
// mod1.falaNome();
// console.log(mod1.mateus);
// const falaNome = require('./mod1').falaNome;
// falaNome();
// const { nome, sobrenome, falaNome } = require('./mod1');
// console.log(nome);
// const { Pessoa } = require('./mod1');

// const p1 = new Pessoa('Mateus');
// console.log(p1);

const multiplicacao = require('./mod2');
const path = require('path');

console.log(multiplicacao(2, 9));
console.log(__filename);
console.log(__dirname);
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'));
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));

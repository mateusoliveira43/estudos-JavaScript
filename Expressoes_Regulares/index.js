// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
// g : global (encontrar todas as ocorrências)
// i : insensitive 
// () : grupo
// | : ou

const {texto} = require('./base')

const regExp1 = /(maria|joão)(, hoje sua esposa)/gi;
const found = regExp1.exec(texto);

console.log(found);
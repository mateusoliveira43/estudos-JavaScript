// const nomes = ['Mateus', 'Tolói', 'Isabela', 'Maria', 'Marco'];
// const nomes = new Array('Mateus', 'Tolói', 'Isabela', 'Maria', 'Marco');
// Índices: nomes[i]
// delete nomes[i]: deleta o índice i mas não remove o índice (deixa <1 empty item>)
// console.log(nomes);
// console.log('Número de elementos:', nomes.length);
// const nomePop = nomes.pop(); // remove do fim (não altera índices)
// console.log(nomes);
// console.log(nomePop);
// const nomeShift = nomes.shift(); // remove do início (altera índices)
// console.log(nomes);
// console.log(nomeShift);
// nomes.push('Marco'); // adiciona no fim (não altera índices)
// console.log(nomes);
// nomes.unshift('Mateus'); // adiciona no início (altera índices)
// console.log(nomes);
// const nomesSlice = nomes.slice(2, 4);
// console.log(nomesSlice);
// const nome = 'Mateus Souza Oliveira';
// const nomeSeparado = nome.split(' ');
// console.log(nomeSeparado);
// const nomeJunto = nomeSeparado.join(' ');
// console.log(nomeJunto);

// splice(no_indíce, qtd_delete, add_elem, add_elem, ...), retorna um array
// const removidos = nomes.splice(2, 2, 'Jacó', 'Jerônima');
// console.log(nomes, removidos);
// const nomesConcatenados = nomes.concat(removidos);
// console.log(nomesConcatenados);
// const nomesSpread = [...nomes, ...removidos];
// console.log(nomesSpread);

//            filter
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log(numeros);

// const numerosFiltardos = numeros.filter(valor => valor > 10);
// console.log(numerosFiltardos);
// const numerosFiltardos2 = numeros.filter(valor => !(valor % 2));
// console.log(numerosFiltardos2);

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
];
console.log(pessoas);
// const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);
// console.log(pessoasComNomeGrande);
// const pessoasComMais50Anos = pessoas.filter(valor => valor.idade > 50);
// console.log(pessoasComMais50Anos);
// const nomeTerminaComA = pessoas.filter(valor => valor.nome.endsWith('a'));
// console.log(nomeTerminaComA);

//            map
// const numerosDobrados = numeros.map(valor => valor * 2);
// console.log(numerosDobrados);
// const nomes = pessoas.map(valor => valor.nome);
// console.log(nomes);
// const idades = pessoas.map(valor => ({ idade: valor.idade }));
// console.log(idades);
// const pessoasComID = pessoas.map((valor, indice) => ({ nome: valor.nome, idade: valor.idade, id: indice }));
// console.log(pessoasComID);

//            reduce
// const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
// console.log(soma);
// const pares = numeros.reduce((acumulador, valor) => {
//   if (!(valor % 2)) acumulador.push(valor);
//   return acumulador;
// }, []);
// console.log(pares);
// const maisVelha = pessoas.reduce((acumulador, valor) => {
//   if (acumulador.idade > valor.idade) return acumulador;
//   return valor;
// });
// console.log(maisVelha);

//            forEach
// numeros.forEach(valor => console.log(valor));
// let total = 0;
// numeros.forEach(valor => (total += valor));
// console.log(total);

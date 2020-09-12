# Resumo Curso JavaScript

Resumo de "Curso de JavaScript do básico ao Avançado (com TypeScript)" ministrado por Luiz Otávio Miranda na Udemy.

## Instalção NodeJS

Atualizando pacotes

```bash
sudo apt update
```

REMOVE O NODE ANTERIOR (se existir)

```bash
sudo apt purge --auto-remove nodejs
sudo rm /etc/apt/sources.list.d/nodesource.list*
```

INSTALA O CURL

```bash
sudo apt install curl
```

BAIXA E INSTALA O NODE 12

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install nodejs
```

## Básico

console.log(parametro);
window.alert(parametro);
typeof parametro;
parseInt(parametro);
parseFloat(parametro);
Number(parametro);
window.confirm(parametro);
window.prompt(parametro);

Documentação:

- https://www.w3schools.com/js/
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
- https://www.ecma-international.org/publications/standards/Ecma-262.htm

## Dados Primitivos (imutáveis)

Quando atribuimos variáveis, elas são apenas copiadas

### String

```js
''
""
`${}` //template string
```

### Number

Inteiros e pontos flutuantes

### Undefined

Variável não declarada.

### Nulo

```js
null;
```

### Booleano

```js
true;
false;
```

### Comentários

```js
// ou por bloco /* */
```

### Variáveis

seu valor pode ser **variado** dentro do código.

```js
let nome_variavel = "valor";
var nome_variavel = "valor"; //antigo
```

O comando `var` é antigo e não é mais utilizado.

### Constantes

```js
const nome_constante = "valor";
```

### Operadores Aritméticos

Adição de números/Concatenação de strings

```js
+
```

Subtração, multiplicação e divisão

```js
- * /
```

Pontenciação

```js
**
```

Resto da divisão inteira

```js
%
```

Incremento/decremento

```js
++ --
let contador = 1;
contador++;    // 2 : primeiro executa a variável
++contador;    // 3 : primeiro executa o incremento
contador += 1; // 4
```

## Dados por referência (Mutáveis)

quando atribuimos variáveis, eles são referenciados na mémoria.
Para fazer uma cópia simples

```js
let variavel = [...variavel]; // para array
let variavel = { ...variavel }; // para objeto
```

### Arrays

```js
[param, param, ...]
```

```js
const numeros = [1, 2, 3, 4, 5];
const [um, dois, ...resto] = numeros;
// um = 1, dois = 2, resto = [3, 4, 5]
```

### Funções

```js
function nome_funcao(parametros = valor_pre_definido) {
  corpo;
  return retorno;
}
```

### Arrow functions

```js
const nomeFuncao = (param) => {
  corpo da funcao;
  return resultado;
};

const nomeFuncao = (param) => corpo da funcao;
```

### Objetos

```js
const nome_objeto = {
  dados: "valores",
};
```

## Operadores de comparação

```js
a > b; // maior que
a >= b; // maior ou igual a
a < b; // menor que
a <= b; // menor ou igual a
a == b; // igualdade (valor) * NÃO UTILIZADO
a === b; // igualdade estrita (valor e tipo)
a != b; // diferente (valor) * NÃO UTILIZADO
a !== b; // diferente estrito (valor e tipo)
```

## Operadores Lógicos

```js
&& // E
|| // Ou
!  // Não
```

## Operadores Condicionais

```js
if (condicao) {
  corpo;
} else if (condicao) {
  corpo;
} else {
  corpo;
}
```

## Operador ternário

```js
condicao ? se_sim : se_não; // substitui if/else curtos
```

## For

```js
for (let i = 0; i < 6; i += 1) {
  comando;
}

const pessoa = {
  nome: 'Mateus',
  sobrenome: 'Oliveira',
  idade: 24
};

for (const n in pessoa) {
  console.log(n, pessoa[n]);
}

const frutas = ['Pêra', 'Maçã', 'Uva'];

for (const k of frutas) {
  console.log(k);
}
```

## While

```js
let i = 0;
while (i <= 10) {
  comando
  i++;
}

do {
  comando
  i++;
} while (i <= 10);
```

## Continue e break

```js
continue // vai para o próximo laço de iteração
break // sai do laço de iteração
```

## Try, catch e throw

```js
try {
  código;
} catch (erro) {
  código;
}

throw ('erro');
throw new Error('erro');

try {
  código;
} catch (erro) {
  código;
} finally {
  código;
}
```
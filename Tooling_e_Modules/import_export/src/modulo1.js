const nome = 'Mateus';
const sobrenome = 'Oliveira';
const idade = 30;

function soma(x, y) {
    return x + y;
}

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome, sobrenome, idade, soma, Pessoa as default };
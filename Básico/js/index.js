function meuEscopo () {
  const form = document.querySelector('.form');
  const logdeocorrencia = document.querySelector('#log');
  const pessoas = [];
  // form.onsubmit = function (evento) {
  //   evento.preventDefault();
  //   alert(1);
  //   console.log("Foi enviado.");
  // };

  function logDeOcorrencias (a, b, c, d) {
    logdeocorrencia.value += `${a} ${b} ${c} ${d} \n`;
    logdeocorrencia.scrollTop = logdeocorrencia.scrollHeight;
  }

  function dadosPessoais (nome, sobrenome, peso, altura) {
    return { nome, sobrenome, peso, altura };
  }

  function recebeEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('#nome');
    const sobrenome = form.querySelector('#sobrenome');
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');

    logDeOcorrencias(nome.value, sobrenome.value, peso.value, altura.value);
    pessoas.push(
      dadosPessoais(nome.value, sobrenome.value, peso.value, altura.value)
    );

    console.log(pessoas);
    form.reset();
  }

  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

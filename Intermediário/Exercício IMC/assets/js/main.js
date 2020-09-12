function meuEscopo () {
  // previne as variáveis de serem utilizadas
  const formulario = document.querySelector('form');

  function recebeFormulario (evento) {
    evento.preventDefault();

    const peso = Number(formulario.querySelector('#peso').value);
    const altura = Number(formulario.querySelector('#altura').value);
    if (Number.isNaN(peso) || peso <= 0) {
      formulario.querySelector('.mensagem').classList.remove('resultado');
      formulario.querySelector('.mensagem').classList.add('erro');
      formulario.querySelector('.mensagem').innerHTML = 'Peso inválido.';
      return null;
    }
    if (Number.isNaN(altura) || altura <= 0) {
      formulario.querySelector('.mensagem').classList.remove('resultado');
      formulario.querySelector('.mensagem').classList.add('erro');
      formulario.querySelector('.mensagem').innerHTML = 'Altura inválida';
      return null;
    }
    const imc = (peso / altura ** 2).toFixed(1);
    formulario.querySelector('.mensagem').classList.remove('erro');
    formulario.querySelector('.mensagem').classList.add('resultado');
    if (imc < 18.5) {
      formulario.querySelector('.mensagem').innerHTML = `Seu IMC é ${imc}. Você está abaixo do peso.`;
    } else if (imc >= 18.5 && imc < 25) {
      formulario.querySelector('.mensagem').innerHTML = `Seu IMC é ${imc}. Você está com peso normal.`;
    } else if (imc >= 25 && imc < 30) {
      formulario.querySelector('.mensagem').innerHTML = `Seu IMC é ${imc}. Você está com sobrepeso.`;
    } else if (imc >= 30 && imc < 35) {
      formulario.querySelector('.mensagem').innerHTML = `Seu IMC é ${imc}. Você está com obesidade grau 1.`;
    } else if (imc >= 35 && imc < 40) {
      formulario.querySelector('.mensagem').innerHTML = `Seu IMC é ${imc}. Você está com obesidade grau 2.`;
    } else {
      formulario.querySelector('.mensagem').innerHTML = `Seu IMC é ${imc}. Você está com obesidade grau 3.`;
    }

    formulario.reset();
  }

  formulario.addEventListener('submit', recebeFormulario);
}
meuEscopo();

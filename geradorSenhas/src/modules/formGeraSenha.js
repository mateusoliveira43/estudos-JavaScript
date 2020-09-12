import geraSenha from './geradores';

const qtdCaracteres = document.querySelector('#qtdCaracteres');
const addNumeros = document.querySelector('#addNumeros');
const addLetrasMaiusculas = document.querySelector('#addLetrasMaiusculas');
const addLetrasMinusculas = document.querySelector('#addLetrasMinusculas');
const addSimbolos = document.querySelector('#addSimbolos');
const btnGeraSenha = document.querySelector('button');
const resultadoDisplay = document.querySelector('.titulo');

export default () => {
  btnGeraSenha.addEventListener('click', () => {
    resultadoDisplay.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    addLetrasMaiusculas.checked,
    addLetrasMinusculas.checked,
    addNumeros.checked,
    addSimbolos.checked,
  );

  return senha || 'Nada selecionado.';
}
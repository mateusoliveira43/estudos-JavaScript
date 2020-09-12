function criaHoraSegundos (segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    timeZone: 'UTC'
  });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciarRelogio () {
  relogio.classList.remove('vermelho');
  if (!timer) {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = criaHoraSegundos(segundos);
    }
    , 1000);
  }
}

function pausarRelogio () {
  relogio.classList.add('vermelho');
  clearInterval(timer);
  timer = null;
}

function zerarRelogio () {
  relogio.classList.remove('vermelho');
  clearInterval(timer);
  segundos = 0;
  relogio.innerHTML = criaHoraSegundos(segundos);
  timer = null;
}

iniciar.addEventListener('click', iniciarRelogio);
pausar.addEventListener('click', pausarRelogio);
zerar.addEventListener('click', zerarRelogio);

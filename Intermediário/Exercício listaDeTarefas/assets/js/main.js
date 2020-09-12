const botao = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

function criaLi () {
  return document.createElement('li');
}

function criaTarefa (textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  criaBotaoApagar(li);
  ul.appendChild(li);
  limpaInput();
  salvarTarefas();
}

function limpaInput () {
  input.value = '';
  input.focus();
}

function criaBotaoApagar (li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar');
  li.appendChild(botaoApagar);
}

botao.addEventListener('click', function () {
  if (!input.value) return;
  criaTarefa(input.value);
});
input.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!input.value) return;
    criaTarefa(input.value);
  }
});
document.addEventListener('click', function (e) {
  const el = e.target;
  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas () {
  const liTarefas = ul.querySelectorAll('li');
  const listaDeTarefas = [];

  for (const tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerHTML;
    tarefaTexto = tarefaTexto.replace('<button class="apagar">Apagar</button>', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas () {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for (const tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();

// function addTarefa () {
//   if (input.value) {
//     const texto = document.createTextNode(input.value + ' ');
//     const botao = document.createElement('button');
//     const textoBotao = document.createTextNode('Apagar');
//     botao.appendChild(textoBotao);
//     const li = document.createElement('li');
//     li.appendChild(texto);
//     li.appendChild(botao);
//     li.classList.add('apagar');
//     ul.appendChild(li);
//     input.value = '';
//   }
// }

// function apagarTarefa () {
//   console.log('oi');
// }
// const apagar = document.querySelector('.apagar button');
// apagar.addEventListener('click', apagarTarefa);

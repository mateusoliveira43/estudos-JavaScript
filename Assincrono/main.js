function aleatorio (min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera (msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject(new Error('VALOR INCOMPATÍVEL'));
        return;
      }

      resolve(msg.toUpperCase() + ' - pasei na promise');
    }, tempo);
  });
}

// espera('Frase 1', aleatorio(1, 3))
//   .then(resposta => {
//     console.log(resposta);
//     return espera('Frase 2', aleatorio(1, 3));
//   })
//   .then(resposta => {
//     console.log(resposta);
//     return espera('Frase 3', aleatorio(1, 3));
//   })
//   .then(resposta => console.log(resposta))
//   .catch(e => console.log(e));

// const promises = [
//   espera('Promise 1', aleatorio(1, 3)),
//   espera('Promise 2', aleatorio(1, 3)),
//   espera('Promise 3', aleatorio(1, 3))
// ];

// Promise.all(promises)
//   .then(valor => console.log(valor))
//   .catch(erro => console.log(erro));

// Promise.race(promises)
//   .then(valor => console.log(valor))
//   .catch(erro => console.log(erro));

async function executa () {
  try {
    const fase1 = await espera('Fase 1', aleatorio(1, 3));
    console.log(fase1);

    const fase2 = await espera('Fase 2', aleatorio(1, 3));
    console.log(fase2);

    const fase3 = await espera('Fase 3', aleatorio(1, 3));
    console.log(fase3);
  } catch (e) {
    console.log(e);
  }
}
executa();

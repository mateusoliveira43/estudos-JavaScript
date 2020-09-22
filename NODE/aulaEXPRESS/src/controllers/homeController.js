// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//   titulo: 'Outra coisa qualquer',
//   descricao: 'Outra descrição.'
// })
// HomeModel.find()
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

exports.paginaInical = (req, res) => {
  res.render('index', {
    titulo: 'Este será o <span style="color:red">título</span> da página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send('Nova rota de Post.');
  return;
};

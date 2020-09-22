// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//   titulo: 'Outra coisa qualquer',
//   descricao: 'Outra descrição.'
// })
// HomeModel.find()
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

exports.paginaInical = (req, res) => {
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send('Nova rota de Post.');
  return;
};

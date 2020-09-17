// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//   titulo: 'Outra coisa qualquer',
//   descricao: 'Outra descrição.'
// })
// HomeModel.find()
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

exports.paginaInical = (req, res) => {
  // res.send(`
  // <form action="/" method="POST">
  // Nome do cliente: <input type="text" name="nome"><br>
  // Outro campo: <input type="text" name="outracoisa">
  // <button>Enviar formulário</button>
  // </form>
  // `);
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send('Nova rota de Post.');
  return;
};

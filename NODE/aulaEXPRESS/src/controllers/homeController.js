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

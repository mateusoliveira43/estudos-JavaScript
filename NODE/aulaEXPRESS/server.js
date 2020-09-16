// CRUD: Create (POST), Read (GET), Update (PUT) e Delete (DELETE)
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true, }));
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('servidor executando na porta 3000');
});

// app.get('/testes/:idUsusarios?/:parametro?', (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   // res.send(req.params);
//   res.send(req.query);
// });

// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.send(`Recebi o formulário: ${req.body.outracoisa}`);
// });

// app.get('/contato', (req, res) => {
//   res.send('<h1>Obrigado por entrar em contato com a gente.</h1>');
// });

// CRUD: Create (POST), Read (GET), Update (PUT) e Delete (DELETE)
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true, }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(meuMiddleware);

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

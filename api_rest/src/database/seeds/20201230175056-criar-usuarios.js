const bcryptjs = require('bcryptjs');

// Comandos do Seed
// criar: npx sequelize seed:generate --name nome-arquivo
// enviar para o DB: npx sequelize db:seed:all
// usar flag --debug no comando anterior, caso ocorra um erro, para retornar log

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Usuário criado com SEED',
        email: 'seed1@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Batman SEED',
        email: 'seed2@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Spiderman SEED',
        email: 'seed3@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};

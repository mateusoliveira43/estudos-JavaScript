"use strict";// Comandos da Migration
// criar: npx sequelize migration:create --name=nome-arquivo
// enviar para o DB: npx sequelize db:migrate
// usar flag --debug no comando anterior, caso ocorra um erro, para retornar log

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  ),

  down: async () => { },
};

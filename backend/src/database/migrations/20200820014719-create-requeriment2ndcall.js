'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('requeriment2ndcall', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discipline: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      test_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      comments: {
        type: Sequelize.STRING,
        defaultValue: 'No comments.',
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('requeriment2ndcall');
  },
};

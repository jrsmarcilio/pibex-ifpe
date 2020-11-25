'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('requeriments', {
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
      type_requeriment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discipline: {
        type: Sequelize.STRING,
        defaultValue: 'it is not necessary.',
      },
      test_date: {
        type: Sequelize.DATE,
        defaultValue: '2000-01-01',
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATE,
        defaultValue: '2000-01-01',
        allowNull: false,
      },
      final_date: {
        type: Sequelize.DATE,
        defaultValue: '2000-01-01',
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
    await queryInterface.dropTable('requeriments');
  },
};

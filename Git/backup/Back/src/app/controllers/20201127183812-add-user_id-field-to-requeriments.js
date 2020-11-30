'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('requerimentos', 'usuario_id', {
      type: Sequelize.INTEGER,
      references: { model: 'usuarios', key: 'id' },
      onUpdate: 'SET NULL',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('requerimentos', 'usuario_id');
  },
};

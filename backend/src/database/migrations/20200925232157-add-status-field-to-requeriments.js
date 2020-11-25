'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('requeriments', 'status', {
      type: Sequelize.INTEGER,
      defaultValue: 2,
      allowNull: false,
    });
  },
  down: async (queryInterface) => {
    return queryInterface.dropTable('requeriments', 'status');
  },
};

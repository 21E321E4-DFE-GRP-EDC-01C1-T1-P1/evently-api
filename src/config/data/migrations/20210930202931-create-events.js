'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.DATEONLY
      },
      startTime: {
        type: Sequelize.DATEONLY
      },
      endTime: {
        type: Sequelize.DATEONLY
      },
      waitEvent: {
        type: Sequelize.BOOLEAN
      },
      ActivityId: { 
        allowNull: false,
        type: Sequelize.INTEGER, 
        references: {model: 'Activities', key: 'id'},
        onDelete:'CASCADE'
      },
      AddressId: { 
        allowNull: false,
        type: Sequelize.INTEGER, 
        references: {model: 'Addresses', key: 'id'},
        onDelete:'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING(50)
      },
      lastName: {
        type: Sequelize.STRING(50)
      },
      phone: {
        type: Sequelize.STRING(11)
      },
      email: {
        type: Sequelize.STRING(50)
      },
      Identifier: {
        type: Sequelize.STRING(11)
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
    await queryInterface.dropTable('Users');
  }
};
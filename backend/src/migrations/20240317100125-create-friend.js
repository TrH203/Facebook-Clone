'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Friends", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        alowNull: false,
        autoIncrement: true,
      },
      friend1Id: {
        type: Sequelize.STRING,
        alowNull: false
      },
      friend2Id: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Friends');
  }
};

/* eslint-disable no-unused-vars */
"use strict";
/** @type {import('sequelize-cli').Migration} */
const { Enums } = require("../utils/common");
const { ADMIN, CONSUMER, TEAM } = Enums.USER_ROLES_ENUMS;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Roles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.ENUM({
          values: [ADMIN, CONSUMER, TEAM],
        }),
        allowNull: false,
        defaultValue: CONSUMER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Roles");
  },
};

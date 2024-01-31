"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "accounts",
      [
        {
          username: "jd",
          fullname: "John Doe",
          mobileno: "9876543210",
          email: "john@doe.com",
          plan: "ultimate",
          mrp: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "dj",
          fullname: "Doe John",
          mobileno: "0123456789",
          email: "doe@john.com",
          plan: "ultra",
          mrp: 899,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

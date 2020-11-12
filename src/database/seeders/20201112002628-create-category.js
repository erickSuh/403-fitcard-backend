module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Supermercado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Restaurante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Borracharia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Posto',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Oficina',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}

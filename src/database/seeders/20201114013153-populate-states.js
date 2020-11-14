/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('states', [
      {
        name: 'Acre',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Alagoas',
        abbreviation: 'AL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Amapá',
        abbreviation: 'AP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Amazonas',
        abbreviation: 'AM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bahia',
        abbreviation: 'BA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ceará',
        abbreviation: 'CE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Distrito Federal',
        abbreviation: 'DF',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Espírito Santo',
        abbreviation: 'ES',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Goiás',
        abbreviation: 'GO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maranhão',
        abbreviation: 'MA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mato Grosso',
        abbreviation: 'MT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mato Grosso do Sul',
        abbreviation: 'MS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Minas Gerais',
        abbreviation: 'MG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pará',
        abbreviation: 'PA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Paraíba',
        abbreviation: 'PB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Paraná',
        abbreviation: 'PR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pernambuco',
        abbreviation: 'PE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Piauí',
        abbreviation: 'PI',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rio de Janeiro',
        abbreviation: 'RJ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rio Grande do Norte',
        abbreviation: 'RN',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rio Grande do Sul',
        abbreviation: 'RS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rondônia',
        abbreviation: 'RO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Roraima',
        abbreviation: 'RR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Santa Catarina',
        abbreviation: 'SC',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'São Paulo',
        abbreviation: 'SP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sergipe',
        abbreviation: 'SE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tocantins',
        abbreviation: 'TO',
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

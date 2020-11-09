export default {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'generic_back',
  define: {
    timestamp: true, // Add created_ad and update_at
    underscored: true, // Define snake case (ex: teste_teste)
  },
}

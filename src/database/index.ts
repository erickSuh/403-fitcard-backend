import bcrypt from 'bcryptjs'
import Sequelize from 'sequelize'

import dbConfig from './config/config.json'
import User from './models/user'

const connection = new Sequelize(dbConfig)

// Inicialização de models
User.init(connection)

// Associações de models
User.associate(connection.models)

// Transforma password em hash
User.beforeCreate(async (user: any, options) => {
  // eslint-disable-next-line no-param-reassign
  user.password = await bcrypt.hash(user.password, 8)
})

module.exports = connection

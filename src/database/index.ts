import bcrypt from 'bcryptjs'
import Sequelize from 'sequelize'

import dbConfig from '../config/database.ts'
import User from '../models/User'

const connection = new Sequelize(dbConfig)

// Inicialização de models
User.init(connection)

// Associações de models
User.associate(connection.models)

// Transforma password em hash
User.beforeCreate(async (user, options) => {
  user.password = await bcrypt.hash(user.password, 8)
})

module.exports = connection

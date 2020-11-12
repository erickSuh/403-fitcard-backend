const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.category, {
        foreignKey: 'companyId',
        as: 'fg_company',
      })
    }
  }
  company.init(
    {
      name: DataTypes.STRING,
      fantasyName: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      phone: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      agency: DataTypes.STRING,
      account: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'company',
    }
  )

  return company
}

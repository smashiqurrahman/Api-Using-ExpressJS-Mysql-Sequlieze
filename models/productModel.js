module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        title: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          price: {
            type: DataTypes.INTEGER,
            allowNull: true,
          }
    })

    return Product
}

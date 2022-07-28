module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          phone: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
    
    },
    {
        // timestamps: false means by default createdAt and updatedAt will not create in db
        timestamps: false,
    }
    )
    
    return user
}

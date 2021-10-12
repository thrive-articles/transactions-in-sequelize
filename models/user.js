module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', {
            id: {
				type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
			},
            firstName:{
                type: DataTypes.STRING,
            },
            age: {
                type: DataTypes.INTEGER,
            },
        },
    );
    return User;
};


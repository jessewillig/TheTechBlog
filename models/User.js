const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(pw) {
        return bcrypt.compareSync(pw, this.password);
    };
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true,
                // ensuring no bad words are used
                notContains: [["fuck", "shit", "hell", "bitch", "damn"]]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                length: [8, 25]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (userData) => {
                userData.password = await bcrypt.hash(userData.password, 10);
                return userData;
            },
            beforeUpdate: async (userData) => {
                userData.password = await bcrypt.hash(userData.password, 10);
                return userData;
            }
        },
        sequelize,
        freezeTableName: true,
        modelName: "user"
    }
);

module.exports = User;